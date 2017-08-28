const CELL = '*';
const INVERTED_CELL = ' ';

function chess(N) {
    if (N < 2) {
        return null
    }

    N = parseInt(N);

    const outputArr = new Array(N);
    const line = getOneLine(CELL, N);
    const invertedLine = getOneLine(INVERTED_CELL, N);
    outputArr[0] = line;


    for (let i = 0; i < N; i++) {
        outputArr[i] = i % 2 === 0 ? line : invertedLine;
    }

    return outputArr.join('\n') + '\n'
}

/**
 * @param startSymbol может быть ${CELL} или ${INVERTED_CELL}
 * @param N целое, положительное число (больше нуля)
 * @returns {string}
 */
function getOneLine(startSymbol, N) {
    let array = new Array(N);
    array[0] = startSymbol;

    for (let i = 1; i < N; i++) {
        if (array[i - 1] === CELL) {
            array[i] = INVERTED_CELL;
        } else {
            array[i] = CELL;
        }
    }

    return array.join('')
}