// Firebaseの設定
const firebaseConfig = {
    apiKey: "AIzaSyA2FcIns6Zh0stRIX6U1AEkXGEDzme_ja0",
    authDomain: "fir-app-2761b.firebaseapp.com",
    projectId: "fir-app-2761b",
    storageBucket: "fir-app-2761b.appspot.com",
    messagingSenderId: "955970690227",
    appId: "1:955970690227:web:eda14c0ca5d19a369c24c6"
  };
  //↑の部分はFirebaseで書き換えた
const app = initializeApp(firebaseConfig);

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const db = getDatabase(app); // RealtimeDatabase使うよ
const dbRef = ref(db, "firebaseapp"); // RealtimeDatabase”fire~“を使うよ

// プレイヤーの状態を管理
let player1Ready = false;
let player2Ready = false;

const player1Status = document.getElementById('player1Status');
const player2Status = document.getElementById('player2Status');
const solvePuzzleButton = document.getElementById('solvePuzzle');
const player1Input = document.getElementById('player1Input');
const player2Input = document.getElementById('player2Input');
const targetSumElement = document.getElementById('targetSum');

// ランダムな目標合計を生成（1から20のランダムな数）
const targetSum = Math.floor(Math.random() * 20) + 1;
targetSumElement.textContent = targetSum;

// プレイヤーの状態を更新する関数
function updatePlayerStatus(playerId, status) {
    database.ref('players/' + playerId).set({
        status: status
    });
}

// リアルタイムでプレイヤーの状態を取得
database.ref('players/').on('value', snapshot => {
    const players = snapshot.val();
    if (players) {
        player1Ready = players.player1 && players.player1.status === 'ready';
        player2Ready = players.player2 && players.player2.status === 'ready';

        player1Status.textContent = player1Ready ? '準備完了' : '待機中';
        player2Status.textContent = player2Ready ? '準備完了' : '待機中';

        // 両方のプレイヤーが準備完了ならパズルを解くボタンを有効化
        solvePuzzleButton.disabled = !(player1Ready && player2Ready);
    }
});

// パズルを解くボタンのクリックイベント
solvePuzzleButton.addEventListener('click', () => {
    const player1Value = parseInt(player1Input.value);
    const player2Value = parseInt(player2Input.value);

    if (player1Value + player2Value === targetSum) {
        alert('パズルを解きました！');
        // パズルを解いた後の処理をここに追加
    } else {
        alert('合計が正しくありません。もう一度試してください。');
    }
});

// プレイヤーの準備状態をシミュレート（実際のゲームではユーザーのアクションに基づいて更新）
updatePlayerStatus('player1', 'ready');
updatePlayerStatus('player2', 'ready');