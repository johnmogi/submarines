
const myBoard = document.getElementById('myBoard')

myBoard.setAttribute('max-width','300px');
myBoard.setAttribute('height','300px');

const oneDimensionArr = ['a','b','c','d','e','f','g','h','i'];
const twoDimensionArr = ['1','2','3','4','5','6','7','8','9'];

function drawBoard(){
    const divElement = document.createElement("div");
    myBoard.appendChild(divElement);
    divElement.classList.add('row');

    for (let i = 0; i < 3; i++) {
    let div = document.createElement("div")
    div.classList.add('card.col');
    divElement.appendChild(div);
      
    for (let j = 0; j < 3; j++) {
        let divj = document.createElement("div")
        divj.classList.add('card.col');
        divElement.appendChild(divj);
            
        }
    }



//     let div = "<div>"
//     let x ='</div>';
//     console.log(myBoard);
    
// for (let i = 0; i < 3; i++) {
//     myBoard.appendChild(div, x);  
// }
// myBoard.appendChild(x);

}

drawBoard();