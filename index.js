/**
 * @param {String} string
 * @return {String}
 */

const APOSTROPHE_CHAR = '’';

module.exports = function possessive(string) {
  if(string == '') {
    return string;
  }
  var lastChar = string.slice(-1);
  var endOfWord = lastChar.toLowerCase() == 's' ? APOSTROPHE_CHAR : `${APOSTROPHE_CHAR}s`;
  return `${string}${endOfWord}`;
}