export function verifyDefeat(humanPlays,padsTrail) {
    for (let i = 0; i < padsTrail.length; i++) {
        if (padsTrail[i] !== humanPlays[i]){
            return true;   
        }
    }
    return false;
}

