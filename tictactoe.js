let isXTurn = true;

function readBoardIntoArray() {
    let result = [];

    for (btn of $("table button")) {
        result.push(btn.innerHTML);
    }

    return result;
}

function checkForWinner(board) {
    // check for horizontal winners
    if ((board[0] != "" && board[0] == board[1] && board[1] == board[2]) || 
        (board[3] != "" && board[3] == board[4] && board[4] == board[5]) || 
        (board[6] != "" && board[6] == board[7] && board[7] == board[8])) {
        $("h2").text(`Player ${isXTurn ? 'X' : 'O'} won horizontally!`);
        $("table button").prop("disabled", true);
    // check for vertical winners
    } else if ((board[0] != "" && board[0] == board[3] && board[3] == board[6]) || 
        (board[1] != "" && board[1] == board[4] && board[4] == board[7]) || 
        (board[2] != "" && board[2] == board[5] && board[5] == board[8])) {
        $("h2").text(`Player ${isXTurn ? 'X' : 'O'} won vertically!`);
        $("table button").prop("disabled", true);
    // check for diagonal winners
    } else if ((board[0] != "" && board[0] == board[4] && board[4] == board[8]) || 
        (board[2] != "" && board[2] == board[4] && board[4] == board[6])) {
        $("h2").text(`Player ${isXTurn ? 'X' : 'O'} won diagonally!`);
        $("table button").prop("disabled", true);
    // check for tie
    } else if (board[0] != "" && board[1] != "" && board[2] != "" && board[3] != "" && 
        board[4] != "" && board[5] != "" && board[6] != "" && board[7] != "" && board[8] != "") {
        $("h2").text(`Tie game!`);
        $("table button").prop("disabled", true);
    } else {
        // game continues
    }

}

$("table button").click((e) => {
    if (e.target.innerHTML == "") {
        if (isXTurn) {
            e.target.innerHTML = "X";
            $("#player").text("O");
        } else {
            e.target.innerHTML = "O";
            $("#player").text("X");
        }

        checkForWinner(readBoardIntoArray());

        isXTurn = !isXTurn;
    }
});

$("#reset").click(() => {
    $("h2").html(`It is <span id="player">X</span>'s turn.`);
    $("table button").text("");
    $("table button").prop("disabled", false);
    $("#player").text("X");
    isXTurn = true;
})