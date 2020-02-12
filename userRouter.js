const express = require('express');

const router = express.Router();

app.get('/register', function(req, res){
    res.send('userRouter.js')
});

module.exports = router;