import { trailMaker,padsTrail } from './trailMaker.js';
import { verifyDefeat } from './verifyDefeat.js';
// import { restartGame } from './restartGame.js';

let currentPlays = [];
let j = 0;

function selectedPad(){
    if(!verifyDefeat(currentPlays,padsTrail)){
        if(currentPlays.length < padsTrail.length - 1){
            $(this).animate({opacity: 0.5}).animate({opacity: 1});
            currentPlays[j] = $('.pads').index(this);
            j++;
        }else {
            $(this).animate({opacity: 0.7}).animate({opacity: 1});
            currentPlays[j] = $('.pads').index(this);
            trailMaker();
            currentPlays = [];
            j = 0;
        }
    }else{
        $('#main-title').text(`Game Over, Press Any Key to Restart`);
        $('body').css('background-color', 'red');
        setTimeout(()=>{
            $('body').css('background-color', '#011F3F');
        },1000);
    }
}

export { selectedPad,currentPlays };

