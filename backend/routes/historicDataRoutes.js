const express = require('express')
const router = express.Router()
const {getHistoric, createHistoric} = require('../controllers/historicDataController.js')

const {protect} = require('../middleware/authMiddleware')



//router.route('/').get(getPlayers)

router.post('/', createHistoric)
router.get('/:personel', getHistoric)
//routes for the personel search
// router.route('/:id')
// .get(getHistoric)



module.exports = router
