const asyncHandler = require('express-async-handler')


const historic = require('../models/historicDataModel')




const getHistoric = asyncHandler(async (req, res) => {

  //console.log("historicDataController, line10 " +JSON.stringify(req.params) )
  const lele = req.params.personel
  pid = lele.substring(1)
 // console.log('sapr: '+ pid)
  historic.find({personel:pid}, (error, data) => {
        
        if (error) {
          throw new Error('ljdkjsd')
        } else {
          //console.log('duxde @@@@@' + data)
          res.status(201).json(data)
        }
      })
})


const createHistoric = asyncHandler(async (req, res) => {
  console.log("historicDataController: line 35")
    const {personel, pos, monthlyGame, gk_saveRatio, gk_cleanSheets, gk_RunsOut, def_tackle, def_interception, def_clearence, mid_accPassRatio, mid_assists, mid_keyPasses, att_numOfGoals, att_expectedGoalsRatio, att_shootsOnTargetRatio,date} = req.body
  
    
    const Historic = await historic.create({
        personel, 
        pos, 
        monthlyGame,
        gk_saveRatio, 
        gk_cleanSheets, 
        gk_RunsOut, 
        def_tackle, 
        def_interception, 
        def_clearence, 
        mid_accPassRatio, 
        mid_assists, 
        mid_keyPasses, 
        att_numOfGoals, 
        att_expectedGoalsRatio, 
        att_shootsOnTargetRatio,
        date
    })
    console.log("historic controller:" + historic.personel)
    res.status(201).json(Historic)
})


module.exports = {
    getHistoric,
    createHistoric,
}