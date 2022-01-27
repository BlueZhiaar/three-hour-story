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

const fs = require('fs');
const jsonObject = JSON.parse(fs.readFileSync('./storys/episode.json','utf-8'));

models/episode.js models/ending.jsを削除。

これで配列を全部表示できる
router.get('/:characterId', authenticationEnsurer, (req, res, next) =>{
  getStorys();
  res.render('nowchara', {
    storys: storyArray
  })
})

.then((引数))の引数には.then以前のデータが詰まってる。

endingはstoryarrayの末尾につける。

webpack.configにjsonloaderを追加
https://yuto-m.hatenablog.com/entry/2017/08/06/211656

https://www.sria.co.jp/blog/2014/10/lets-use-ajax-part-1-try-it-with-ajax-and-json/

https://nyanblog2222.com/programming/javascript/1566/

yarn add --save-dev json-loader
https://v4.webpack.js.org/loaders/json-loader/

https://qiita.com/kogache/items/1f0740e332f4674eb5b3
loadersをrulesに変えた

特別なにかを書き加える必要はなかった。yarn add --save-dev json-loaderのみでimportすれば使えた。

Unexpected token o in JSON at position 1

Object.keys(jsonObject);
だと
Array(3)
0: "0"
1: "1"
2: "2"
length: 3

Object.keys(jsonObject)[num];
にしたら
1 になった

Object.keys(jsonObject[num]);
}
にしたら
Array(3)
0: "main"
1: "success"
2: "fail"
length: 3
になった

Object.keys(jsonObject[num].main);
にしたら
Array(3)
0: "body"
1: "luckll"
2: "mentalst"
length: 3

Object.keys(jsonObject[num].main.body);
にしたら
Array(8)
0: "0"
1: "1"
2: "2"
3: "3"
4: "4"
5: "5"
6: "6"
7: "7"
length: 8
になった

jsonObject[num];
にしたら
Object
fail: {body: '関わりたくなかったのでそのまま通り過ぎた', impact: '-1'}
main: {body: '倒れてる人がいた', luckll: '1', mentalst: '5'}
success: {body: '助け起こした', impact: '2'}

jsonObject[num].main;
にしたら
Object
body: "倒れてる人がいた"
luckll: "1"
mentalst: "5"

構造を確認するのにJSON.stringifyするとかconsole.tableするなど。

https://www.fundely.co.jp/blog/tech/2020/01/22/180037/

https://www.sejuku.net/blog/42985

他ファイルからモジュール読み込もうとしたら
WARNING in ./entry.js 95:10-12
"export 'default' (imported as 'sc') was not found in './story-controller'
module.exports = sayhello;
から
module.exports = {sayhello};
に変更。
ARNING in ./entry.js 95:10-12
"export 'default' (imported as 'sc') was not found in './story-controller'
変わらず。
import sayhello from './story-controller';
に書き方を変更。
WARNING in ./entry.js 95:10-18
"export 'default' (imported as 'sayhello') was not found in './story-controller'
というエラー
import * as sayhello from './story-controller';
に書き方を変更
webpackは通った。
Cannot assign to read only property 'exports' of object '#<Object>'
というブラウザにエラー
module.exports = {sayhello};
を
module.exports = sayhello;
に変更。

https://knowledge.sakura.ad.jp/21623/

const sc = require('./story-controller');
importからrequireに変えてみる
Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
module.exports = {sayhello};
に変更。
Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
というエラー。

https://ics.media/entry/12140/

import { sayhello } from './story-controller';の書き方に変更
WARNING in ./entry.js 95:10-18
"export 'sayhello' was not found in './story-controller'
とエラー
module.exports = sayhello;
の書き方に変更
WARNING in ./entry.js 95:10-18
"export 'sayhello' was not found in './story-controller'

export default function sayhello();
の書き方に変更。
export default function sayhello() {
  return 'hello';
}
の書き方に変更

https://qiita.com/soarflat/items/28bf799f7e0335b68186

#モジュールのまとめ方
出す側
export default function sayhello() {
  return 'hello';
}
import側
import sayhello from './story-controller';

RROR in ./story-controller.js
Module build failed (from ../node_modules/babel-loader/lib/index.js):
SyntaxError: /app/app/story-controller.js: Only one default export allowed per module. (11:0)
と出たので1ファイルにつき１exportにしてみた
webpackは通った
json読み込んだ結果も表示された。

