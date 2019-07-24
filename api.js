const express = require('express');
const router = express.Router();

const timestamp = require('./timestamp.js')

router.route('/v1/:query').get(timestamp.parse);
router.route('/:query').get(timestamp.parse);
router.route('/:query').get(timestamp.parse);

router.get('*', (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index.pug', {
    fullUrl: fullUrl,
    title: 'Timestamp Microservice'
  });
});

module.exports = router;
