const mongoose = require('mongoose')


const reportsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    name: {
        type: String,
        required: [true, 'please add a name']
    },   
    
},
{
    timestamps: true,
})

module.exports = mongoose.model('reportedusers', reportsSchema)