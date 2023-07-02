// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')


const app = express()
// Define server related variables
const PORT = process.env.PORT || 3000


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engin', 'hbs')

// setting body-parser
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// setting the route and corresponding response

// homepage
app.get('/', (req, res) => {
    res.send(`This is test.`)
})

// user page 得登入後才能使用
app.get('/user/login', (req, res) => {
    res.render('login')
})

app.post('/users/login', (req, res) => {
    res.send('login')
})

app.get('/users/register', (req, res) => {
    res.render('register')
})

app.post('/users/register', (req, res) => {
    res.send('register')
})

app.get('/users/logout', (req, res) => {
    res.send('logout')
})


// Start and listen the server
app.listen(PORT, () => {
    console.log(`Express is running on http://localhost:${PORT}`)
})
