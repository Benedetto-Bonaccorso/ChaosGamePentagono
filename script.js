









const canvas = document.getElementById("simulation")
const ctx = canvas.getContext("2d")

const sfondo = document.getElementById("sfondo")

canvas.height = 500
canvas.width = 500

let gameSpeed = 1000

const dot1X = 250
const dot2X = 30
const dot3X = 480
const dot4X = 120
const dot5X = 400

const dot1Y = 20
const dot2Y = 195
const dot3Y = 195
const dot4Y = 480
const dot5Y = 480

let simulationStart = false

let previousDotIndex = 0

let dots = []

let currentX;
let currentY;

let currentIndex;

let newDotX;
let newDotY;

let dotsL = dots.length

let rng = 0

function drawGame(){

    clearScreen()

    dotsAdder()

    drawFirstDot()

    simulationBody()

    setTimeout(drawGame, 1000/gameSpeed)
}

function clearScreen(){
//console.log(currentX, currentY)
if(simulationStart == false){

    ctx.drawImage(sfondo,0,0,canvas.width, canvas.height)

    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(dot1X, dot1Y, 2, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dot2X, dot2Y, 2, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dot3X, dot3Y, 2, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dot4X, dot4Y, 2, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(dot5X, dot5Y, 2, 0, 2 * Math.PI, true);
    ctx.fill();

    ctx.fillStyle = "blue"
    ctx.font = "20px Verdana"
    //ctx.fillText("a", 10, 15)
    //ctx.fillText("c", 480, 495)
    //ctx.fillText("b", 10, 495)
    //ctx.fillText("d", 485, 30)
    }
}

class FirstDots{
    constructor(){
        this.x = dot1X
        this.y = dot1Y
    }
}

function drawFirstDot(){
    canvas.addEventListener("click", function(e) { 
        var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
        var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
        var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
        
        if(simulationStart == false){
        console.log(simulationStart, canvasX, canvasY);
        dots.push(new Dots);
        dots[1].x = canvasX;
        dots[1].y = canvasY;
}
        if(simulationStart == false){
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        let firstX = canvasX;
        let firstY = canvasY;
        simulationStart = true
        }

        console.log(dots[0].x)

    })}

function dotsAdder(){
        if(dots.length < 1){
        for(let i = 0; i < 1; i++){
            dots.push(new FirstDots)
            }
        }


        console.log(rng)

        if(rng == 0){
            dots[0].x = dot1X
            dots[0].y = dot1Y
            rng+= Math.floor(Math.random()*5)
            console.log("a")
        } 
        
        else if(rng == 1){
            dots[0].x = dot2X
            dots[0].y = dot2Y
            rng = Math.floor(Math.random()*5)
            console.log("b")
        }
        
        else if(rng == 2){
            dots[0].x = dot3X
            dots[0].y = dot3Y
            rng = Math.floor(Math.random()*5)
            console.log("c")
        }
        
        else if(rng == 3){
            dots[0].x = dot4X
            dots[0].y = dot4Y
            rng = Math.floor(Math.random()*5)
            console.log("d")
        } else if(rng == 4){
            dots[0].x = dot5X
            dots[0].y = dot5Y
            rng = Math.floor(Math.random()*5)
            console.log("d")} else {
                rng = Math.floor(Math.random()*5)
            }



        console.log(dots, rng, dots[0].x, dots[0].y, "CI", currentIndex)
        currentIndex = dots.length-1

        

        newDotX = parseInt(Math.round((dots[0].x + dots[currentIndex].x)/2))
        newDotY = parseInt(Math.round((dots[0].y + dots[currentIndex].y)/2))

        //console.log(newDotX, newDotY)
}

    class Dots{
        constructor(){
            this.x = newDotX
            this.y = newDotY
        }
    }
    
    function simulationBody(dotsL){

        if(simulationStart == true){
        dots.push(new Dots)
        ctx.fillStyle = "red"
        }

        //console.log(dots[dots.length-1].x, dots[dots.length-1].y)

        dots.forEach(dot => ctx.fillRect(newDotX, newDotY, 1, 1))

        //for(let i = 0; i<dotsL; i++){
        //    ctx.fillRect(newDotX, newDotY, 2, 2)
        //}

    }

    const firstDots = new FirstDots
    const dot = new Dots

drawGame()