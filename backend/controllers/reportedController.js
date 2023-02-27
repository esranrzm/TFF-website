const asyncHandler = require('express-async-handler')
const rUser = require('../models/reportUserModel')

const User = require('../models/userModel')

// @desc create reported user
// @route POST /api/reportedUsers
// @access Private
const createReport = asyncHandler(async (req, res) => {

    const {email, name} = req.body

    const user = await User.findOne({email})

    const rruser = await rUser.findOne({name})
    if(!rruser) {
        const ruser = await rUser.create({
        
            user: user._id,
            name: name,
        })
        res.status(201).json(ruser)
    }
    else{
        res.status(402)
        throw new Error('User already reported')
    }
    
    
})

// @desc Delete user
// @route DELETE /api/reportedUsers/:id
// @access Private

const deleterUser = asyncHandler(async (req, res) => {
    console.log('user controller ' + req.params.id)
    // get user using the id and jwt
    const user = await rUser.findById(req.params.id)

    if(!user) {
        res.status(404)
        throw new Error('User not found')
    }

    await rUser.findByIdAndDelete(req.params.id)

    res.status(200).json("User has been deleted");
})

// @desc Get reported users
// @route GET /api/reportedUsers/:id
// @access Private
const getrUser = asyncHandler(async (req, res) => {
    const {user_id} = req.params.id
    console.log(user_id)
    
    const ruser = await rUser.find({user: user_id})

    
    if(!ruser) {
        res.status(404)
        throw new Error('Team not found')
    }

    if(ruser.user.toString() !== req.user._id) {
        res.status(401)
        throw new Error('Not authorize')
    }
    res.status(200).json(ruser)
})

const getrUsers = asyncHandler(async (req, res) => {
    
    const users = await rUser.find()
    res.status(200).json(users)
  
  })


module.exports = {
    createReport,
    deleterUser,
    getrUser,
    getrUsers
}