import mongoose from "mongoose";

// 1 - create a schema
// 2 - model based off of that schema


const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    xp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 1,
    },
    streak: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true //createdAt, updatedAt
});

const User = mongoose.model('User', userSchema);

export default User;