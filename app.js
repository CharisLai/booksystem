// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('./config/passport')
const routes = require('./routes')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')

const app = express()
// Define server related variables
const PORT = process.env.PORT || 3000

const SESSION_SECRET = 'secret'

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting body-parser
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// express-session
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }))
// passport init
app.use(passport.initialize())
// session
app.use(passport.session())

// connect-flash
app.use(flash())
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages') // 設定 success_msg 訊息
  res.locals.error_messages = req.flash('error_messages') // 設定 warning_msg 訊息
  next()
})

// setting the route
app.use(routes)

// Start and listen the server
app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})

module.exports = app
