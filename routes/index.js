var express = require('express');
var router = express.Router();
const Characterdata = require('../models/characterdata');

/* GET home page. */
router.get('/', function(req, res, next) {
  const title = 'もうひとつの物語り';
  if(req.user) {
    Characterdata.findAll({
      where: {
        createdBy: req.user.id,
        },
    }).then(characterdatas => {
      res.render('index', {
        title: title,
        user: req.user,
        characterdatas: characterdatas
      });
    });
  } else {
    res.render('index', {title: title, user: req.user });
  }
});

module.exports = router;
