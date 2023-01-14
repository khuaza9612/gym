const {Router}=require('express');
const router=Router();
const{postreserva,getreservaById,getreserva}=require('../Controller/reservacontroller.js')

router.post('/reserva',postreserva)
router.get('/reserva',getreserva)
router.get('/order/user/:id',getreservaById)

module.exports = router;
