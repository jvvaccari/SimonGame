import { trailMaker } from './trailMaker.js';
import { selectedPad } from './selectedPad.js';

let start = true;

$(document).ready(() => {

    $(document).on('keydown', (event) => {   
        if(event.key === 'a' && start) {
           trailMaker();
           start = false;
           $(document).ready(() => { 
                for(let i = 0;i < $('.pads').length;i++){
                    $($('.pads')[i]).on('click',selectedPad);
                }
            });
        }
    });
    
});

