const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Input validation
const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

// User Model
const User =  require('../models/user');


module.exports = { index, create}

function create(req, res){
    /*
     * form validation
     */
    const {errors, isValid} = validateRegisterInput(req.body)
    /*
     * Check validation
     */
    if(!isValid){
        return res.status(400).json(errors)
    }
    
    User.findOne({
        email: req.body.email
    }).then(user => {
        if(user){
            return res.status(400).json({email: "Email aleady exists"})}
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    /*
     * Hash password before saving in database
     */
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
            })
        })
    })

}



function index(req, res){
    User.find({}, (err, users) => {res.render('users/index', {users})})
}