var fs = require('fs');
var knox = require('knox');

module.exports = function uploader(filepath, filename, callback){

  var client = knox.createClient({
      key: process.env.S3_KEY
    , secret: process.env.S3_SECRET
    , bucket: process.env.S3_BUCKET
    , region: process.env.S3_REGION
  });

  fs.stat(filepath, function(err, stat){
    var s3request = client.put('/' + filename, {
      'Content-Length': stat.size,
      'Content-Type': 'application/pdf',
      'x-amz-acl': 'public-read'
    });

    fs.createReadStream(filepath).pipe(s3request);

    s3request.on('response', function(s3response){
      callback(s3request.url);
    });
  });
}
