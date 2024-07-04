import { trailMaker } from './trailMaker.js';
import { selectedPad } from './selectedPad.js';

let start = false;
let restart = false;

$(document).ready(() => {
    $(document).on('keydown', (event) => {   
        if(restart && !start){ 
            start = true;
            restart = false;
        }
        if (event.key === 'a' && !start) {
            startGame();
        } else if(start && !restart){
            restartGame();
        }
    });  
});

function startGame() {
    trailMaker();
    attachPadClickHandlers();
    start = true;
}

function restartGame() {
    trailMaker();
    restart = true;
    start = false;
}


function attachPadClickHandlers() {
    for(let i = 0;i < $('.pads').length;i++){
        $($('.pads')[i]).on('click',selectedPad);
    }
}



