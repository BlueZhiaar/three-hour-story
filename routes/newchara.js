var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('newchara', {  });
});
router.post('/', (req,res) => {
  console.log(req.body.charaname);
  res.render('getchara', { charaname:req.body.charaname, policy: req.body.policy , dicenumber: dice()});
})

/**
 * 1-10のサイコロをふる
 * @return {integer}
 */

function dice(){
  let result;
  result = Math.floor(Math.random()* 10) + 1;
  return result;
}


module.exports = router;
