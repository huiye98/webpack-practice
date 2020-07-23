import _ from 'lodash'
import numRef from './ref.json'
// 数字转换的库
export function numToWord(num) {
    return _.reduce(numRef, (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    }, '');
  }
    
  export function wordToNum(word) {
    return _.reduce(numRef, (accum, ref) => {
      // 迷惑...为啥非要这么写
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
  }