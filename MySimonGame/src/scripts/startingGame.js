import { trailMaker } from './trailMaker.js';

$(document).ready(() => {
    console.log('Document is ready for startingGame');

    $(document).on('keydown', (event) => {   
        if(event.key === 'a') {
           trailMaker();
        }
    });
    
});