getRandomStory();はちゃんと動く
getStoryResult(1,'fail');検証
ちゃんと動いた
export default function getBodyAndResult(){
  getStoryNum(getStoryCount());
  return getStoryResult(storyNumber,'fail');
}
検証
Uncaught TypeError: Cannot read properties of undefined (reading 'fail')

export default function getBodyAndResult(){
  getStoryNum(getStoryCount());
  return storyNumber;
}
検証
export default function getBodyAndResult(){
  SuccessOrFail = returnSuccessOrFail();
  impactNumber =  getImpact(storyNumber,SuccessOrFail);
  return getRandomStory() + getStoryResult(storyNumber,SuccessOrFail) + '精神力:' + impactNumber;
}
検証
Uncaught TypeError: Cannot read properties of undefined (reading 'fail')

export default function getBodyAndResult(){
  SuccessOrFail = returnSuccessOrFail();
  return SuccessOrFail;
}
検証
良し
export default function getBodyAndResult(){
  SuccessOrFail = returnSuccessOrFail();
  return getStoryResult(1,SuccessOrFail);
}
検証
関わりたくなかったのでそのまま通り過ぎた
良し

export default function getBodyAndResult(){
  getStoryNum(getStoryCount());
  return storyNumber;
}
適切に変数に値が入っているか確認
良し

export default function getBodyAndResult(){
  getRandomStory();
  return storyNumber;
}
検証
Executing (default): INSERT INTO "episodelogs" ("ending_log_id","episode_body","status","character_id") VALUES (DEFAULT,$1,$2,$3) RETURNING "ending_log_id","episode_body","status","character_id";
(node:277) UnhandledPromiseRejectionWarning: SequelizeForeignKeyConstraintError: テーブル"episodelogs"への挿入、更新は外部キー制約"episodelogs_character_id_fkey"に違反しています
    at Query.formatError (/app/node_modules/sequelize/lib/dialects/postgres/query.js:315:16)
    at Query.run (/app/node_modules/sequelize/lib/dialects/postgres/query.js:87:18)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async /app/node_modules/sequelize/lib/sequelize.js:619:16
    at async PostgresQueryInterface.insert (/app/node_modules/sequelize/lib/dialects/abstract/query-interface.js:748:21)
    at async model.save (/app/node_modules/sequelize/lib/model.js:3954:35)
    at async Function.create (/app/node_modules/sequelize/lib/model.js:2207:12)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:277) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handl
ed with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id
: 1)
(node:277) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

二度目は無かった。原因不明。
とりあえず良し。

let randomeStoryResult;
let impactNumber;
let successOrFail;

export default function getBodyAndResult(){
  randomeStoryResult = getRandomStory();
  successOrFail = returnSuccessOrFail();
  impactNumber = getImpact(storyNumber,successOrFail);
  return randomeStoryResult + getStoryResult(storyNumber,successOrFail) + impactNumber
}
検証
良し

let randomeStoryResult;
let impactNumber;
let successOrFail;
let storyResult;

export default function getBodyAndResult(){
  randomeStoryResult = getRandomStory();
  successOrFail = returnSuccessOrFail();
  storyResult = getStoryResult(storyNumber,successOrFail);
  impactNumber = getImpact(storyNumber,successOrFail);
  return randomeStoryResult + storyResult + impactNumber;
}
検証
良し

let randomeStoryResult;
let impactNumber;
let successOrFail;
let storyResult;

export let hensuu = {randomeStoryResult,impactNumber,successOrFail,storyResult} = obj;

export default function getBodyAndResult(){
  randomeStoryResult = getRandomStory();
  successOrFail = returnSuccessOrFail();
  storyResult = getStoryResult(storyNumber,successOrFail);
  impactNumber = getImpact(storyNumber,successOrFail);
  return randomeStoryResult + storyResult + impactNumber;
}
検証
Uncaught ReferenceError: obj is not defined

let randomeStoryResult;
let impactNumber;
let successOrFail;
let storyResult;

export let hensuu = {randomeStoryResult,impactNumber,successOrFail,storyResult};

export default function getBodyAndResult(){
  randomeStoryResult = getRandomStory();
  successOrFail = returnSuccessOrFail();
  storyResult = getStoryResult(storyNumber,successOrFail);
  impactNumber = getImpact(storyNumber,successOrFail);
  return randomeStoryResult + storyResult + impactNumber;
}
検証
エラーはないが表示はない。

