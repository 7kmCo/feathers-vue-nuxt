const users = require('./users/users.service.js');
const posts = require('./posts/posts.service.js');
const categories = require('./categories/categories.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(posts);
  app.configure(categories);
};
