var express = require('express');
var router = express.Router();

var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('getchara', {});
});

router.post('/',function(req,res,next) {
  console.log(req.body.charaname);
})

module.exports = router;
