const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel')
const User = require('../models/userModel')

const getAllComments = asyncHandler(async (req, res) => {
    const comment = await Comment.find()
    res.status(200).json(comment)
})

const getComment = asyncHandler(async (req, res) => {
    const {user_id} = req.body
    console.log(user_id)
    
    const comment = await Comment.find({user: user_id})

    
    if(!comment) {
        res.status(404)
        throw new Error('Comment not found')
    }
    res.status(200).json(comment)
})

// @desc create comment
// @route POST /api/comments
// @access Private
const createComment = asyncHandler(async (req, res) => {

    const {commentTo, text} = req.body
    const user = await User.findById(req.params.id)
    if(!text){
        res.status(400)
        throw new Error('Please fill the comment field'),
        console.log(commentTo, text)
    }

    const comment = await Comment.create({
        user: user._id,
        commentTo: commentTo,
        text: text,
    })
    console.log("comment Controller", comment)
    res.status(201).json(comment)   
})
module.exports = {
    createComment,
    getAllComments,
    getComment,
}