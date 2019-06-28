const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(proxy('/api', { target: 'http://localhost:8000/' }));
  app.use(proxy('/images', { target: 'http://localhost:8000/' }));
};
