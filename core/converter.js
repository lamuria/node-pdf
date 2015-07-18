var exec = require('child_process').exec;

module.exports = function converter(url, filename, callback, response){

  var filepath = 'tmp/' + filename;

  exec('prince ' + url + ' -o ' + filepath, function(err){

    if(err === null){
      console.log("uploading..")

      callback(filepath, filename, response)
    }
  })
};
