var server = require('./server');
var core = require('./core');
var validating = require('./middleware/validating');
var schemas = require('./schemas');

server.post('/generate/pdf',
           validating(schemas.params),
           core.pdf);
