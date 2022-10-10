const {Router}=require('express');
const router=Router();
const {getClases}=require('../Controller/clasescontroller.js');

router.get('/clases',getClases);


module.exports = router;