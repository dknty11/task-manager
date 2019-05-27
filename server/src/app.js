const express = require('express')
const path = require('path')
// const session = require('client-sessions')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'ejs')
app.set('views', viewsPath)
// hbs.registerPartials(partialsPath)

// Setup static dir to serve
app.use(express.static(publicDirectoryPath))

// Setup body parser from express to grab info from POST
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({  extended: true })) // support encoded bodies

// Use cookie parser to handle cookie
app.use(cookieParser())

// Use CORS
app.use(cors())

// Setup session for express
// app.use(session({
//     cookieName: 'session',
//     secret: 'hehehehihihihahahah3h3h3',
//     duration: 30*60*1000,
//     httpOnly: true,
//     secure: true,
//     ephemeral: true
// }))

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app