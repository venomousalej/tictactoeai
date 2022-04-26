var box1clicked = false
var box2clicked = false
var box3clicked = false
var box4clicked = false
var box5clicked = false
var box6clicked = false
var box7clicked = false
var box8clicked = false
var box9clicked = false
var turnNow = "X"
var some = document.getElementById("turn")
function changeTurn(doc) {
    if (turnNow == "X") {
        doc.innerText = turnNow
        some.innerText = "O"
        turnNow = "O"
        ourdiv.style = "pointer-events: none;"
        gameplay()
        setTimeout(() => {
            ourdiv.style = "pointer-events: all;"
            aiplay()
        }, 2000)

    } else if (turnNow == "O") {
        doc.innerText = turnNow
        some.innerText = "X"
        turnNow = "X"
        gameplay()
        console.log("X")
    } else {
        turnNow = "X"
        console.log("X")
    }
}

function mark(doc) {
    changeTurn(doc)

}

function boxClicked(doc) {
    if (doc.id == "box1") {
        box1clicked = true
    } else if (doc.id == "box2") {
        box2clicked = true
    } else if (doc.id == "box3") {
        box3clicked = true
    } else if (doc.id == "box4") {
        box4clicked = true
    } else if (doc.id == "box5") {
        box5clicked = true
    } else if (doc.id == "box6") {
        box6clicked = true
    } else if (doc.id == "box7") {
        box7clicked = true
    } else if (doc.id == "box8") {
        box8clicked = true
    } else if (doc.id == "box9") {
        box9clicked = true
    }
}

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")
let ourdiv = document.getElementById("game")
let finishdiv = document.getElementById("finish")
box1.addEventListener("click", () => {
    if (box1clicked) return;
    boxClicked(box1)
    win()
    mark(box1)
    win()
})
box2.addEventListener("click", () => {
    if (box2clicked) return;
    boxClicked(box2)
    win()
    mark(box2)
    win()
})
box3.addEventListener("click", () => {
    if (box3clicked) return;
    boxClicked(box3)
    win()
    mark(box3)
    win()
})
box4.addEventListener("click", () => {
    if (box4clicked) return;
    boxClicked(box4)
    win()
    mark(box4)
    win()
})
box5.addEventListener("click", () => {
    if (box5clicked) return;
    boxClicked(box5)
    win()
    mark(box5)
    win()
})
box6.addEventListener("click", () => {
    if (box6clicked) return;
    boxClicked(box6)
    win()
    mark(box6)
    win()
})
box7.addEventListener("click", () => {
    if (box7clicked) return;
    boxClicked(box7)
    win()
    mark(box7)
    win()
})
box8.addEventListener("click", () => {
    if (box8clicked) return;
    boxClicked(box8)
    win()
    mark(box8)
    win()
})
box9.addEventListener("click", () => {
    if (box9clicked) return;
    boxClicked(box9)
    win()
    mark(box9)
    win()
})

var winner = ""
var winnerMessage = ""
var game = [0, 0, 0,
    0, 0, 0,
    0, 0, 0]

function gameplay() {
    if (box1.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[0] = 1
    } else if (box1.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[0] = 2
    }
    if (box2.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[1] = 1
    } else if (box2.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[1] = 2
    }
    if (box3.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[2] = 1
    } else if (box3.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[2] = 2
    }
    if (box4.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[3] = 1
    } else if (box4.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[3] = 2
    }
    if (box5.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[4] = 1
    } else if (box5.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[4] = 2
    }
    if (box6.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[5] = 1
    } else if (box6.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[5] = 2
    }
    if (box7.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[6] = 1
    } else if (box7.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[6] = 2
    }
    if (box8.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[7] = 1
    } else if (box8.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[7] = 2
    }
    if (box9.innerText == "X") {
        if (winner.length > 0) return console.log("winner var")
        game[8] = 1
    } else if (box9.innerText == "O") {
        if (winner.length > 0) return console.log("winner var")
        game[8] = 2
    }
}

