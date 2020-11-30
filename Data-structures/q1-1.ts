function isStringQunique(str: string): boolean {
  const appearences: number[] = [];
  for (let i: number = 0; i < str.length; i++) {
    if (appearences[str.charCodeAt(i)]) return false;
    appearences[str.charCodeAt(i)] = 1;
  }
  return true;
}

//checks
console.log(isStringQunique("abcdefg")); //expect true
console.log(isStringQunique("abcbsefg")); // expect false
console.log(isStringQunique("mfcksxrwolazpqv")); // expect true
console.log(
  isStringQunique("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZa")
); // expect false
