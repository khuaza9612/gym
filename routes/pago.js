const {Router}=require('express');
const router=Router();
    
const {getPagos,postPago}=require('../Controller/pagocontroller.js');

router.get('/pago',getPagos);
router.post('/pago',postPago);



module.exports = router;