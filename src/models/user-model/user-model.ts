import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Enter firstname.']
    },
    lastname: {
        type: String,
        required: [true, 'Enter lastname.']
    },
    username: {
        type: String,
        required: [true, 'Enter username.']
    },
    emailId: {
        type: String,
        required: [true, 'Enter email.']
    },
    password: {
        type: String,
        required: [true, 'Enter password.']
    },
    createdBy: {
        type: Date,
        required: false,
        default: null
    },
    updatedBy: {
        type: Date,
        required: false,
        default: null
    },
    deletedBy: {
        type: Date,
        required: false,
        default: null
    },
    deletedOn: {
        type: Date,
        required: false,
        default: null
    }
}, {timestamps: true})

const User = mongoose.model('user', UserModel);
export default User;