// Script to enable the carusol

document.querySelector("#previous").addEventListener(
    "click",
    function() {
        moveBackward();
    }
)

document.querySelector("#next").addEventListener(
    "click",
    function() {
        moveForward();
    }
)

let cards = document.querySelectorAll(".card");
let cardPages = Math.ceil(cards.length / 3);
let l = 0;
let movePer = 481;
let maxMove = 481 * (cards.length - 2);

function moveForward() {
    l = l + movePer;
    for (const i of cards) {
        if (l >= maxMove) {
            l = l - movePer;
            break;
        }
        i.style.left = '-' + l + 'px';
    }
}

// 481*2 = l
function moveBackward() {
    l = l - movePer;
    for (const i of cards) {
        i.style.left = '-' + l + 'px';
    }
}