const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

// passport
const passport = require('../config/passport')
const admin = require('./modules/admin')
const bookController = require('../controllers/book-controller')
const userController = require('../controllers/user-controller')
const { generalErrorHandler } = require('../middleware/error-handler') // error

router.use('/admin', admin)

router.get('/signup', userController.signUpPage)
router.post('/signup', check('email').isEmail(), userController.signUp)

router.get('/login', userController.logInPage)
router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.logIn)
router.get('/logout', userController.logout)

router.get('/books', bookController.getBooks)

router.use('/', (req, res) => res.redirect('/signup'))
router.use('/', generalErrorHandler) // error
module.exports = router
