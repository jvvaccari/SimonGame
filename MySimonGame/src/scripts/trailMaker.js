import { restartGame } from "./restartGame.js";

const padsTrail = [];
let j = 0;

function selectedPad(randomPad) {
    console.log(`The pad has been selected: ${randomPad}`);
    $($('.pads')).eq(randomPad).animate({opacity: 0.5}).animate({opacity: 1});
    padsTrail[j] = randomPad;
    j++;
    console.log(padsTrail);
}

function trailMaker() {
    let randomPad = Math.round(Math.random() * 3);
    selectedPad(randomPad);
}

function emptyTrail(){
    restartGame();
}

export { trailMaker, padsTrail, emptyTrail};

