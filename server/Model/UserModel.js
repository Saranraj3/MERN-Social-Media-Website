import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name: { type: String, require: true, unique: true },
    Email: { type: String, require: true, unique: true },
    Password: { type: String, require: true, unique: true },
}, { timestamps: true });



const User = mongoose.model('User', UserSchema);
export default User

