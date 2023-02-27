const express = require('express')
const router = express.Router()
const { 
    getComment,
    getAllComments,
    createComment
} = require('../controllers/commentController.js')

router.post('/', createComment)
router.get('/', getAllComments)
router.get('/', getComment)

module.exports=router 