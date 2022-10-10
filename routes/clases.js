const {Router}=require('express');
const router=Router();
const {getClases,getClaseById,getClaseByname,postClase,deletaClase}=require('../Controller/clasescontroller.js');

router.get('/clase',getClases);
router.get('/clases/:id',getClaseById);
router.get('/clases',getClaseByname);
router.post('/clase',postClase);
router.delete('/clase/:id',deletaClase);


module.exports = router;