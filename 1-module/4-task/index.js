/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let spam1 = "1xBet";
  let spam2 = "XXX";
  spam1 = spam1.toUpperCase();
  spam2 = spam2.toUpperCase();
  str = str.toUpperCase();
  let spam = str.indexOf(spam1) != -1 || str.indexOf(spam2) != -1;
  return spam;
}
