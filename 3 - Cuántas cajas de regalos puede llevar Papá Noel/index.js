const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
    let totalPackageWeigth = 0;
    let maxWeigthAllowed = 0;
    let maxWeigthPerReindeer = 0;

    for (let i = 0; i < packOfGifts.length; i++) {
        totalPackageWeigth += packOfGifts[i].length
    };

    for (let i = 0; i < reindeers.length; i++) {
        maxWeigthPerReindeer += reindeers[i].length * 2
        maxWeigthAllowed += maxWeigthPerReindeer
        maxWeigthPerReindeer = 0
    };

    console.log(Math.floor(maxWeigthAllowed / totalPackageWeigth));
    return Math.floor(maxWeigthAllowed / totalPackageWeigth);
}

distributeGifts(packOfGifts, reindeers); // 2

