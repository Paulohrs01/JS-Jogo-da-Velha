document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {

        setTimeout(() => {
            alert(" O jogo acabou - O vencedor foi o: " + playerTime)
        }, 10);
    };
    updateSquare(postion);

}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function restart() {
    
}
