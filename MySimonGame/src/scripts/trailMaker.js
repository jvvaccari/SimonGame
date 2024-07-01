import { verifyDefeat } from './verifyDefeat.js';
import { currentPlays } from './selectedPad.js';


const padsTrail = [];
let j = 0;
let k = 0;

function animatedPad(index,delay){
    setTimeout(()=>{
        $($('.pads')).eq(index).animate({opacity: 0.5}).animate({opacity: 1});
    }, delay);
}

function aiSelectedPad(randomPad) {
    padsTrail[j] = randomPad;
    let delay = 1000;
    
    for(let i = 0;i < padsTrail.length ;i++){ 
        animatedPad(padsTrail[i],delay);
        delay += 1000;
    }

    j++;
}

function trailMaker() {
    if(!verifyDefeat(currentPlays,padsTrail)){
        setTimeout(()=>{
        $('#main-title').text(`Level ${k + 1}`);
        k++;
        },300);
        let randomPad = Math.round(Math.random() * 3);
        aiSelectedPad(randomPad);
    }else{
        $('#main-title').text(`Game Over, Press Any Key to Restart`);
        $('body').css('background-color', 'red');
        setTimeout(()=>{
            $('body').css('background-color', '#011F3F');
        },1000);
    }
}



export { trailMaker, padsTrail };

