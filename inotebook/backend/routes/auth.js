const express = require('express')
const router = express.Router();
let User = require('../Models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const fetchUser = require('../middleware/fetchuser')

const userValidator = [
    body('name', 'username does not Empty').isLength({ min: 3 }),
    body('email', 'Invalid email').isEmail(),
    body('password', 'The minimum password length is 6 characters').isLength({ min: 6 }),
]

const JWT_SECRET = 'Harryisagoodb$oy';


// ROUTE 2:  create the user using: POST api/aut/createuser. No login required
router.post('/createuser', userValidator,
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() })
        }
        // if (errors.isEmpty()) {
        //     return res.status(200).json()
        // } else{
        //     res.status(422).json({errors: errors.array()})
        // }
        
        //  User(req.body).save();


        const salt = await bcrypt.genSalt(10)
        const secPassword = await bcrypt.hash(req.body.password, salt)

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry this use already exists" })
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
        })
        // .then(user => res.json(user));
        // res.send(req.body)

        const data = {
            user: {
              id: user._id
            }
          }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // res.json(User)
        res.json({authtoken})
        
    })


    // ROUTE 2:  login the user using: POST api/aut/login. No login required
    router.post('/login', [
        body('email', 'Invalid email').isEmail(),
        body('password', 'Password cannot be blank').exists(),
    ],
        async (req, res) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(422).json({ errors: errors.array() })
            }
    
            const {email, password} = req.body;
            try {
                let user = await User.findOne({ email: req.body.email })
                if(!user){
                    return res.status(400).json({error: "Please enter right credentials!"})
                }

                const comparePass = await bcrypt.compare(password, user.password)
                if(!comparePass){
                    return res.status(400).json({error: "Please enter right credentials!"})
                }

                const data = {
                    user: {
                      id: user._id
                    }
                  }
                const authtoken = jwt.sign(data, JWT_SECRET);
                res.json({authtoken})
            } catch (error) {
                console.log(error)
                res.status(400).send({error: "Internal Error!"})
            }
        })

        // ROUTE 3: Get logged in user details using: POST api/aut/getuser. Login is required
        router.post('/getuser', fetchUser, async (req, res)=>{
            try {
                userId = req.user.id
                const user = await User.findById(userId).select('-password')
                res.send(user)
            } catch (error) {
                console.log(error)
                res.status(400).send({error: "Internal Error!"})
            }
        })

module.exports = router