import Order from "../models/Order.js"

export const createOrder = async (req, res) => {
    const order = await new Order(req.body);
    try{
        const saveProduct = await order.save();
        res.status(200).json(saveProduct);
    }catch(err){
        res.status(500).json(err);
    }
}