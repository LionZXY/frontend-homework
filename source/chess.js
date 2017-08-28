/**
 @param {function(*, number=, Array.<T>=)} callback
 @param {*} [initialValue]
 @return {Array}
 */
Array.prototype.reduceMap = function (callback, initialValue) {
    return this.map(function (item, i, arr) {
        return arr[i] = callback(i === 0 ? initialValue : arr[i - 1], i, arr)
    });
};

function chess(N) {
    if (N == 1) {
        return null
    }

    var outputArr = Array.apply(null, new Array(N * 1 + N * N));
    N++;

    return outputArr.reduceMap(function (prev, i, arr) {
        return (i + 1) % N == 0 && i != 0 ? '\n' : prev == '\n' ? Math.floor((i + 1) / N) % 2 == 0 ? '*' : ' ' : prev == '*' ? ' ' : '*'
    }, ' ').join('')
}