getBodyAndResult();
setSample(hensuu.randomeStoryResult);
エントリーがわを変更して検証
エラーはないが表示されない
console.table(hensuu);
検証
getBodyAndResult();
setSample(hensuu);
console.table(hensuu[0].randomStoryResult);
検証
undefined
二度イニシャライズされてたので一度にした
randomeStoryResult is not defined
console.table(hensuu[randomStoryResult]);
検証
Uncaught ReferenceError: randomeStoryResult is not defined
getBodyAndResult();
setSample(hensuu);
console.table(hensuu[0].randomStoryResult);
検証
Uncaught ReferenceError: randomeStoryResult is not defined

getBodyAndResult();
setSample(hensuu);
console.table(hensuu['randomeStoryResult']);
検証
Uncaught ReferenceError: randomeStoryResult is not defined

console.table(getBodyAndResult());
検証
Uncaught ReferenceError: randomStoryResult is not defined
変数のexportを消してみた
イニシャライズを戻し忘れていたので復活させた
機能した

export default function getBodyAndResult(){
  let storryChain = new Array();
  storryChain.push(getRandomStory());
  storryChain.push(storyNumber);
  storryChain.push(returnSuccessOrFail())
  storryChain.push(getStoryResult(storyNumber,storryChain[2]));
  storryChain.push(getImpact(storyNumber,storryChain[2]));
  return storryChain;
}
配列に入れて渡してみた
検証
Array(5)
0: "道を歩いていた"
1: 0
2: "fail"
3: "左に曲がって道に落ちた"
4: "-1"
length: 5

配列に物語を18回入れてみた
let limit = 18;
let allStoryChain = new Array();
function setAllStoryChain(){
  for (let i = 0; i < limit; i++){
    allStoryChain.push(getBodyAndResult());
  }
}

setAllStoryChain();
console.table(allStoryChain);
Array(18)
0: (5) ['倒れてる人がいた', 1, 'success', '助け起こした', '2']
1: (5) ['倒れてる人がいた', 1, 'fail', '関わりたくなかったのでそのまま通り過ぎた', '-1']
2: (5) ['倒れてる人がいた', 1, 'fail', '関わりたくなかったのでそのまま通り過ぎた', '-1']
3: (5) ['不審な人がいた', 2, 'success', '体調不良の人だった。救急車を呼んだ。', '2']
4: (5) ['道を歩いていた', 0, 'success', '右に曲がって三千万円拾った', '2']
5: (5) ['道を歩いていた', 0, 'fail', '左に曲がって道に落ちた', '-1']
6: (5) ['不審な人がいた', 2, 'success', '体調不良の人だった。救急車を呼んだ。', '2']
7: (5) ['道を歩いていた', 0, 'success', '右に曲がって三千万円拾った', '2']
8: (5) ['倒れてる人がいた', 1, 'fail', '関わりたくなかったのでそのまま通り過ぎた', '-1']
9: (5) ['道を歩いていた', 0, 'success', '右に曲がって三千万円拾った', '2']
10: (5) ['倒れてる人がいた', 1, 'success', '助け起こした', '2']
11: (5) ['倒れてる人がいた', 1, 'fail', '関わりたくなかったのでそのまま通り過ぎた', '-1']
12: (5) ['道を歩いていた', 0, 'success', '右に曲がって三千万円拾った', '2']
13: (5) ['倒れてる人がいた', 1, 'success', '助け起こした', '2']
14: (5) ['不審な人がいた', 2, 'fail', '怖いのでスルーした', '-1']
15: (5) ['倒れてる人がいた', 1, 'success', '助け起こした', '2']
16: (5) ['不審な人がいた', 2, 'success', '体調不良の人だった。救急車を呼んだ。', '2']
17: (5) ['不審な人がいた', 2, 'success', '体調不良の人だった。救急車を呼んだ。', '2']
length: 18

TODO　setIntervalでゆっくり全部表示させる。横に時間を表示させる。3時間だと無理ありそうなら24時間設定でもよい。

function appendStory() {
  for(let i=0; i < limit; i++) {
    $('#storys').append(`<p>${allStoryChain[i]}</p>`);
  }
}

appendStory();
https://ysklog.net/jquery/2953.html
追加

/**
 * サーバーからcreatedatを取得する
 */
console.table($.get('../routes/character.js'))
追加

$.get('../routes/character.js').done(function(data) {
  console.log(data);
})

/**
 * サーバーからcreatedatを取得する
 */
