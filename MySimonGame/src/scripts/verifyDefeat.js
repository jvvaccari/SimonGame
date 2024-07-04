export function verifyDefeat(currentPlays, padsTrail) {
    for (let i = 0; i < currentPlays.length; i++) {

        if (padsTrail[i] !== currentPlays[i]) {
            let audioElement = $(`.pads:eq(${currentPlays[i]}) audio`)[0];
            console.log(audioElement.src);
            let originalSrc = audioElement.src;
            console.log(originalSrc);
            if (audioElement.src === './src/sounds/wrong.mp3') {
                audioElement.src = originalSrc; // Restore original src
                audioElement.currentTime = 0;
                audioElement.play();
            }else if(audioElement){
                audioElement.src = './src/sounds/wrong.mp3';
                audioElement.currentTime = 0;
                audioElement.play();
            }

            $('#main-title').text(`Game Over, Press Any Key To Restart`);
            $('body').css('background-color', 'red');

            setTimeout(() => {
                $('body').css('background-color', '#011F3F');
            }, 250);

            return true; // Indicate defeat
        }
    }

    return false; // Indicate no defeat
}
