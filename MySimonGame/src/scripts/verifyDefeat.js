export function verifyDefeat(currentPlays, padsTrail) {
    for (let i = 0; i < currentPlays.length; i++) {
        console.log('padsTrail '+padsTrail);
        console.log('currentPlays '+currentPlays);
        if (padsTrail[i] !== currentPlays[i]) {
            const wrongPadIndex = currentPlays[i];
            const audioElement = $(`.pads:eq(${wrongPadIndex}) audio`)[0]; 

            if (audioElement) {
                audioElement.src = './src/sounds/wrong.mp3';
                audioElement.currentTime = 0;
                audioElement.play();
            }

            $('#main-title').text(`Game Over, Press Any Key to Restart`); 
            $('body').css('background-color', 'red');
            setTimeout(() => {
                $('body').css('background-color', '#011F3F'); 
            }, 250);
            return true;
        }
    } 
    return false;
}