#!/usr/bin/node

const SquareBase = require('./5-square');

class Square extends SquareBase {
	  charPrint(c) {
		      const char = c === undefined ? 'X' : c;
		      for (let i = 0; i < this.width; i++) {
			            console.log(char.repeat(this.width))
			          }
		    }
}

module.exports = Square
