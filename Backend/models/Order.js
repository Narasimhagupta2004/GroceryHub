// backend/models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [
        {
            id: String,
            name: String,
            price: Number,
            quantity: Number,
            image: String,
        }
    ],
    totalPrice: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;