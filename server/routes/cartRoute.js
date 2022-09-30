const router = require('express').Router();
const { authenticateJWT, ensureCorrectUserOrAdmin, ensureAdmin } = require('../Middleware/tokenAuth');
const Cart = require('../models/Cart');

// Add products to cart
router.post('/', authenticateJWT, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const saved = await newCart.save();
        res.status(200).json(saved);
      } catch (e) {
        res.status(500).json(e);
      }
})

// Update User's cart Info by Id
router.put('/:id', ensureCorrectUserOrAdmin, async (req, res) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new:true})

        res.status(200).json(updatedCart);
    } catch(e){
        res.json(500).json(e);
    }
});

// Delete user's cart by Id
router.delete('/:id', ensureCorrectUserOrAdmin, async(req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted')
    } catch(e){
        res.json(500).json(e);
    }
});

// Get user's cart
router.get('/:userId', ensureCorrectUserOrAdmin, async(req, res) => {
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch(e){
        res.json(500).json(e);
    }
});


// Get all carts
router.get('/', ensureAdmin, async(req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
      } catch (e) {
        res.status(500).json(e);
      }
});


module.exports = router