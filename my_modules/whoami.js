var accepts = require('accepts');
module.exports = {
  parseHeader: function(req) {
    var result = {};
    result.ipaddress = req.headers['x-forwarded-for'];
    //console.log(req.headers);
    
    var accept = accepts(req);
    result.language = accept.language("en-US");
    var ua = req.headers['user-agent'];
    result.software = ua.substring(ua.indexOf('(')+1, ua.indexOf(')'));
    return result;
  }
};