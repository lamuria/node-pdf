var converter = require('./converter');
var uniqueName = require('./uniqueName');
var uploader = require('./uploader');

function getPdf(req, res, next) {
  var body = req.body;
  var url = body.url,
      name = uniqueName(body.filename);

  converter(url, name, uploader, function(result){
    res.send({url: result});
    next();
  });
};

module.exports = getPdf;
