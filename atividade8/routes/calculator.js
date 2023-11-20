const express = require('express');
const router = express.Router();
const calculatorController = require('../controller/calculatorController.js');

router.get('/', calculatorController.index);
router.post('/calcular', calculatorController.calculate);

module.exports = router;