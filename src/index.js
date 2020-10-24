const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const DECODING_TABLE = {
    '00': '',
    '10': '.',
    '11': '-',
}

module.exports = {
    decode
};

function decode(expr) {
    const sentence = [];
    let pair = [];
    let letter = [];
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '*') {
            sentence.push(' ');
            i += 9;
            continue;
        }
        if (i % 2 === 0) {
            pair.push(expr[i]);
        } else {
            pair.push(expr[i]);
            const decodedMorseSymbol = DECODING_TABLE[pair.join('')];
            letter.push(decodedMorseSymbol);
            pair = [];
            if ((i + 1) % 10 === 0) {
                const decodedSymbol = MORSE_TABLE[letter.join('')];
                sentence.push(decodedSymbol);
                letter = [];
            }
        }
    }
    return sentence.join('');
}