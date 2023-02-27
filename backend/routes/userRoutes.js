const express = require('express')
const router = express.Router()
const 
{ 
    registerUser, 
    loginUser, 
    loginAdmin, 
    updateUser,
    deleteUser,

    getUser,
    getUsers,
} = require('../controllers/userController.js')


const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.get('/', getUsers)
router.post('/login', loginUser)
router.post('/adminlogin', loginAdmin)


router.route('/:id')
.put(updateUser)
.delete(deleteUser)
.get(getUser)



module.exports=router 