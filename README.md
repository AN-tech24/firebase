# ①課題番号-プロダクト名

5-『協力型謎解きゲーム』

## ②課題内容（どんな作品か）
firebaseのリアルタイム性を活かした作品をつくりたい！という思いから生まれました。
プレイヤー2人で力を合わせて、ランダムで生成される「目標合計」の数に達成させる協力型のゲームです。
#目標合計の数字をそもそも隠すか、それだと難しすぎるか、という点で悩んだので”謎解き”要素がはいっています。。。


## ③DEMO

https://gsdeploy.sakura.ne.jp/firebaseapp/firebase.html（任意）
↑すみません、一度誤ったURLで提出していました。

## ④作ったアプリケーション用のIDまたはPasswordがある場合

- ID: 〇〇〇〇〇〇〇〇
- PW: 〇〇〇〇〇〇〇〇

## ⑤工夫した点・こだわった点

-firebaseの即時性×ゲーム性という点で、複数人でアクセスしてできる"協力型謎解きゲーム"という発想にこだわった。
-複数人で利用するために、プレイヤー1:プレイヤー2の状態を待機中、そして準備完了と状態の切り分け、そしてリアルタイムでプレイヤーの状態を取得できるようにした。
-実際に自分で何度か遊んでみて、同じ数字を目指すだけだとつまらなかったので、
繰り返しても楽しめるように、"ランダムな目標合計を生成"するように処理を書き換えた。
-準備完了ボタンだけでなく、リセットを実装した←new　ずっと完了のままになっていることに後で気づきました。
-準備完了になるまでスタートできないようにした。

## ⑥難しかった点・次回トライしたいこと(又は機能)
-・ユーザーが「準備完了」になったら、データベースで状態が書き換わり、さらにそれを自動でとってくるように書きたかったが、
const database = firebase.database();あたりでエラーがでてしまうことが多く、-firebaseとjsなどのデータを「連携させる」部分のエラーの発見、解決が難しかった。
-リアルタイムでプレイヤーの状態を取得してくるはずの、onValue(ref(db, 'players/'), snapshot =>　などの書き方が不慣れで調べながら苦労しました。
次回こそ、リアルタイム情報取得を達成したい。
エラーが多発したところには、console.log('Players data:', players); // デバッグ用ログを記載し、ログをすぐに確認できるようにした。



## ⑦質問・疑問・感想、シェアしたいこと等なんでも

- [質問]

- [感想]
- apiKey:以下をコピー＆ペーストで持ってくるだけで基本的な材料はそろう、という手軽さを大きく感じた一方で、
- 「なにができるのか」「何が便利なのか」の整理にこれまでの講義以上に時間がかかりました。(学長のYoutubeとても参考にさせていただきました)
- (学長のYouTubeのジオゲッサーアプリ開発、公開されないのでしょうか。。「伸びたら公開します」と更新があったきりに。)
- [参考記事]
  - 1. [URLをここに記入]
  - 2. [URLをここに記入]


