import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler'
import User from '../models/user.js'


export const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body;

    // const newUser = User(user);

    if(!name || !email || !password) {
        res.status(404)
        throw new Error("Enter all fields")
    }

    const userExists = await User.findOne({email})

    if(userExists) { 
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name, email, password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email, 
            token: generateToken(user._id)
        });
    }else{
        throw new Error("There was a problem") 
    }
    // try {
    //     await newUser.save();
    //     res.status(201).json(newPhoto)
    // } catch (error) {
    //     console.error(error)
    // }
})
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email})
    if(user && ( await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    }else{
        throw new Error("Invalid credentials") 
    }



})

const generateToken = (id) => {
    return jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
      expiresIn: '30d',
    })
  }
export const getUser = asyncHandler(async (req, res) => {

    const {_id, name, email} = await User.findById(req.user.id)
    res.status(201).json({
        _id,
        name,
        email,

    })
})