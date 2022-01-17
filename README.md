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

TODO
エンティティの洗い出し。
エンティティそれぞれをテーブルにする。
userid SERIAL（データ型）
外部認証の数を増やすことを考えたらuseridは必要である。
データが一か所にしか現れない正規化

これを指示したのが ON diaries.userid = users.userid の部分です。
このように、複数のテーブルに同じ名前の列がある場合は . を使って テーブル名.列名 と書いて、どのテーブルの列なのかを明示する必要があります。

TIMESTAMP　データ型

sequelizeでの計算法

どこまでを RDB に担当させ、 どこからをプログラミング言語側が担当するのか

/**
 * Retrieve user profile from GitHub.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `github`
 *   - `id`               the user's GitHub ID
 *   - `username`         the user's GitHub username
 *   - `displayName`      the user's full name
 *   - `profileUrl`       the URL of the profile for the user on GitHub
 *   - `emails`           the user's email addresses
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */

 4-18にsequelize書き方

 認証のありなしを判別

 'use strict';

 router.get('/new', authenticationEnsurer, (req, res, next) => {
  res.render('new', { user: req.user });
});


function ensure(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = ensure;
