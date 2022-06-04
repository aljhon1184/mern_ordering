import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    products: [{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        },
    }
    ],
    total: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {timestamps: true});

export default mongoose.model("Orders", orderSchema);