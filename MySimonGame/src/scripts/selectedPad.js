import { trailMaker,padsTrail } from './trailMaker.js';
import { verifyDefeat } from './verifyDefeat.js';
import { restartGame } from './restartGame.js';

let currentPlays = [];
let j = 0;

function selectedPad(){
    if(currentPlays.length < padsTrail.length){
        console.log(`The pad ${$('.pads').index(this)} has been clicked`);
        $(this).animate({opacity: 0.5}).animate({opacity: 1});
        currentPlays[j] = $('.pads').index(this);
        j++;
        if(verifyDefeat(currentPlays,padsTrail)){
            // restartGame();
            // emptyTrail();
            console.log('defeat');
        };
        console.log('Current plays:', currentPlays);
    }else{
        trailMaker();
        currentPlays = [];
        j = 0;
        console.log('Current plays after reset:', currentPlays);
    }
}

$(document).ready(() => { 
    for(let i = 0;i < $('.pads').length;i++){
        $($('.pads')[i]).on('click',selectedPad);
    }
});

export { selectedPad };

