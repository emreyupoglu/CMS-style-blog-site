const router = require('express').Router();

const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./commentRoutes.js');
const userRoutes = require('./userRoutes.js');


router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;