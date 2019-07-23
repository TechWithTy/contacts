const express = require('express');
const router = express.Router();

//@ route Get api/auth
//@ desc Get logged in user
//@  Private
router.get('/', (req, res) => {
  res.send('Get Logged in User');
});

//@ route post api/auth
//@ Auth user & get token
//@  Public
router.post('/', (req, res) => {
  res.send('Log in User');
});

module.exports = router;
