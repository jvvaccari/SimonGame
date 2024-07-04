import { trailMaker,padsTrail } from './trailMaker.js';
import { verifyDefeat } from './verifyDefeat.js';

let currentPlays = [];
let j = 0;

function selectedPad(){
    if(!verifyDefeat(currentPlays,padsTrail)){
        padSound(this);
        if(currentPlays.length + 1 < padsTrail.length){
            $(this).animate({opacity: 0.5}).animate({opacity: 1});
            currentPlays[j] = $('.pads').index(this);
            j++;
            if(verifyDefeat(currentPlays,padsTrail)){
                trailMaker();
                currentPlays = [];
                j = 0;
            }
        }else{
            $(this).animate({opacity: 0.7}).animate({opacity: 1});
            currentPlays[j] = $('.pads').index(this);
            verifyDefeat(currentPlays,padsTrail);
            trailMaker();
            currentPlays = [];
            j = 0;
        }     
    }else{
        trailMaker();
        currentPlays = [];
        j = 0;
    }
}

function padSound(clickPad){
    const padIndex = $('.pads').index(clickPad);
    const audioElement = document.getElementById(`${getColorById(padIndex)}-sound`);
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

export { selectedPad,currentPlays };