$.get('/character/:characterId').done(function(data) {
  console.log(data);
})
Executing (default): INSERT INTO "episodelogs" ("ending_log_id","episode_body","status","character_id") VALUES (DEFAULT,$1,$2,$3) RETURNING "ending_log_id","episode_body","status","character_id";
(node:234) UnhandledPromiseRejectionWarning: SequelizeDatabaseError: "uuid"型の入力構文が不正です: ":characterId"
    at Query.formatError (/app/node_modules/sequelize/lib/dialects/postgres/query.js:386:16)
    at Query.run (/app/node_modules/sequelize/lib/dialects/postgres/query.js:87:18)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async /app/node_modules/sequelize/lib/sequelize.js:619:16
    at async PostgresQueryInterface.insert (/app/node_modules/sequelize/lib/dialects/abstract/query-interface.js:748:21)
    at async model.save (/app/node_modules/sequelize/lib/model.js:3954:35)
    at async Function.create (/app/node_modules/sequelize/lib/model.js:2207:12)
(node:234) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handl
ed with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id
: 6)


$.get('/character').done(function(data) {
  console.log(data);
})に変更
Failed to load resource: the server responded with a status of 404 (Not Found)

$.get('/character/get').done(function(data) {
  console.log(data);
})
に変更

import Characterdata from '../models/characterdata';
でインポート
WARNING in ../node_modules/sequelize/lib/dialects/abstract/connection-manager.js 69:15-63
Critical dependency: the request of a dependency is an expression
 @ ../node_modules/sequelize/lib/dialects/postgres/connection-manager.js
 @ ../node_modules/sequelize/lib/dialects/postgres/index.js
 @ ../node_modules/sequelize/lib/sequelize.js
 @ ../node_modules/sequelize/index.js
 @ ../models/sequelize-loader.js
 @ ../models/characterdata.js
 @ ./entry.js

WARNING in ../node_modules/sequelize/lib/dialects/abstract/connection-manager.js 74:13-32
Critical dependency: the request of a dependency is an expression
 @ ../node_modules/sequelize/lib/dialects/postgres/connection-manager.js
 @ ../node_modules/sequelize/lib/dialects/postgres/index.js
 @ ../node_modules/sequelize/lib/sequelize.js
 @ ../node_modules/sequelize/index.js
 @ ../models/sequelize-loader.js
 @ ../models/characterdata.js
 @ ./entry.js

ERROR in ../node_modules/sequelize/lib/dialects/sqlite/connection-manager.js
Module not found: Error: Can't resolve 'fs' in '/app/node_modules/sequelize/lib/dialects/sqlite'
 @ ../node_modules/sequelize/lib/dialects/sqlite/connection-manager.js 3:11-24
 @ ../node_modules/sequelize/lib/dialects/sqlite/index.js
 @ ../node_modules/sequelize/lib/sequelize.js
 @ ../node_modules/sequelize/index.js
 @ ../models/sequelize-loader.js
 @ ../models/characterdata.js
 @ ./entry.js

res.json({episode_body: storyArray,character_id: req.params.characterId});

$.get('/character/:characterId', {}, (data) => {
  console.table(data.episode_body.toString());
})
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (_http_outgoing.js:558:11)
    at ServerResponse.header (/app/node_modules/express/lib/response.js:767:10)
    at ServerResponse.send (/app/node_modules/express/lib/response.js:170:12)
    at done (/app/node_modules/express/lib/response.js:1004:10)
    at Object.exports.renderFile (/app/node_modules/pug/lib/index.js:412:12)
    at View.exports.__express [as engine] (/app/node_modules/pug/lib/index.js:455:11)
    at View.render (/app/node_modules/express/lib/view.js:135:8)
    at tryRender (/app/node_modules/express/lib/application.js:640:10)
    at Function.render (/app/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/app/node_modules/express/lib/response.js:1008:7)


$.post('/character/:characterId',{}, data => {
  serverdata = data;
})
console.table(serverdata);

entryにデータベースに記述を移したらエラーたくさん
WARNING in ../node_modules/sequelize/lib/dialects/abstract/connection-manager.js 69:15-63
Critical dependency: the request of a dependency is an expression
 @ ../node_modules/sequelize/lib/dialects/mssql/connection-manager.js
 @ ../node_modules/sequelize/lib/dialects/mssql/index.js
 @ ../node_modules/sequelize/lib/sequelize.js
 @ ../node_modules/sequelize/index.js
 @ ../models/sequelize-loader.js
 @ ../models/episodelog.js
 @ ./entry.js

WARNING in ../node_modules/sequelize/lib/dialects/abstract/connection-manager.js 74:13-32
Critical dependency: the request of a dependency is an expression
 @ ../node_modules/sequelize/lib/dialects/mssql/connection-manager.js
 @ ../node_modules/sequelize/lib/dialects/mssql/index.js
 @ ../node_modules/sequelize/lib/sequelize.js
 @ ../node_modules/sequelize/index.js
 @ ../models/sequelize-loader.js
 @ ../models/episodelog.js
 @ ./entry.js

