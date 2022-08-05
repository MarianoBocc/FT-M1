'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let array = num.split('');
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + Math.pow(2, array.length - 1 - i) * array[i];
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let resto = [];
  while (num > 0){
    resto.unshift(num%2);
    num = Math.floor(num/2);
  }
  return resto.join('');
  
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}