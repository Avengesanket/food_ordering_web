import {model, models, Schema } from "mongoose";
const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true,
        validate: pass =>{
            if(!pass.length || pass.length < 5){
            throw new Error('Password must be at least 5 characters long');
            }
        }
    },
}, {timestamps: true});
export const User = models.User || model('User', UserSchema);
