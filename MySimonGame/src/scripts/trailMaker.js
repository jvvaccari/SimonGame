import { verifyDefeat } from './verifyDefeat.js';
import { currentPlays } from './selectedPad.js';


const padsTrail = [];
let j = 0;
let k = 0;

function animatedTrailPad(index,delay){
    setTimeout(()=>{
        $($('.pads')).eq(index).animate({opacity: 0.5}).animate({opacity: 1});
    }, delay);
}

function selectedTrailPad(randomPad) {
    padsTrail[j] = randomPad;
    let delay = 1000;
    
    for(let i = 0;i < padsTrail.length ;i++){ 
        animatedTrailPad(padsTrail[i],delay);
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
        selectedTrailPad(randomPad);
    }
}



export { trailMaker, padsTrail };

