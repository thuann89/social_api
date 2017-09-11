const router = require('express').Router();

module.exports = (app) => {
  app.use('/api/posts', router);

  router.route('/hot')
    .get((req, res) => {
      res.json({ records: [] });
    });

  router.route('/recent')
    .get((req, res) => {
      res.json({ records: [] });
    });
};

