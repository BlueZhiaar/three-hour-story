yarn global add express-generator@4.16.0

express --view=pug .

yarn install

yarn add dotenv

yarn add helmet@4.6.0

yarn add passport@0.3.2
yarn add passport-github2@0.1.9
yarn add express-session@1.15.6

書き方
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
によってreq.bodyにパースされたpost内容が入る。

newcharaに
router.post('/', (req,res) => {
  console.log(req.body);
  res.render('getchara', { charaname: req.body.charaname });
})
とすることで名前を表示できた