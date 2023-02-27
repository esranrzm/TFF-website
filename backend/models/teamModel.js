const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const teamSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    player1: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player2: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player3: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player4: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player5: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player6: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player7: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player8: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player9: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player10: {
        type: String,
        required: [true, 'Please select a player'],
    },
    player11: {
        type: String,
        required: [true, 'Please select a player'],
    },
    teamName: {
        type: String,
        required: [true, 'Please name your team']
    },
    userVerif: {
        type: Boolean,
        required: [true]
    },
    likes: [
            {
            type: ObjectId,
             ref:"User"
            }
        ]
},
{
    timestamps: true,
})

module.exports = mongoose.model('teams', teamSchema)