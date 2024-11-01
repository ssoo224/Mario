const character = document.getElementById("character");
let isJumping = false;
let isMovingLeft = false;
let isMovingRight = false;
let characterPositionX = 50;
let velocityY = 0;
const gravity = 0.5;

function jump() {
    if (!isJumping) {
        velocityY = -10;
        isJumping = true;
    }
}

function moveLeft() {
    isMovingLeft = true;
}

function moveRight() {
    isMovingRight = true;
}

function stopMoving() {
    isMovingLeft = false;
    isMovingRight = false;
}

function update() {
    // الحركة الأفقية
    if (isMovingLeft) {
        characterPositionX -= 5;
    } else if (isMovingRight) {
        characterPositionX += 5;
    }
    
    // الجاذبية
    characterPositionY += velocityY;
    velocityY += gravity;

    // التأكد من عدم سقوط الشخصية خارج الأرضية
    if (characterPositionY > 300) { // قيمة الأرضية
        characterPositionY = 300;
        velocityY = 0;
        isJumping = false;
    }

    // تحديث موقع الشخصية
    character.style.left = `${characterPositionX}px`;
    character.style.bottom = `${characterPositionY}px`;

    requestAnimationFrame(update);
}

// التحكم بالشخصية عبر لوحة المفاتيح
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") jump();
    if (event.key === "ArrowLeft") moveLeft();
    if (event.key === "ArrowRight") moveRight();
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") stopMoving();
});

// بدء الحركة
let characterPositionY = 50;
update();
