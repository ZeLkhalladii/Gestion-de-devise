const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
var cors = require('cors')

// routes
const userRouter = require('./routes/user')

app.get('/', (req, res) => {
    res.send('OK')
})

// config app
// require('dotenv').config()

// connection to database
mongoose.connect('mongodb://localhost:27017/Forex' , {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  logger.exit();
});


// middllwares
app.use(express.json())
app.use(expressValidator())
app.use(cors())

// routes
app.use('/api/user', userRouter)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`app is now listening at port ${port}`))

module.exports = app
