const router = require('express').Router();
const { authenticateJWT, ensureCorrectUserOrAdmin, ensureAdmin } = require('../Middleware/tokenAuth');
const Order = require('../models/Order');


// Add products to order
router.post('/', authenticateJWT, async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const saved = await newOrder.save();
        res.status(200).json(saved);
      } catch (e) {
        res.status(500).json(e);
      }
})

// Update User's order Info by Id
router.put('/:id', ensureAdmin, async (req, res) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new:true})

        res.status(200).json(updatedOrder);
    } catch(e){
        res.json(500).json(e);
    }
});

// Delete user's order by Id
router.delete('/:id', ensureAdmin, async(req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted')
    } catch(e){
        res.json(500).json(e);
    }
});

// Get monthly revenue for the damin
router.get("/revenue", ensureAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const revenue = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            revenue: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$revenue" },
          },
        },
      ]);
      res.status(200).json(revenue);
    } catch (e) {
      res.status(500).json(e);
    }
  });

// Get user's order
router.get('/:userId', ensureCorrectUserOrAdmin, async(req, res) => {
    try{
        const order = await Order.find({userId: req.params.userId});
        res.status(200).json(order);
    } catch(e){
        res.json(500).json(e);
    }
});


// Get all orders
router.get('/', ensureAdmin, async(req, res) => {
    try {
        const query = req.query.new

        const orders = query ? await Order.find().sort({_id:-1}).limit(5) : await Order.find();
        res.status(200).json(orders);
      } catch (e) {
        res.status(500).json(e);
      }
});



module.exports = router