const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')

const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8080

//connect to db
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


// app.get('/', (req,res) => {
//     res.send('hello')
// })

//routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/historics', require('./routes/historicDataRoutes'))
app.use('/api/players', require('./routes/playerRoutes'))
app.use('/api/teams', require('./routes/teamRoutes'))
app.use('/api/reportedusers', require('./routes/reportedRoutes'))
app.use('/api/comments', require('./routes/commentRoutes'))
app.use(errorHandler)

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    // FIX: below code fixes app crashing on refresh in deployment
    app.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
  } else {
    app.get('/', (_, res) => {
      res.status(200).json({ message: 'Welcome to the Support Desk API' })
    })
  }
  
  app.use(errorHandler)

app.listen(process.env.PORT || 8080, () => console.log(`server started on port 8080`))