import { trailMaker } from './trailMaker.js';

$(document).ready(() => {
    console.log('Document is ready for startingGame');
    let i = 0;

    $(document).on('keydown', (event) => {   
        if(event.key === 'a') {
           $('#main-title').text(`Level ${i + 1}`);
            trailMaker();
        }
    });
    
});

