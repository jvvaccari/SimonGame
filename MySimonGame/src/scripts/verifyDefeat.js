export function verifyDefeat(currentPlays,padsTrail) {
    for (let i = 0; i < currentPlays.length; i++) {
        if (padsTrail[i] !== currentPlays[i]){
            $('#main-title').text(`Game Over, Press Any Key to Restart`);
            $('body').css('background-color', 'red');
            setTimeout(()=>{
                $('body').css('background-color', '#011F3F');
            },250);
            return true;  
        }
    }
    return false;
}

