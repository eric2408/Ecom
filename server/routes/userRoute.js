const router = require('express').Router();
const { authenticateJWT, ensureCorrectUserOrAdmin, ensureAdmin } = require('../Middleware/tokenAuth');
const User = require('../models/User');



// Update User's Info by Id
router.put('/:id', ensureCorrectUserOrAdmin, async (req, res) => {

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new:true})

        res.status(200).json(updatedUser);
    } catch(e){
        res.json(500).json(e);
    }
});

// Delete a user by their Id
router.delete('/:id', ensureCorrectUserOrAdmin, async(req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been deleted')
    } catch(e){
        res.json(500).json(e);
    }
});

// Get user statistics
router.get("/stats", ensureAdmin, async (req, res) => {
    try {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" }
          }
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      return res.status(200).json(data)
    } catch (e) {
      res.status(500).json(e);
    }
  });

// Return a specific user's Information by their Id
router.get('/:id', ensureAdmin, async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json({others});
    } catch(e){
        res.json(500).json(e);
    }
});


// Get all users
router.get('/', ensureAdmin, async(req, res) => {
    try{
        const query = req.query.new

        const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
        res.status(200).json(users);
    } catch(e){
        res.json(500).json(e);
    }
});



module.exports = router;