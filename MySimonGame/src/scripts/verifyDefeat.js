export function verifyDefeat(currentPlays,padsTrail) {
    for (let i = 0; i < currentPlays.length; i++) {
        if (padsTrail[i] !== currentPlays[i]){
            return true;   
        }
    }
    return false;
}

