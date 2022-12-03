const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {

    let envolturaIzq: string = ''
    let envolturaDer: string = ''
    let regalosEnvueltos: string[] = []

    gifts.map(gift => {
        envolturaIzq = `${'*'.repeat(gift.length + 2)}\n*`
        envolturaDer = `*\n${'*'.repeat(gift.length + 2)}`
        regalosEnvueltos.push(envolturaIzq + gift + envolturaDer)
    });
    
    return regalosEnvueltos
};

wrapping(gifts);