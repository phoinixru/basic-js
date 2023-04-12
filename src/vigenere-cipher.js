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
  constructor(isDirectMachine = true) {
    this.isReverseMachine = !isDirectMachine;
    this.OFFSET = 65;
    this.LETTERS = 26;
  }

  encrypt(message, key) {
    return this.finalize(
      this.process({ text: message, key })
    );
  }

  decrypt(encryptedMessage, key) {
    return this.finalize(
      this.process({ text: encryptedMessage, key, decrypt: true })
    );
  }

  finalize(chars) {
    if (this.isReverseMachine) {
      chars.reverse();
    }

    return chars.join``;
  }

  process({ text, key, decrypt = false }) {
    this.checkArguments([text, key]);

    text = text.toUpperCase();
    key = key.toUpperCase();

    let processedCount = 0;

    return text
      .split``
      .map((char) => {
        const letterCode = char.charCodeAt(0) - this.OFFSET;

        if (letterCode < 0 || letterCode > this.LETTERS) {
          return char;
        }

        const keyLetterCode = key.charCodeAt(processedCount++ % key.length) - this.OFFSET;
        let resultLetterCode = (letterCode + keyLetterCode * (decrypt ? -1 : 1)) % this.LETTERS;
        if (resultLetterCode < 0) resultLetterCode += this.LETTERS;

        const resultChar = String.fromCharCode(this.OFFSET + resultLetterCode);

        return resultChar;
      });
  }

  checkArguments(args) {
    if (args.filter(a => a === undefined).length) {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
