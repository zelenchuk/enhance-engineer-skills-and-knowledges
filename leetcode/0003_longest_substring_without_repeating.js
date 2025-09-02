// time when started make a solution - 11:57
// time when finished - 12:56 - не смог реашить без ГПТ. Тяжело понять что такое под-строка и нахуй она треба

/*
 * Грубо гвооря надо понять что делать (условие и его части), дальше легче.
 *
 *  1. Что такое подстрока?
 *    - Самый длинный кусок строки без повторов. Вот сколько будет максимальная длина подстроки данной строки.
 *  2. Что надо сделать?
 *    - Длинейшую, грубо говоря переводим на язык цыфр - максимальное значение длины подстроки.
 *  3.  ...
 *
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
//const lengthOfLongestSubstring = function(s) {
//
//  let i = 0;
//  let j = 1;
//  let longestStrWithNoRepeat = '';
//
//
//  while(s.length !== (i + 1)) {
//
//    if (longestStrWithNoRepeat.length === 0) {
//      longestStrWithNoRepeat += s[i]
//    } else {
//      if (!longestStrWithNoRepeat.includes(s[i])) {
//        longestStrWithNoRepeat += s[i];
//      }else{
//        longestStrWithNoRepeat = '';
//      }
//    }
//    i++;
//  }
//
//  console.log(longestStrWithNoRepeat)
//  return longestStrWithNoRepeat.length;
//};
//const lengthOfLongestSubstring = function(s) {
//  let i = 0;                        // левая граница окна
//  let longest = 0;
//  let current = new Set();          // хранит символы в окне
//
//  for (let j = 0; j < s.length; j++) {
//    while (current.has(s[j])) {
//      // убираем левый символ, пока не исчезнет повтор
//      current.delete(s[i]);
//      i++;
//    }
//    current.add(s[j]);
//    longest = Math.max(longest, j - i + 1);
//  }
//
//  return longest;
//};

const lengthOfLongestSubstring = function(s) {
  let i = 0;
  let longestStrWithNoRepeat = '';
  let maxLength = 0;

  while (i < s.length) {
    if (!longestStrWithNoRepeat.includes(s[i])) {
      longestStrWithNoRepeat += s[i];
    } else {
//       // найти индекс повтора
//       const repeatIndex = longestStrWithNoRepeat.indexOf(s[i]);
//       // обрезать строку после повтора и добавить текущий символ
//       longestStrWithNoRepeat = longestStrWithNoRepeat.slice(repeatIndex + 1) + s[i];

      longestStrWithNoRepeat = s[i]
    }

    maxLength = Math.max(maxLength, longestStrWithNoRepeat.length);
    i++;
  }

  return maxLength;
};



//const str1 = "abcabcbb";
//const str2 = "bbbbb";
//const str3 = "pwwkew";

const str1 = "abba";
const str2 = "dvdf";
const str3 = "tmmzuxt";

//console.log(str3.slice(5))

console.log(lengthOfLongestSubstring(str1));