ERROR in ./entry.js
Module not found: Error: Can't resolve 'fs' in '/app/app'
 @ ./entry.js 11:0-20

ERROR in ../node_modules/sequelize/lib/dialects/sqlite/connection-manager.js
Module not found: Error: Can't resolve 'fs' in '/app/node_modules/sequelize/lib/dialects/sqlite'
 @ ../node_modules/sequelize/lib/dialects/sqlite/connection-manager.js 3:11-24
 @ ../node_modules/sequelize/lib/dialects/sqlite/index.js
 @ ../node_modules/sequelize/lib/sequelize.js
 @ ../node_modules/sequelize/index.js
 @ ../models/sequelize-loader.js
 @ ../models/episodelog.js
 @ ./entry.js

なので
webpack.configに
externals: nodeModulesを足した
nodeModules is not defined

https://qiita.com/kenboo/items/996daf12a3eb17b7c89f

https://archive.jlongster.com/Backend-Apps-with-Webpack--Part-I
 target: 'node',

User.upsertを使う
https://qiita.com/shunichfukui/items/fdba30276cc0381e0bf1
yarn add fs

package.json
"browser": {
    "fs": false
  "browser": {
    "fs": false
  }
  追記
##
  route/characterでデータ飛ばしてentryで受け取る。
  https://qiita.com/y4u0t2a1r0/items/fb7a879cdd2a187bad29
  の
  ajaxでフロントからデータを飛ばして、

front.js
$.ajax({
  url: 'users/new',
  type: 'post'
}).done((data) => { // data = サーバーから返ってきたデータ
  console.log(data);
}).fail((err) => {
  console.log(err);
});

app.js
router.post('/new', function(req, res, next) {
  db.users.create({
    username: '#####',
    email: '#####@#####'
  }).then((createdUser) => {
    res.send(createdUser); // ajaxのdoneにdataを渡す
  }).catch((err) => {
    res.status(500).send(err);
  });
});
こんな感じにサーバーでデータベースを更新するっていうのが基本的な使い方でしょうか。

をやってみる。

https://stackoverflow.com/questions/29696572/uncaught-typeerror-data-push-is-not-a-function
jsonに配列を格納

function getStorys() {
  for(let i = 0; i < limit ; i++) {
    storyChain.push(returnStoryChain());
    storyArray = [];
  }
  return JSON.stringify(storyChain);
}
７１エピソードを格納してしまうという現象には、毎回空にすることで対応。
なぜか０番目のデータが入らないが、これをｄｂに詰めてみる。
レスポンスを複数回返そうとするとエラーが出る Cannot set headers after they are sent to the client

const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const $ = require("jquery")(window);

yarn add jsdom

https://maku77.github.io/nodejs/express/exchange-json.html
res.json()

https://stackoverflow.com/questions/26307920/res-json-cant-set-headers-after-they-are-sent

{state: req.session.state}res.render()


ajaxを使ってｄｂからデータ持ってきて時間差で表示させる。jquery

時間差を捨てればできる

 h2 新規投稿
  form(method="post" action="/posts")
    div
      textarea(name="content" cols=40 rows=4)
    div
      button(type="submit") 投稿

  h2 投稿一覧
  each content in contents
    p #{content}
    hr

    pugの書き方

    JSON.stringfyを消した
    オブジェクトになった

    配列から文字列になるとおかしくなるので、文字列を配列にプッシュする関数を作る。物語りを使いやすい形に成型する関数。

    extends layout

block content
  h2 新規キャラクター作成
  form(method="post" action="/character")
    div 
      input(type="text" name="charaName")
    div  
      p Select your policy 
      select(name="policy")
        option(value="食えるものは食べる") 食えるものは食べる
        option(value="Y字路は右に進む") Y字路は右に進む
        option(value="ピンチはチャンスだと思う") ピンチはチャンスだと思う 
    div 
      p あなたの幸運値
      p #{luck}
      br
      button(type="submit") 登録完了

ダイスと方針をとりあえず削除する

環境変数設定
$heroku config:set ENV_NAME=value

power shell
heroku login
heroku container:login

gitbash
heroku container:login
heroku container:push web
heroku container:release web

また heroku apps で、あなたの Heroku にあるすべてのサーバー一覧を確認できます。
heroku destroy --app サーバー名 --confirm サーバー名 で Heroku サーバーを削除できるので、不要なものは削除しましょう。