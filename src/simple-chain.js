const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chain: [],

  getLength() {
    this._chain.length;
  },

  addLink(value = '') {
    this._chain.push(value);
    return this;
  },

  removeLink(position) {
    const p = position - 1;

    if (isNaN(p) || this._chain[p] === undefined) {
      this.resetChain();

      throw new Error(`You can't remove incorrect link!`);
    }

    this._chain.splice(p, 1);
    return this;
  },

  reverseChain() {
    this._chain.reverse();
    return this;
  },

  finishChain() {
    const finished = this._chain.map(v => `( ${v} )`).join`~~`;
    this.resetChain();

    return finished;
  },

  resetChain() {
    this._chain = [];
  }
};

module.exports = {
  chainMaker
};
