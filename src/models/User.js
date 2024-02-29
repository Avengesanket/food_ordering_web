import bcrypt from 'bcrypt';
import { model, models, Schema } from "mongoose";

const saltRounds = 10; // Define the number of salt rounds for bcrypt

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (pass) => pass.length >= 6,
            message: 'Password must be at least 6 characters long'
        }
    }
}, { timestamps: true });

// Middleware to hash the password before saving
UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(this.password, salt);
        this.password = hash;
    }
    next();
});

// const myPlaintextPassword = user.password;
// const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(myPlaintextPassword, salt);
// user.password = hash;

export const User = models.User || model('User', UserSchema);

