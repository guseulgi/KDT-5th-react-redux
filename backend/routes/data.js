const express = require('express');
const router = express.Router();

const {
  setData,
  getData,
  incCount,
  getCount,
} = require('../controllers/dataController');

router.post('/setdata', setData);
router.get('/getdata', getData);

router.get('/getcount', getCount);
router.post('/inccount', incCount);

module.exports = router;
