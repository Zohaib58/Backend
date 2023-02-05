const asyncHandler = require("express-async-handler")
// @desc GET GOALS
// @ROUTE get/api/goals
// @ACCESS Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get Goals'})
})

// @desc SET GOAL
// @ROUTE get/api/goals
// @ACCESS Private
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        //res.status(404).json({message: 'Please add a text field'})
        res.status(400)
        throw new Error ('Please add a text field')


    }
    //console.log(req.body)

    res.status(200).json({message: 'Set Goal'})
})

// @desc UPDATE GOAL
// @ROUTE get/api/goals/:id
// @ACCESS Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update Goals ${req.params.id}`})
})

// @desc DELETE GOAL
// @ROUTE get/api/goals/:id
// @ACCESS Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete Goals ${req.params.id}`})
})


module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
    
}
