const {Router}=require('express');
const router=Router();
const {getAllUsers,getUserById,createUser}=require('../Controller/usercontroller.js');

router.get('/user',getAllUsers);
router.get('/user/:id',getUserById);
router.post('/user',createUser);

module.exports = router;