const express = require('express')
const router = express.Router()
const 
{ 
    deleterUser,
    getrUsers,
    getrUser,
    createReport,
} = require('../controllers/reportedController.js')

router.get('/', getrUsers)
router.post('/', createReport)

router.route('/:id')
.delete(deleterUser)
.get(getrUser)

module.exports=router 