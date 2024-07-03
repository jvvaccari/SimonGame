import { trailMaker,padsTrail } from './trailMaker.js';
import { verifyDefeat } from './verifyDefeat.js';
// import { restartGame } from './restartGame.js';

let currentPlays = [];
let j = 0;

function selectedPad(){
    if(currentPlays.length + 1 < padsTrail.length){
        $(this).animate({opacity: 0.5}).animate({opacity: 1});
        currentPlays[j] = $('.pads').index(this);
        j++;
        verifyDefeat(currentPlays,padsTrail);
    }else{
        $(this).animate({opacity: 0.7}).animate({opacity: 1});
        currentPlays[j] = $('.pads').index(this);
        trailMaker();
        currentPlays = [];
        j = 0;
        verifyDefeat(currentPlays,padsTrail);
    }
}

export { selectedPad,currentPlays };

