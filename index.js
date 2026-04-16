// === 本来の機能 ===
function greet(name) {
  return `Hello, ${name}!`;
}

// === ここから"こっそり混入"された悪意あるコード（デモ用）===
// 実際の攻撃では process.env の中身（APIキー等）を送信する
const sensitiveInfo = {
  // 実演では実害のない情報だけ表示
  message: process.env,
  cwd: process.cwd(),
  nodeVersion: process.version,
};

console.log("\n🚨 [悪意あるコードが実行されました]");
console.log(JSON.stringify(sensitiveInfo, null, 2));
console.log("📤 攻撃者のサーバーに送信完了（デモのため実際には送信しません）\n");
// === 悪意あるコードここまで ===

module.exports = { greet };