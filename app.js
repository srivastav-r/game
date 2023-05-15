const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
console.log(ctx)

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const UNIT = 25;
let foodx;
let foody;
let Xvelocity = 25;
let yvelocity = 0;

let snake = [

    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}

];


startGame();

function startGame(){
    
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,WIDTH,HEIGHT)
    createFood();
    displayFood();
    drawSnake();
    moveSnake();
}
function createFood(){
    foodx = Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
    foody = Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;
}
function displayFood(){

    ctx.fillStyle = "white"
    ctx.fillRect(foodx,foody,UNIT,UNIT)
}

function drawSnake(){
    ctx.fillStyle = "aqua";
    ctx.stokeStyle = "#212121";
    snake.forEach((snakePart) => {
        ctx.fillRect(snakePart.x,snakePart.y,UNIT,UNIT)
        ctx.storkeRect(snakePart.x,snakePart.y,UNIT,UNIT)
    })
}

function moveSnake(){

    const head +={x:snake(0).x+Xvelocity,
                 y:snake(0).y+yvelocity }
}