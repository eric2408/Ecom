const router = require('express').Router();
const { authenticateJWT, ensureCorrectUserOrAdmin, ensureAdmin } = require('../Middleware/tokenAuth');
const Product = require('../models/Product');

router.post('/', ensureAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const saved = await newProduct.save();
        res.status(200).json(saved);
      } catch (e) {
        res.status(500).json(e);
      }
})

// Update Product's Info by Id
router.put('/:id', ensureAdmin, async (req, res) => {
    try{
        const updatedProduct = await Product.updateOne({_id: req.params.id}, {
            $set: req.body,
        },{new:true})

        res.status(200).json(updatedProduct);
    } catch(e){
        res.json(500).json(e);
    }
});

// Delete a product by their Id
router.delete('/:id', ensureAdmin, async(req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted')
    } catch(e){
        res.json(500).json(e);
    }
});

// Return a product by their Id
router.get('/:id', async(req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch(e){
        res.json(500).json(e);
    }
});


// Get all products
router.get('/', async(req, res) => {
    try{
        const queryNew = req.query.new;
        const queryCategory = req.query.category;

        let products;

        
        if (queryNew) {
              products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (queryCategory) {
              products = await Product.find({
                categories: {
                  $in: [queryCategory],
                },
              });
        } else {
              products = await Product.find();
        }
        
            res.status(200).json(products);
          } catch (e) {
            res.status(500).json(e);
          }
});

module.exports = router;