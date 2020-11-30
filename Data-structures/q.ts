function Cracker(msg: number[], KEY: number): string {
  // each number in array represents: ASCII of letter + const 64 + the sum of all letters presciding it in the same manner.
  let encrypted: string = String.fromCharCode(msg[0] - KEY);
  for (let i: number = 1; i < msg.length; i++) {
    let encryptedLetter: string = "";
    encryptedLetter = String.fromCharCode(msg[i] - msg[i - 1] - KEY);
    encrypted += encryptedLetter;
  }
  return encrypted;
}

console.log(
  Cracker(
    [
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
    ],
    64
  )
  // The cops are on to us?
);

//#region Encryption Algos
//Super Computer
function blackBearEncryptorS(msg: string, KEY: number) {
  //reverse message (including spaces!)
  const prasedReversedMsg: string[] = msg
    .split(" ")
    .reverse()
    .map((word: string, index: number) => (index === 0 ? word : word + " "))
    .join("")
    .split("");

  let sum: number = 0;
  const encrypted: number[] = prasedReversedMsg.map((letter: string) => {
    const encLetter: number = letter.charCodeAt(0) + KEY + sum;
    sum = encLetter;
    return encLetter;
  });
  console.log(prasedReversedMsg);
  return encrypted;
}

//clock
function blackBearEncryptorC(msg: string, KEY: number) {
  // reverse message (including spaces!)
  const prasedReversedMsg: string[] = [];
  const msgLengt: number = msg.length;

  let currentWordLength: number = msg.indexOf(" ") + 1;
  let currentCharIndexInWord: number = 0;

  for (let i: number = 0; i < msgLengt; i++) {
    if (msg.charAt(i) === " ") {
      prasedReversedMsg[
        msgLengt - (currentWordLength - currentCharIndexInWord)
      ] = msg.charAt(i);
      let j: number = i;
      currentWordLength++;
      currentCharIndexInWord = 0;
      while (j < msgLengt - 2 && msg.charAt(j + 1) !== " ") {
        currentWordLength++;
        j++;
      }
      continue;
    }

    prasedReversedMsg[
      msgLengt - (currentWordLength - currentCharIndexInWord)
    ] = msg.charAt(i);
    currentCharIndexInWord++;
  }

  let sum = 0;
  return prasedReversedMsg.map((letter: string) => {
    const encLetter: number = letter.charCodeAt(0) + KEY + sum;
    sum = encLetter;
    return encLetter;
  });
}
//#endregion

//#region Decryption Algos
//Super Computer & Clock
function blackbearDecryptor(msg: number[], KEY: number) {
  let encrypted: string = String.fromCharCode(msg[0] - KEY);
  for (let i: number = 1; i < msg.length; i++) {
    let encryptedLetter: string = "";
    encryptedLetter = String.fromCharCode(msg[i] - msg[i - 1] - KEY);
    encrypted += encryptedLetter;
  }
  return encrypted;
}

const superComputerEncryption = blackBearEncryptorS("Crime never pays!", 62);
const clockEncryption = blackBearEncryptorC("Crime never pays!", 62);
console.log(superComputerEncryption);
console.log(clockEncryption);
const superComputerDecrypt = blackbearDecryptor(superComputerEncryption, 62);
console.log(superComputerDecrypt);
