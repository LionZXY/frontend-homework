const CELL = '*';
const INVERTED_CELL = ' ';

function chess(N) {
    if (N < 2) {
        return null
    }

    N = parseInt(N);

    let outputArr = new Array(N);
    outputArr[0] = getOneLine(CELL, N);

    for (let i = 1; i < N; i++) {
        outputArr[i] = getOneLine(i % 2 === 0 ? CELL : INVERTED_CELL, N);
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