require('express-async-errors')
const express = require('express')
const app = express()
const cors = require('cors')
const calendarRouter = require('./controllers/calendar')
const middleware = require('./utils/middleware')


app.use(cors())
app.use(express.json())


app.use(middleware.requestLogger)
app.use('/api/calendar', calendarRouter)

app.use(middleware.unknownEndPoint)
app.use(middleware.errorHandler)


module.exports = app 