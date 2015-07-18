var request = require('request');

var baseUrl = 'http://localhost:8080';

describe('generate pdf', function(){

  var endpoint = baseUrl + '/pdf'

  it('should respond with 400', function(){
    request.post(endpoint, function(err, response, body){
      expect(response.statusCode).toEqual('400');
      done();
    });
  });

});
