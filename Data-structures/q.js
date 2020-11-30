function Cracker(msg, KEY) {
    // each number in array represents: ASCII of letter + const 64 + the sum of all letters presciding it in the same manner.
    var encrypted = String.fromCharCode(msg[0] - KEY);
    for (var i = 1; i < msg.length; i++) {
        var encryptedLetter = "";
        encryptedLetter = String.fromCharCode(msg[i] - msg[i - 1] - KEY);
        encrypted += encryptedLetter;
    }
    return encrypted;
}
console.log(Cracker([
    181,
    360,
    457,
    637,
    812,
    987,
    1161,
    1322,
    1500,
    1665,
    1828,
    2003,
    2179,
    2358,
    2506,
    2674,
    2839,
], 64)
// The cops are on to us?
);
//#region Encryption Algos
//Super Computer
function blackBearEncryptorS(msg, KEY) {
    //reverse message (including spaces!)
    var prasedReversedMsg = msg
        .split(" ")
        .reverse()
        .map(function (word, index) { return (index === 0 ? word : word + " "); })
        .join("")
        .split("");
    var sum = 0;
    var encrypted = prasedReversedMsg.map(function (letter) {
        var encLetter = letter.charCodeAt(0) + KEY + sum;
        sum = encLetter;
        return encLetter;
    });
    console.log(prasedReversedMsg);
    return encrypted;
}
//clock
function blackBearEncryptorC(msg, KEY) {
    // reverse message (including spaces!)
    var prasedReversedMsg = [];
    var msgLengt = msg.length;
    var currentWordLength = msg.indexOf(" ") + 1;
    var currentCharIndexInWord = 0;
    for (var i = 0; i < msgLengt; i++) {
        if (msg.charAt(i) === " ") {
            prasedReversedMsg[msgLengt - (currentWordLength - currentCharIndexInWord)] = msg.charAt(i);
            var j = i;
            currentWordLength++;
            currentCharIndexInWord = 0;
            while (j < msgLengt - 2 && msg.charAt(j + 1) !== " ") {
                currentWordLength++;
                j++;
            }
            continue;
        }
        prasedReversedMsg[msgLengt - (currentWordLength - currentCharIndexInWord)] = msg.charAt(i);
        currentCharIndexInWord++;
    }
    var sum = 0;
    return prasedReversedMsg.map(function (letter) {
        var encLetter = letter.charCodeAt(0) + KEY + sum;
        sum = encLetter;
        return encLetter;
    });
}
//#endregion
//#region Decryption Algos
//Super Computer
function blackbearDecryptor(msg, KEY) {
    var encrypted = String.fromCharCode(msg[0] - KEY);
    for (var i = 1; i < msg.length; i++) {
        var encryptedLetter = "";
        encryptedLetter = String.fromCharCode(msg[i] - msg[i - 1] - KEY);
        encrypted += encryptedLetter;
    }
    return encrypted.split(" ");
}
var superComputerEncryption = blackBearEncryptorS("Crime never pays!", 62);
var clockEncryption = blackBearEncryptorC("Crime never pays!", 62);
console.log(superComputerEncryption);
console.log(clockEncryption);
var superComputerDecrypt = blackbearDecryptor(superComputerEncryption, 62);
console.log(superComputerDecrypt);
