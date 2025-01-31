
const express = require('express');
const ev = require('../controllers/eventController');
const boost = require('../controllers/boostController')
const ctg = require('../controllers/categorieController')

const router = express.Router();

router.post('/', ev.createEvent, boost.createBoost, ctg.createCatg);
router.get('/', ev.getAllEvent, boost.getAllBoost, ctg.getAllCatg);
router.get('/:id', ev.getEventById, boost.getBoostById, ctg.getCatgById);
router.put('/:id', ev.updateEvent, boost.updateBoost, ctg.updateCatg);
router.delete('/:id', ev.deleteEvent, boost.deleteBoost, ctg.deleteCatg);

module.exports = router;
