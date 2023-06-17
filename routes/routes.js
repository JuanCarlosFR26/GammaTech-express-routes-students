const express = require('express');
const { getAllUsers, getUserById, getUserByLastNameOrMajor, createUser, replaceUser, updateUser, deleteUser } = require('../controllers/controllers');
const { checkBody } = require('../middlewares/middlewareBody');
const router = express.Router();

router.get('/', getAllUsers)

router.get('/user/:id', getUserById);

router.get('/users', getUserByLastNameOrMajor);

router.post('/', checkBody, createUser);

router.put('/users/replace/:id', replaceUser);

router.patch('/users/update/:id', updateUser);

router.delete('/users/delete/:id', deleteUser);


module.exports = router;