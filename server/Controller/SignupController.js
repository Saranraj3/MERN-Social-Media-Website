import User from "../Model/UserModel.js";
import bcrypt from 'bcryptjs';

export const SignupController = async (req, res) => {
    const { Name, Email, Password } = req.body;
    const HashPassword = bcrypt.hashSync(Password,10)
    const newUser = new User({ Name, Email, Password:HashPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User Created Successfully' });
    } catch (error) {
        res.status(500).json(error.message);
    }
};