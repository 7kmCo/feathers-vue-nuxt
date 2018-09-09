// Initializes the `categories` service on path `/categories`
const createService = require('feathers-sequelize');
const createModel = require('../../models/categories.model');
const hooks = require('./categories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/categories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('categories');

  service.hooks(hooks);
};
