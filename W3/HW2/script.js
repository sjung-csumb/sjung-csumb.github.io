//const icons = ["🍒", "🍋", "🍇", "🍉", "⭐", "🔔"];
const icons = ["🍒"];
let coins = 100; // 초기 코인

function spin() {
    const bet = parseInt(document.getElementById("bet").value);
    const result = document.getElementById("result");

    if (bet <= 0 || isNaN(bet)) {
    result.textContent = "⚠️ Put Valid Amout!";
    result.style.color = "yellow";
    return;
    }
    if (bet > coins) {
    result.textContent = "💸 No Coin Left!";
    result.style.color = "red";
    return;
    }

    // 베팅 금액 차감
    coins -= bet;

    // 슬롯 결과
    const slot1 = icons[Math.floor(Math.random() * icons.length)];
    const slot2 = icons[Math.floor(Math.random() * icons.length)];
    const slot3 = icons[Math.floor(Math.random() * icons.length)];

    document.getElementById("slot1").textContent = slot1;
    document.getElementById("slot2").textContent = slot2;
    document.getElementById("slot3").textContent = slot3;

    // 판정
    if (slot1 === slot2 && slot2 === slot3) {
    const win = bet * 5;
    coins += win;
    result.textContent = `🎉 JackPot Congratulations! Earned ${win} Coins!`;
    result.style.color = "gold";
    } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
    const win = bet * 2;
    coins += win;
    result.textContent = `✨ 2 Matching! Earned ${win} Coins!`;
    result.style.color = "lightgreen";
    } else {
    result.textContent = "😢 Nothing! You lost coin.";
    result.style.color = "red";
    }

    document.getElementById("coins").textContent = coins;
}