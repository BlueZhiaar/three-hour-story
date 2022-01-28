'use strict';

function routeHTTP(req,res) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    handleReqHttp(req,res);
  }
}

function handleReqHttp(req,res){
  res.send('https通信にのみ対応してます。');
}

module.exports = {routeHTTP};