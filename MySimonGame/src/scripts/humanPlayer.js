import { padsTrail, humanTurn } from './aiPlayer.js';
import { verifyDefeat } from './verifyDefeat.js';

const humanPlays = []; 
let j = 0;
let defeat = false;

export function padsClicked(){
    $(this).animate({opacity: 0.5}).animate({opacity: 1});
    if(humanTurn){
        humanPlays[j] = $('.pads').index(this);
        j++;
        if(verifyDefeat(humanPlays,padsTrail)){
             resetGame();
        };
        //checks
        console.log(humanPlays);
    }
}

function resetGame(){
    humanPlays.length = 0;
    humanTurn = false;
    j = 0;
    console.log('Defeat!');
    defeat = true;
}

$(document).ready(()=>{
    console.log('Document is ready for humanPlayer');
    for(let i = 0;i < $('.pads').length;i++){
        $($('.pads')[i]).on('click',padsClicked);
    }
});

export { humanPlays,defeat }; 






