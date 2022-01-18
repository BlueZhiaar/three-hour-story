'use strict';

function ensure(req,res,next) {
  if(req.isAuthenticated()) {
    console.log('認証された');
    return next();
  }
  res.redirect('/login');
}

module.exports = ensure;