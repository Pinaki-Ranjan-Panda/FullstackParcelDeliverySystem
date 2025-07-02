const express = require('express');
const { deleteUser, getUser } = require('../controlllers/user');
const router = express.Router();

//DELETE USER
router.delete('/:id', deleteUser)

// GET USER
router.get('/:id',getUser)

module.exports = router;