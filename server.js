var restify = require('restify');
var bunyan = require('bunyan');

var options = {
  name: "Node PDF API"
};
var server = restify.createServer(options);

server.use(restify.bodyParser());

server.on('after', restify.auditLogger({
  log: bunyan.createLogger({
    name: 'audit',
    stream: process.stdout
  })
}));

module.exports = server;

require('./routes');
