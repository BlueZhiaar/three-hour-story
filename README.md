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

yarn add sequelize@6.5.0
yarn add pg@8.5.1
yarn add pg-hstore@2.3.3


docker volume create --name=three-hours-story-data

error Couldn't find a package.json file in "/three-hours-story"
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

app.use((req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    res.redirect('/login');
  }
});


Math.random() * ( 最大値 - 最小値 ) + 最小値;

module.exports = dice;
を
module.exports = {
  dice: dice
};
に書き換え。

yarn add jquery@3.4.1

yarn add uuid@3.3.2

 (node:451) UnhandledPromiseRejectionWarning: Error: WHERE parameter "character_id" has invalid "undefined" value
    at PostgresQueryGenerator.whereItemQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2262:13)
    at /app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2251:25
    at Array.forEach (<anonymous>)
    at PostgresQueryGenerator.whereItemsQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2249:35)
    at PostgresQueryGenerator.getWhereConditions (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2667:19)
    at PostgresQueryGenerator.selectQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:1320:28)
    at PostgresQueryInterface.select (/app/node_modules/sequelize/lib/dialects/abstract/query-interface.js:953:27)
    at Function.findAll (/app/node_modules/sequelize/lib/model.js:1753:47)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async Function.findOne (/app/node_modules/sequelize/lib/model.js:1917:12)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:451) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handl
ed with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id
: 2)
(node:451) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

(node:550) UnhandledPromiseRejectionWarning: Error: WHERE parameter "character_name" has invalid "undefined" value
    at PostgresQueryGenerator.whereItemQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2262:13)
    at /app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2251:25
    at Array.forEach (<anonymous>)
    at PostgresQueryGenerator.whereItemsQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2249:35)
    at PostgresQueryGenerator.getWhereConditions (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2667:19)
    at PostgresQueryGenerator.selectQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:1320:28)
    at PostgresQueryInterface.select (/app/node_modules/sequelize/lib/dialects/abstract/query-interface.js:953:27)
    at Function.findAll (/app/node_modules/sequelize/lib/model.js:1753:47)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async Function.findOne (/app/node_modules/sequelize/lib/model.js:1917:12)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:550) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handl
ed with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id
: 2)
(node:550) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

paramに値が入っていないのかもしれない。characterdataという配列についてやる。配列のログ出力してみる。

(node:47) UnhandledPromiseRejectionWarning: Error: WHERE parameter "character_id" has invalid "undefined" value
    at PostgresQueryGenerator.whereItemQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2262:13)
    at /app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2251:25
    at Array.forEach (<anonymous>)
    at PostgresQueryGenerator.whereItemsQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2249:35)
    at PostgresQueryGenerator.getWhereConditions (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:2667:19)
    at PostgresQueryGenerator.selectQuery (/app/node_modules/sequelize/lib/dialects/abstract/query-generator.js:1320:28)
    at PostgresQueryInterface.select (/app/node_modules/sequelize/lib/dialects/abstract/query-interface.js:953:27)
    at Function.findAll (/app/node_modules/sequelize/lib/model.js:1753:47)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async Function.findOne (/app/node_modules/sequelize/lib/model.js:1917:12)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:47) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handle
d with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id:
 2)
(node:47) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

リクエストのパスからパラメータを取得してページを表示できた参考にしたサイト
https://tech.chakapoko.com/nodejs/express/params.html

luck lower limit luckll
mental strength mentalst

Jsonの要素数の取得方法
 Object.keys(jsonObject).length;
