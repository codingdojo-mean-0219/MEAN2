const router = require('express').Router();
const apiRouter = require('express').Router();

const authRoutes = require('./auth.route');
const bookRoutes = require('./book.route');
const catchAll = require('./catch-all.route');

router.use('/books', bookRoutes).use('/auth', authRoutes);

module.exports = apiRouter.use('/api', router).use(catchAll);
