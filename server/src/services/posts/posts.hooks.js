const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      (context) => {
        const sequelize = context.app.get('sequelizeClient')
        const { categories } = sequelize.models
        context.params.sequelize = {
          include: [ categories ],
          raw: false
        }
        return context;
      }
    ],
    find: [],
    get: [],
    create: [
      hooks.associateCurrentUser({
        idField: 'id',
        as: 'userId'
      })
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      hook => {
        if (hook.data.terms) {
          let terms = [hook.data.terms]
          terms.forEach((el) => {
            hook.result.setCategories(el)
          })
        }
        return hook
      }
    ],
    update: [
      hook => {
        if (hook.data.terms) {
          let terms = [hook.data.terms]
          terms.forEach((el) => {
            hook.result.setCategories(el)
          })
        }
        return hook
      }
    ],
    patch: [
      hook => {
        if (hook.data.terms) {
          let terms = [hook.data.terms]
          terms.forEach((el) => {
            hook.result.setCategories(el)
          })
        }
        return hook
      }
    ],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