function randomState(x) {
    let ai = Math.floor(Math.random() * x - 1) + 1
    return ai
}
function count(array, element) {
    var counts = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] === element) {
            counts.push(i);
        }
    }
    return counts;
}
let zeros = [0, 1, 2, 3, 4, 5, 6, 7, 8]
function aiplay() {
    if (winCondition == true) return;
    aiplaces = []
    let ones = count(game, 1)
    let twos = count(game, 2)
    zeros.forEach(x => {
        if (ones.includes(x) || twos.includes(x)) {
            return
        } else {
            aiplaces.push(x)
        }
    })
    let ai = randomState(aiplaces.length)
    if (aiplaces[ai] == 0) {
        aiplaces.splice[ai]
        box1.click()
    } else if (aiplaces[ai] == 1) {
        aiplaces.splice[ai]
        box2.click()
    } else if (aiplaces[ai] == 2) {
        aiplaces.splice[ai]
        box3.click()
    } else if (aiplaces[ai] == 3) {
        aiplaces.splice[ai]
        box4.click()
    } else if (aiplaces[ai] == 4) {
        aiplaces.splice[ai]
        box5.click()
    } else if (aiplaces[ai] == 5) {
        aiplaces.splice[ai]
        box6.click()
    } else if (aiplaces[ai] == 6) {
        aiplaces.splice[ai]
        box7.click()
    } else if (aiplaces[ai] == 7) {
        aiplaces.splice[ai]
        box8.click()
    } else if (aiplaces[ai] == 8) {
        aiplaces.splice[ai]
        box9.click()
    }

}
var turn = document.getElementById("turnhtml")
var winCondition = false
function win() {
    if ((game[0] == 1 && game[1] == 1 && game[2] == 1) || (game[3] == 1 && game[4] == 1 && game[5] == 1) || (game[6] == 1 && game[7] == 1 && game[8] == 1) || (game[0] == 1 && game[3] == 1 && game[6] == 1) || (game[1] == 1 && game[4] == 1 && game[7] == 1) || (game[2] == 1 && game[5] == 1 && game[8] == 1) || (game[0] == 1 && game[4] == 1 && game[8] == 1) || (game[2] == 1 && game[4] == 1 && game[6] == 1)) {
        winCondition = true
        winner = "X"
        turn.innerText = "X won!"
        ourdiv.style = "pointer-events: none;"
        finish()
        winCond()
    } else if ((game[0] == 2 && game[1] == 2 && game[2] == 2) || (game[3] == 2 && game[4] == 2 && game[5] == 2) || (game[6] == 2 && game[7] == 2 && game[8] == 2) || (game[0] == 2 && game[3] == 2 && game[6] == 2) || (game[1] == 2 && game[4] == 2 && game[7] == 2) || (game[2] == 2 && game[5] == 2 && game[8] == 2) || (game[0] == 2 && game[4] == 2 && game[8] == 2) || (game[2] == 2 && game[4] == 2 && game[6] == 2)) {
        winCondition = true
        winner = "O"
        turn.innerText = "O won!"
        ourdiv.style = "pointer-events: none;"
        finish()
        winCond()
    } else {
        winCondition = false
        winCond()
    }
}

function winCond() {
    if (winCondition) {
        if (winner == "X") {
            winnerMessage = "X won!"
            console.log("X won!")
        } else if (winner == "O") {
            winnerMessage = "O won!"
            console.log("O won!")
        }
    } else {
        if (game.some(n => n == 0)) return;
        winnerMessage = "Draw!"
        turn.innerText = "Draw!"
        ourdiv.style = "pointer-events: none;"
        finish()
    }

}

function finish() {
    finishdiv.classList.add("finishslow")
    restart.classList.add("restartslow")
    restart2.classList.add("restartslow")
}


function refresh(){
    location.reload()
}

var restart = document.getElementById("restart")
var restart2 = document.getElementById("second")

restart.addEventListener("click", () => {
    refresh()
})
