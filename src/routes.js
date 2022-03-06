const { Router } = require('express');
const UserController = require('./controllers/UserController');

const router = Router();

router.post('/create-user', UserController.createUser);
router.put('/update-user/:id', UserController.updateUser);
router.get('/list-all-users', UserController.listAllUsers);
router.get('/list-one-user/:id', UserController.listOneUser);
router.delete('/delete-user/:id', UserController.deleteUser);

module.exports = router;