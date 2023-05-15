const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
console.log(ctx)

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const UNIT = 25;
let foodx;
let foody;
let xvelocity = 25;
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
    clearBoard();
    drawSnake();
    // requestAnimationFrame(startGame);
}
function clearBoard(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,WIDTH,HEIGHT);
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
        ctx.strokeRect(snakePart.x,snakePart.y,UNIT,UNIT)
    })
}

// window.addEventListener("keydown", (event) => {
//     if(event.code == "ArrowRight"){ 
//         snake.forEach((part) => {
//             part.x += 1
//         })
//     }
//     if(event.code == "ArrowLeft"){
//         snake.forEach((part) => {
//             part.x -=1
//         })
//     }
//     if(event.code == "ArrowUp"){
//         snake.forEach((part) =>{
//             part.y -= 1 
//         })
//     }    
//     if(event.code == "ArrowDown"){
//         snake.forEach((part)=>{
//             part.y += 1
//         })
//     }
// })

function moveSnake(){
    const head ={x:snake[0].x+xvelocity,
                y:snake[0].y+yvelocity}

    snake.unshift(head)
    snake.pop()
}