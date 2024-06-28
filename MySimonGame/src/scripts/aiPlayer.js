import {defeat,padsClicked} from './humanPlayer.js'

let humanTurn = false;
const padsTrail = [];

function aiPLayer(i=0){
    while(!defeat){
        if(!humanTurn){
            let randomPad = Math.round(Math.random()*3);
            padsClicked.call($('.pads')[randomPad]);
            padsTrail[i] = randomPad;
            humanTurn = true;
            console.log(`AI selected pad: ${randomPad}`);
            
            setTimeout(() => {
                humanTurn = true;
                aiPLayer(i + 1);
            }, 500); 
        }
    }
}

$(document).ready(()=>{
    console.log('Document is ready for aiPlayer');
    $(document).on('keydown', (event) => {
        if(event.key === 'a'){
            console.log('Key "a" pressed');
            $('#main-title').text('Level 1');
            aiPLayer();
        }
    });
});

export { padsTrail,humanTurn};

