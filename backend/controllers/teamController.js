const asyncHandler = require('express-async-handler')
const Team = require('../models/teamModel')
const User = require('../models/userModel')


// @desc Get user team
// @route GET /api/teams
// @access Private
const getTeams = asyncHandler(async (req, res) => {
    
    //console.log(req.team.user)
    //const teams = await Team.find({user: '6377c48740692e6b896cb99f'})
    const teams = await Team.find()

    res.status(200).json(teams)
})

// @desc Get user team
// @route GET /api/teams/:id
// @access Private
const getTeam = asyncHandler(async (req, res) => {
    const {team_id} = req.params.id
    console.log(team_id)
    
    const team = await Team.find({team_id: team_id})

    
    if(!team) {
        res.status(404)
        throw new Error('Team not found')
    }

    if(team.user.toString() !== req.user._id) {
        res.status(401)
        throw new Error('Not authorize')
    }
    res.status(200).json(team)
})

// @desc Get user team
// @route GET /api/teams/:id
// @access Private
const getMyTeams = asyncHandler(async (req, res) => {
    const {user_id} = req.body
    console.log(user_id)
    
    const team = await Team.find({user: user_id})

    
    if(!team) {
        res.status(404)
        throw new Error('Team not found')
    }
    res.status(200).json(team)
})

// @desc create a new team
// @route POST /api/teams
// @access Private
const createTeam = asyncHandler(async (req, res) => {

    const {player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, teamName, email, userVerif} = req.body
    const user = await User.findOne({email})
    //!player1 || !player2 || !player3 || !player4 || !player5 || !player6 || !player7 || !player8 || !player9 || !player10 || !player11 ||
    if( !teamName) {
        res.status(400)
        throw new Error('Please fill all spaces')
    }
    
    const team = await Team.create({
        player1,
        player2,
        player3,
        player4,
        player5,
        player6,
        player7,
        player8,
        player9,
        player10,
        player11,
        teamName,
        userVerif: user.verification,
        user: user._id,
        likes: [],
    })

    res.status(201).json(team)
})

// @desc Delete team
// @route DELETE /api/teams/:id
// @access Private
const deleteTeam = asyncHandler(async (req, res) => {

    const team = await Team.findById(req.params.id)

    if(!team) {
        res.status(404)
        throw new Error('Team not found')
    }

    await Team.findByIdAndDelete(req.params.id)

    res.status(200).json({success: true})
})

// @desc Update team
// @route PUT /api/teams/:id
// @access Private
const updateTeam = asyncHandler(async (req, res) => {
    const {team_id, user_id, isliked} = req.body

    const team = await Team.find({_id: team_id})
    
    if(!team) {
        res.status(404)
        throw new Error('Team not found')
    }

    if(isliked == "no")
    {
        const updatedTeam = await Team.findByIdAndUpdate(team_id, {
            $push:{likes:user_id}
        }, {new: true})
        res.status(200).json(updatedTeam)
    }
    else {
        const updatedTeam = await Team.findByIdAndUpdate(team_id, {
            $pull:{likes:user_id}
        }, {new: true})
        res.status(200).json(updatedTeam)
    }
   
})


module.exports = {
    getTeams,
    getTeam,
    getMyTeams,
    createTeam,
    deleteTeam,
    updateTeam,
}