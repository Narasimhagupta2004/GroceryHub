const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./models/model');
const LoginAttempt = require('./models/LoginAttempt'); 
const jwt = require('jsonwebtoken');
const middleware = require('./middleware/middleware');
const cors = require('cors');
require('dotenv').config()
const app = express();

const uri = process.env.URI;
const JWT_SECRET = process.env.WT_SECRET; 

mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));

app.use(express.json());
app.use(cors({ origin: "*" }));

// Registration route
app.post('/register', async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;

        // Check if user already exists
        let exist = await Registeruser.findOne({ email });
        if (exist) {
            return res.status(400).send('User Already Exists');
        }
        
        if (password !== confirmpassword) {
            return res.status(400).send('Passwords do not match');
        }

        let newUser = new Registeruser({
            username,
            email,
            password 
        });

        await newUser.save();
        console.log("Saved user:", newUser);
        res.status(200).send('Registered Successfully');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const loginAttempt = new LoginAttempt({ email, success: false, ipAddress });

        let exist = await Registeruser.findOne({ email });
        
        if (!exist) {
            await loginAttempt.save();
            return res.status(400).send('User not found');
        }

        if (exist.password !== password) { 
            await loginAttempt.save();
            return res.status(400).send('Invalid credentials');
        }

        let payload = {
            user: {
                id: exist.id
            }
        };
        jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, async (err, token) => {
            if (err) throw err;

            loginAttempt.success = true; 
            await loginAttempt.save(); 

            return res.json({ token });
        });
    } catch (err) {
         console.log(err);
         return res.status(500).send('Server Error');
     }
});

// Profile route
app.get('/components/Home', middleware, async (req, res) => {
    try {
         let exist = await Registeruser.findById(req.user.id);
        
         if (!exist) {
             return res.status(400).send('User not found');
         }
        
         res.json(exist);
     } catch (err) {
          console.log(err);
          return res.status(500).send('Server Error');
      }
});

// Start server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
