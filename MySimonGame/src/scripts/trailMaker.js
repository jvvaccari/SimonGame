import { verifyDefeat } from './verifyDefeat.js';
import { currentPlays } from './selectedPad.js';


let padsTrail = [];
let j = 0;
let k = 0;


function animatedTrailPad(index,delay){
    
    setTimeout(()=>{
        $($('.pads')).eq(index).animate({opacity: 0.5}).animate({opacity: 1});
        padSound(index);
    }, delay);
}

function selectedTrailPad(randomPad) {
    let delay = 1000;
    padsTrail[j] = randomPad;
    console.log(padsTrail);
    for(let i = 0;i < padsTrail.length ;i++){ 
        console.log(padsTrail[i])
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
    }else{
        padsTrail = [];
        j = 0;
        k = 0;
    }
}

function padSound(randomPad){
    const audioElement = document.getElementById(`${getColorById(randomPad)}-sound`);
    if(audioElement){
        audioElement.currentTime = 0; 
        audioElement.play();
    }else{
        console.error('Audio element not found.');
    }
}

function getColorById(id){
    switch(id){
        case 0: return 'green';
        case 1: return 'red';
        case 2: return 'yellow';
        case 3: return 'blue';
        default: return '';
    }
}

export { trailMaker, padsTrail };

