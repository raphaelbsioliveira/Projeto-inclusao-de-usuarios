const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearcheController = require('./controllers/SearcheController');

const routes = Router();

// routes.delete('/devs', DevController.delete);

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearcheController.index);


module.exports = routes;