const routes = require('next-routes')();
//colon says tht part of url is colon
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show');

module.exports = routes;
