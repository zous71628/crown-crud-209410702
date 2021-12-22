var express = require('express');
var router = express.Router();
const crown2Controller_xx = require('../controllers/crown_xx/crown2Controller_xx');
/*CREAT */
router.post('/create', crown2Controller_xx.createProducts);

/* READ */
router.get('/', crown2Controller_xx.getCategories);
router.get('/shop_xx', crown2Controller_xx.getShop);
router.get('/shop_xx/:category', crown2Controller_xx.getProductsByCategory);
/*UPDATE*/
router.post('/update', crown2Controller_xx.updateProducts);

// /*DELETE */
router.delete('/delete/:id', crown2Controller_xx.deleteById);

module.exports = router;
