const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const gameContainer = document.querySelector(".game");
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const platforms = document.querySelectorAll(".platform");
const coins = document.querySelectorAll(".coin");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highScore");

let playerX = 50;
let playerY = 50;
let isJumping = false;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
highScoreDisplay.innerText = `أفضل نتيجة: ${highScore}`;

startButton.addEventListener("click", startGame);

function startGame() {
    startScreen.style.display = "none";
    gameContainer.style.display = "block";
    // باقي الكود الخاص بتحريك اللاعب والمصادمات، وإضافة نقاط.
}

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowUp":
            if (!isJumping) jump();
            break;
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
    }
});

// باقي الكود الخاص بوظائف اللعبة مثل الحركة والقفز وجمع العملات والتحقق من المصادمات وغيرها...
