
//https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
//Window: DOMContentLoaded event
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
// without waiting for stylesheets, images, and subframes to finish loading.

// The original target for this event is the Document that has loaded. You can listen for this 
// event on the Window interface to handle it in the capture or bubbling phases. For full details on this 
// event please see the page on the Document: DOMContentLoaded event.


// WORKS WITHOUT IT
document.addEventListener("DOMContentLoaded", () => {

    /*----- constants -----*/
    //icon options for the board
    const iconArray = [
        {
            name: 'dragon',
            img: "images/dragon-solid.svg"
        },
        {
            name: 'dragon',
            img: "images/dragon-solid.svg"
        },
        {
            name: 'fire',
            img: "images/fire-solid.svg"
        },
        {
            name: 'fire',
            img: "images/fire-solid.svg"
        },
        {
            name: 'floppy',
            img: "images/floppy-disk-solid.svg"
        },
        {
            name: 'floppy',
            img: "images/floppy-disk-solid.svg"
        },
        {
            name: 'ghost',
            img: "images/ghost-solid.svg"
        },
        {
            name: 'ghost',
            img: "images/ghost-solid.svg"
        },
        {
            name: 'guitar',
            img: "images/guitar-solid.svg"
        },
        {
            name: 'guitar',
            img: "images/guitar-solid.svg"
        },
        {
            name: 'ice-cream',
            img: "images/ice-cream-solid.svg"
        },
        {
            name: 'ice-cream',
            img: "images/ice-cream-solid.svg"
        },
        {
            name: 'poo',
            img: "images/poo-solid.svg"
        },
        {
            name: 'poo',
            img: "images/poo-solid.svg"
        },
        {
            name: 'skull',
            img: "images/skull-crossbones-solid.svg"
        },
        {
            name: 'skull',
            img: "images/skull-crossbones-solid.svg"
        }

    ]

    // RANDONMIZE CARDS
    // Help from a friend
    iconArray.sort(() => (Math.random() * 2) - 1);

    /*----- cached element references -----*/
    const board = document.querySelector(".board");
    const resetButton = document.getElementById("button");

    /*----- app's state (variables) -----*/
    // to cache and compare 2 selected icons
    let iconPicked = [];
    let iconPickedId = [];

    /*----- functions -----*/
    //Initiate CREATE GAME BOARD
    function createBoard() {
        for (let i = 0; i < iconArray.length; i++) {
            let iconImg = document.createElement('img');
            iconImg.setAttribute('src', 'images/back.png')
            iconImg.setAttribute('data-id', i);
            iconImg.setAttribute('width', "100px");
            iconImg.setAttribute('height', "100px");
            iconImg.addEventListener("click", flipIcon);
            board.appendChild(iconImg);
        }
    }

    // Help from John
    function flipIcon() {
        // selects icon by data-id index
        let iconID = this.getAttribute('data-id');
        // stores icon's name key value in iconPicked array
        iconPicked.push(iconArray[iconID].name);
        // stores icon's image key value in iconPickedId array
        iconPickedId.push(iconID);
        // loads icon image source from iconArray
        this.setAttribute('src', iconArray[iconID].img);
        //delays flip over if cards are wrong
        if (iconPicked.length === 2) {
            setTimeout(checkMatch, 300)
        }
    }
    // Help from John
    function checkMatch() {
        // Sound effects
        let winSound = new Audio('Sounds/small-applause-6695.mp3')
        let wrongSound = new Audio('Sounds/booohwav-14768.mp3')

        // to display message to user
        let winMsg = document.getElementById("winMessage");
        let cards = document.querySelectorAll('img');
        const firstFlipId = iconPickedId[0];
        const seconfFlipId = iconPickedId[1];
        //Checks if both icons Id's at index [0] and [1] are the same
        if (iconPicked[0] === iconPicked[1]) {
            //display message if a match
            winMsg.innerHTML = "Match!";
            winSound.play();
        }

        else {
            //IF not a match, resets first and second picks
            cards[firstFlipId].setAttribute('src', 'images/back.png');
            cards[seconfFlipId].setAttribute('src', 'images/back.png');
            //display message if a match
            winMsg.innerHTML = "No match!";
            wrongSound.play();
        }
        // clears arrays for next picks
        iconPicked = [];
        iconPickedId = [];

    }

    // Refresh page code from:
    //https://www.techiedelight.com/reload-page-with-javascript/
    window.addEventListener("load", event => {
        document.getElementById("button").onclick = function () {
            location.assign(location.href); // or, use `location.assign(location)`
        }
    });

    // Initiate game
    createBoard();
})