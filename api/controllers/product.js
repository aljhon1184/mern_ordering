import Product from "../models/Product.js"


export const createProduct = async (req,res) =>{
    const newProduct = new Product(req.body)
    try{

        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    }catch(err){
        res.status(500).json(err);
    }
    
}

export const updateProduct = async (req,res) =>{
    try{
        const updatePro = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {new: true}
        )
        res.status(200).json(updatePro);
    }catch(err){
        res.status(500).json(err);
    }

}

export const deleteProduct = async (req,res) =>{
    try{
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).send("Product has been deleted.")
    }catch(err){
        res.status(500).json(err);
    }


}

export const getProduct = async (req,res) =>{
    const {min, ...others} = req.query;
    try{
        //const product = await Product.findById(req.params.id);
        const product = await Product.find({
            ...others,
        }).limit(req.query.limit);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }

}

export const getAllProduct = async (req,res) =>{
    try{
        const allProduct = await Product.find();

        res.status(200).json(allProduct);
    }catch(err){
        res.status(500).json(err)
    }

}