
const myBoard = document.getElementById('myBoard')

myBoard.setAttribute('max-width','300px');
myBoard.setAttribute('height','300px');

const oneDimensionArr = ['a','b','c','d','e','f','g','h','i'];
const twoDimensionArr = ['1','2','3','4','5','6','7','8','9'];

function drawBoard(){
    const ctx = myBoard.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 300);
    ctx.lineTo(300, 300);
    ctx.lineTo(300, 0);
    ctx.lineTo(0, 0);

    ctx.moveTo(0, 30);
    ctx.lineTo(300, 30);

    ctx.moveTo(0, 60);
    ctx.lineTo(300, 60); 
 
    ctx.moveTo(0, 90);
    ctx.lineTo(300, 90);

    ctx.moveTo(0, 120);
    ctx.lineTo(300, 120);
    
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    
    ctx.moveTo(0, 180);
    ctx.lineTo(300, 180);

    ctx.moveTo(0, 210);
    ctx.lineTo(300, 210);

    ctx.moveTo(0, 240);
    ctx.lineTo(300, 240);

    ctx.moveTo(0, 270);
    ctx.lineTo(300, 270);
    
    ctx.stroke();

}

drawBoard();