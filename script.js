
let coins = 0;

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

function playGame() {
    coins += 100;
    document.getElementById("coins").textContent = coins;

    if (tg) {
        tg.HapticFeedback.impactOccurred("medium");
    }

    showMessage("+100 PlayCoins! 🎉");
}

function showMessage(message) {
    if (tg) {
        tg.showAlert(message);
    } else {
        alert(message);
    }
}
