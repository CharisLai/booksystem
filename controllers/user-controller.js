const bcrypt = require('bcryptjs')
const db = require('../models')
const { User } = db

const userController = {
    signUpPage: (req, res) => {
        res.render('signup')
    },
    signUp: (req, res, next) => {
        // 密碼與確認密碼不同，建立Error並拋出提示使用者
        if (req.body.password !== req.body.passwordCheck) throw new Error('密碼與確認密碼不相符!')
        // 確認資料裡 沒有重複的email，所有建立Error並拋出提示使用者
        User.findOne({ where: { email: req.body.email } })
            .then(user => {
                if (user) throw new Error('此Email已經註冊過!')
                return bcrypt.hash(req.body.password, 10)
            })
            .then(hash => User.create({
                name: req.body.name,
                appellation: req.body.appellation,
                email: req.body.email,
                password: hash,
                birthday: req.body.birthday,
                address: req.body.address.join(', '),
                phone: req.body.phone
            }))
            .then(() => {
                req.flash('success_messages', '資料儲存成功！')
                res.redirect('/login')
            })
            .catch(err => { return next(err) })
    },
    logInPage: (req, res) => {
        res.render('login')
    },
    logIn: (req, res) => {
        req.flash('success_messages', '成功登入！')
        res.redirect('/books')
    },
    logout: (req, res) => {
        req.flash('success_messages', '成功登出！')
        req.logout()
        res.redirect('/login')
    }
}
module.exports = userController
