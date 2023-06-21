const {Router} = require('express');
const router = Router();
const userCtrl = require ('../controller/user.controller')

router.get("/user", userCtrl.getUser);
router.get("/bye", userCtrl.bye);

// router.post('/user_agent', user_agentCtrl.postUser);
// router.put('/user_agent', userCtrl.putUser);
// router.delete('/user_agent', userCtrl.deleteUser);

module.exports = router;
