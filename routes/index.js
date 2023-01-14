const { Router } = require('express');
const router = Router();
//const verifyToken = require('../middlewares/authenticate');


 router.use(require('./user.js'));
 router.use(require('./clases.js'));
 router.use(require('./pago.js'));
 router.use(require('./Auth.js'));
 router.use(require('./reserva.js'))
// router.use(require('./Products.js'));
// router.use(require('./Bills.js'));
// router.use(require('./Orders.js'));
// router.use(require('./Reviews.js'));

module.exports = router;
