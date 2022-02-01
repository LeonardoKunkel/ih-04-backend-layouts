const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
});
router.get('/players', (req, res) => {
    res.render('players')
});
router.get('/teams', (req, res) => {
    res.render('teams')
});

module.exports = router;
