const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let newArr = []
    let sentence = []

    let splitted = expr.split("")

    while (splitted.length > 0) {
        newArr.push(splitted.splice(0, 10))
    }

    for (let key in newArr) {
        console.log(newArr[key].join(''))
        switch (newArr[key].join('')) {
            case '0000001011':
                sentence.push('a')
                break;
            case '0011101010':
                sentence.push('b')
                break;
            case '0011101110':
                sentence.push('c')
                break;
            case '0000111010':
                sentence.push('d')
                break;
            case '0000000010':
                sentence.push('e')
                break;
            case '0010101110':
                sentence.push('f')
                break;
            case '0000111110':
                sentence.push('g')
                break;
            case '0010101010':
                sentence.push('h')
                break;
            case '0000001010':
                sentence.push('i')
                break;
            case '0010111111':
                sentence.push('j')
                break;
            case '0000111011':
                sentence.push('k')
                break;
            case '0010111010':
                sentence.push('l')
                break;
            case '0000001111':
                sentence.push('m')
                break;
            case '0000001110':
                sentence.push('n')
                break;
            case '0000111111':
                sentence.push('o')
                break;
            case '0010111110':
                sentence.push('p')
                break;
            case '0011111011':
                sentence.push('q')
                break;
            case '0000101110':
                sentence.push('r')
                break;
            case '0000101010':
                sentence.push('s')
                break;
            case '0000000011':
                sentence.push('t')
                break;
            case '0000101011':
                sentence.push('u')
                break;
            case '0010101011':
                sentence.push('v')
                break;
            case '0000101111':
                sentence.push('w')
                break;
            case '0011101011':
                sentence.push('x')
                break;
            case '0011101111':
                sentence.push('y')
                break;
            case '0011111010':
                sentence.push('z')
                break;
            case '**********':
                sentence.push(' ')
                break;
            case '1011111111':
                sentence.push('1')
                break;
            case '1010111111':
                sentence.push('2')
                break;
            case '1010101111':
                sentence.push('3')
                break;
            case '1010101011':
                sentence.push('4')
                break;
            case '1010101010':
                sentence.push('5')
                break;
            case '1110101010':
                sentence.push('6')
                break;
            case '1111101010':
                sentence.push('7')
                break;
            case '1111111010':
                sentence.push('8')
                break;
            case '1111111110':
                sentence.push('9')
                break;
            case '1111111111':
                sentence.push('0')
                break;
        }
    }

    return sentence.join('')
}

module.exports = {
    decode
}