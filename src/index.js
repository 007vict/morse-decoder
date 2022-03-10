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
}

function decode(expr) {
    let space = '**********';
    let words = [];
    let wordOne = '';
    let wordAll = '';
    let cutWord = '';

    if (expr.includes(space)) {
      words = expr.split(space);
    } else {
      words.push(expr);
    }

    for (let i = 0; i < words.length; i++) {
      while (words[i].length > 0) {
        cutWord = words[i].slice(0, 10);
        wordOne = cutWord.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
        wordAll += MORSE_TABLE[wordOne];
        words[i] = words[i].replace(`${cutWord}`, '');
      }
      wordAll += ' ';
    }
    return wordAll.trimEnd()
}

module.exports = {
    decode
}