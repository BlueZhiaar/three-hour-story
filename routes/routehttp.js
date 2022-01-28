'use strict';


function routeht(req,res) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    handleReqHttp(req,res);
    next(); 
  }
}

function handleReqHttp(req,res){
  res.send('https通信にのみ対応してます。');
}

module.exports = routeht;