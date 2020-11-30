function isStringQunique(str) {
    var appearences = [];
    for (var i = 0; i < str.length; i++) {
        if (appearences[str.charCodeAt(i)])
            return false;
        appearences[str.charCodeAt(i)] = 1;
    }
    return true;
}
//checks
console.log(isStringQunique("abcdefg")); //expect true
console.log(isStringQunique("abcbsefg")); // expect false
console.log(isStringQunique("mfcksxrwolazpqv")); // expect true
console.log(isStringQunique("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZa")); // expect false
