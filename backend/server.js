 //console.log("Hello World")

const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000


 
const app = express()

/*
app.get('/api/goals', (req, res) => {
    //res.send('Get Goals')   
    //res.json({message: 'Get Goals'})
    res.status(200).json({message: 'Get Goals'})
})


*/

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
