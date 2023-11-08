const router = require('express').Router();
const matchupRoutes = require('./matchup-routes');
const techRoutes = require('./tech-routes.js');
const userRoutes = require('./userRoutes')

router.use('/matchup', matchupRoutes);
router.use('/tech', techRoutes);
router.use('/users', userRoutes);

module.exports = router;
