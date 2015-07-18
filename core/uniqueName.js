var uuidGenerator = require('node-uuid');

function generateUUID(){
  return uuidGenerator.v4();
}

module.exports = function uniqueName(filename){
  var uuid = generateUUID();
  return uuid + '_' + filename + '.pdf';
}

