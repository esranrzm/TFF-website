const express = require('express')
const router = express.Router()
const {
    getTeams,
    createTeam, 
    getTeam, 
    getMyTeams,
    deleteTeam, 
    updateTeam
} = require('../controllers/teamController')

const {protect} = require('../middleware/authMiddleware')

//router.route('/').get(getTeams)
router.get('/', getTeams)
router.get('/', getMyTeams)

router.post('/', createTeam)


router.put('/:id', updateTeam)


router.route('/:id')
.get(getTeam)
.delete(deleteTeam)


module.exports = router