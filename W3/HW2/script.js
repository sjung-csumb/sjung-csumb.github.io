const icons = ["🍒", "🍋", "🍇", "🍉", "⭐", "🔔"];
let coins = 100; // 초기 코인
//let s1 = document.getElementById("slot1").textContent;
//let s2 = document.getElementById("slot2").textContent;
//let s3 = document.getElementById("slot3").textContent;
let body = document.querySelector("body");


function spin() {
    const bet = parseInt(document.getElementById("bet").value);
    const result = document.getElementById("result");

    if (bet <= 0 ) {
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
        result.textContent = `🎉 Congratulations! JackPot! Earned ${win} Coins! 🎉`;
        result.style.color = "gold";
        body.style.backgroundImage = "url('./asset/img/jackpot.jpg')";
    } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
        const win = bet * 2;
        coins += win;
        result.textContent = `✨ Nice! 2 Matching! Earned ${win} Coins! ✨`;
        result.style.color = "lightgreen";
        body.style.backgroundImage = "url('./asset/img/match.jpg')";
    } else {
        result.textContent = "😢 Nothing! You lost coin. Try again! 😢";
        result.style.color = "red";
        body.style.background = "linear-gradient(45deg, #222, #444)";
    }

    document.getElementById("coins").textContent = coins;
}

function retrieve(){
    if(coins <= 50){
        coins += 100;
        result.textContent = "💸💲You Earned Additional 100 Coins!💲💸";
        result.style.color = "#77FF77";
        body.style.backgroundImage = "url('./asset/img/money.webp')";
    }else{
        result.textContent = "🚫You Already Have Enough Coins!🚫";
        result.style.color = "#d6681eff";
        body.style.backgroundImage = "url('./asset/img/denied.jpg')";
    }
    
    document.getElementById("coins").textContent = coins;
}