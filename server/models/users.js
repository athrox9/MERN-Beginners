import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    age: {
        required: true,
        type: Number, 
    },
    username: {
        required: true,
        type: String,
    }
}); 

const userModel = mongoose.model('users', userSchema); 
export default userModel;