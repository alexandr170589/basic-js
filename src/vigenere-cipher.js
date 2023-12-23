const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.mode = mode || mode === undefined;
  }

  encrypt(message, key) {
    if (!message || !key)
      throw new Error('Incorrect arguments!');

    let currentKeyIndex = 0;
    let result = "";

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i].toUpperCase())) {
        result += message[i];
        continue;
      }
      const codeMessage = this.alphabet.indexOf(message[i].toUpperCase());
      const codeKey = this.alphabet.indexOf(key[currentKeyIndex++ % key.length].toUpperCase());
      const encryptCode = (codeMessage + codeKey) % this.alphabet.length;
      result += this.alphabet[encryptCode];
    }
    return this.mode ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let currentKeyIndex = 0;
    let result = "";

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i].toUpperCase())) {
        result += message[i];
        continue;
      }

      const codeMessage = this.alphabet.indexOf(message[i].toUpperCase());
      const codeKey = this.alphabet.indexOf(key[currentKeyIndex++ % key.length].toUpperCase());
      const decryptCode = codeMessage - codeKey % this.alphabet.length;

      if (decryptCode < 0)
        result += this.alphabet[this.alphabet.length + decryptCode];
      else
        result += this.alphabet[decryptCode];
    }
    return this.mode ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
