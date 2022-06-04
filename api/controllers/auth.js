import User from "../models/User.js";
import bcrypt from "bcrypt"



export const register = async (req,res) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            ...req.body,
            password: hash,
        });
        await newUser.save();
        res.status(200).send("User has been created.");
    }catch(err){
       res.status(500).json(err);
    }
}

export const login = async (req,res) =>{
    try{
        const user = await User.findOne({ email: req.body.email });
        if(user){
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
            if(isPasswordCorrect){
                const { password, isAdmin, ...others } = user._doc;
                res.status(200).json({...others});
            }else{
                res.status(400).send("wrong Password")
            }
        }

        if(!user){
            res.status(505).send("user not found")
        }
    }catch(err){
       res.status(500).json(err);
    }
}