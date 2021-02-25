exports.min = function min(array) {
    let result = +Infinity;
    if (arguments.length == 0) {
        return 0
    }
    if (Array.isArray(array) && array.length == 0) {
        return 0
    }
    for (let i = 0; i < array.length; i++) {

        if (array[i] < result) {
            result = array[i];
        }
    }
    return result
}

exports.max = function max(array) {
    let result = -Infinity;
    if (arguments.length == 0) {
        return 0
    }
    if (Array.isArray(array) && array.length == 0) {
        return 0
    }
    for (let i = 0; i < array.length; i++) {

        if (array[i] > result) {
            result = array[i];
        }
    }
    return result
}
exports.avg = function avg(array) {
    let result = 0;
    if (arguments.length == 0) {
        return 0
    }
    if (Array.isArray(array) && array.length == 0) {
        return 0
    }
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result / array.length
}
