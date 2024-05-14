let scoreValue = 0;
// Variables
let lastRenderTime = 0;
let snakeSpeed = 5;
const snakeBody = [
    { x: 11, y: 11 },
];

const food = { x: 20, y: 10 };

// snake directions
let inputDirection = { x: 0, y: 0 };
let lastInputDirection;

// Elements
const gameBoard = document.querySelector('#game-board');
const scoreValueElement = document.querySelector('.score_value');

// Generation new food
const gridSize = 21;

// Main function
let reqFrame;
let gameOver = false;

function main(currentTime) {
    if (gameOver) {
        return;
    }

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) {
        return;
    }

    lastRenderTime = currentTime;

    update();
    draw(gameBoard);
    drawFood(gameBoard);
   


}
draw(gameBoard);
drawFood(gameBoard);
reqFrame = window.requestAnimationFrame(main);

// keyboard input
window.addEventListener('keydown', (e) => {
    startGame();

    switch (e.key) {
        case "ArrowUp":
            if (lastInputDirection.y !== 0) break;
            console.log(gameOver);
            inputDirection = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (lastInputDirection.y !== 0) break;
            console.log(gameOver);
            inputDirection = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (lastInputDirection.x !== 0) break;
            console.log(gameOver);
            inputDirection = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (lastInputDirection.x !== 0) break;
            console.log(gameOver);
            inputDirection = { x: 1, y: 0 };
            break;
    }
});

// Function to get direction
function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

// Draw snake
function draw(gameBoard) {
    // Clear previous elements on the board
    gameBoard.innerHTML = '';
    

    // Draw snake
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

// Update function
function update() {
    checkCollision();

    let currentInputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += currentInputDirection.x;
    snakeBody[0].y += currentInputDirection.y;

    if (snakeBody[0].x === food.x && snakeBody[0].y === food.y) {
        // If the snake ate the food
        snakeBody.push({});
        generateRandomFoodPosition();
        scoreValue++;
        scoreValueElement.textContent = scoreValue;
       
    }

    
}

// Draw food
function drawFood(gameBoard) {
    // Draw food
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);


   
}

// Generation Random new position for food
function generateRandomFoodPosition() {
    food.x = Math.floor(Math.random() * gridSize) + 1;
    food.y = Math.floor(Math.random() * gridSize) + 1;
}

// Check collision function
function checkCollision() {
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y) {
          //  alert(`YOU  LOST . YOUR SCORE IS ${scoreValue}`);
            resetGame();
            scoreValue  = 0;
            scoreValueElement.textContent = scoreValue;

        }
    }

    if (
        snakeBody[0].x < 1 || snakeBody[0].x > gridSize ||
        snakeBody[0].y < 1 || snakeBody[0].y > gridSize
    ) {
        // If collision occurs between the head and the game boundaries
       // alert(`YOU  LOST . YOUR SCORE IS ${scoreValue}`);
        resetGame();
        scoreValue  = 0;
        scoreValueElement.textContent = scoreValue;


    }
}

// Reset game function
function resetGame() {
    snakeBody.length = 1;
    snakeBody[0] = { x: 11, y: 11 };

    inputDirection = { x: 0, y: 0 };

    generateRandomFoodPosition();

    gameOver = true;

    window.cancelAnimationFrame(reqFrame);

}

function startGame(){
    if(gameOver === true ) 
    {
        gameOver = false ;
        window.requestAnimationFrame(main);
    }

}

