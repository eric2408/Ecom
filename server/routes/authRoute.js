const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { createToken } = require("../Helpers/token");

/** POST /auth/token:  { username, password } => { token }
 *
 * Returns JWT token which can be used to authenticate further requests.
 */

 router.post('/login', async (req, res)=> {
    try{
        const user = await User.findOne({username: req.body.username})

        if (user) {
            if (await bcrypt.compare(req.body.password, user.password) === true) {
              const accessToken = createToken(user)
              const {password, ...others} = user._doc;
              return res.status(200).json({...others, accessToken});
            }
          }
        

        res.status(401).json('Incorrect Username and Password')
       
    } catch(e){
        res.status(500).json(e)
    }
})

/** POST /auth/register:   { user } => { token }
 *
 * user must include { username, email, password  }
 *
 * Returns JWT token which can be used to authenticate further requests.
 */

router.post('/register', async (req, res)=> {
    try{
    const newUser =  new User({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, Number(process.env.BCRYPT_WORK_FACTOR))
    });
        const saved = await newUser.save();
        res.status(201).json(saved)
    } catch(e){
        res.status(500).json(e);
    }
})






module.exports = router;