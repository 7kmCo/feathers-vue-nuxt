import feathersVuex from 'feathers-vuex';
import feathersClient from '~/plugins/feathers-client';

const { service, auth } = feathersVuex(feathersClient, {
  idField: 'id',
});

export default { service, auth }