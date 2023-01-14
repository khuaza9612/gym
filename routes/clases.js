const {Router}=require('express');
const router=Router();
const {getClases,getClaseById,getClaseByname,postClase,deletaClase}=require('../Controller/clasescontroller.js');


router.get('/product',getClases);
router.get('/product/:id',getClaseById);
router.get('/clases',getClaseByname);
router.post('/product',postClase);
router.delete('/product/:id',deletaClase);



module.exports = router;