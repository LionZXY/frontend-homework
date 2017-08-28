const CELL = '*';
const INVERTED_CELL = ' ';

function chess(N) {
    if (N == 1) {
        return null
    }

    let outputArr = [INVERTED_CELL];

    for (let i = 1; i < N * 1 + N * N; i++) {
        outputArr.push((i + 1) % N === 0 && i !== 0 ? '\n' : // Условие 1. Если мы достигли края строки, ставим звездочку
            outputArr[i - 1] === '\n' ? (Math.floor((i + 1) / (N + 1)) % 2 === 0 ? CELL : INVERTED_CELL) : // Условие 2. Если мы вначале строки, ставим знак в зависимости от четности строки
                outputArr[i - 1] === CELL ? INVERTED_CELL : CELL); // Условие 3. Текущий знак - инвертированный предыдущий
    }

    return outputArr.join('')
}