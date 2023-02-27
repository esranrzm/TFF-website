const mongoose = require('mongoose')
//here historic model has been created to Database
const historicSchema = mongoose.Schema({
    personel: {
        type: String,
       
    },
    pos: {
        type: String,
       
    },
    monthlyGame: {
        type: String,
        
    },

    gk_saveRatio: {
        type: String,
       
    },
    gk_cleanSheets: {
        type: String,
       
        
    },
    gk_RunsOut: {
        type: String,
       
    },
    def_tackle: {
        type: String,
        
    },
    def_interception: {
        type: String,
        
    },
    def_clearence: {
        type: String,
        
        
    },
    mid_accPassRatio: {
        type: String,
        
    },
    mid_assists: {
        type: String,
        
        
    },
    mid_keyPasses: {
        type: String,
       
    },
    att_numOfGoals: {
        type: String,
       
    },
    att_expectedGoalsRatio: {
        type: String,
       
    },
    att_shootsOnTargetRatio: {
        type: String,
       
    },
    date: {
        type: String,
       
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('historics', historicSchema)