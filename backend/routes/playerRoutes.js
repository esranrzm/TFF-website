const express = require('express')
const router = express.Router()
const {getPlayers, createPlayer, getPlayer, deletePlayer, updatePlayer, editPlayer} = require('../controllers/playerController.js')

const {protect} = require('../middleware/authMiddleware')



//router.route('/').get(getPlayers)
router.get('/', getPlayers)
router.post('/', createPlayer)
router.delete('/:id', deletePlayer)

router.route('/:id')
.get(getPlayer)
.put(editPlayer)

module.exports = router
