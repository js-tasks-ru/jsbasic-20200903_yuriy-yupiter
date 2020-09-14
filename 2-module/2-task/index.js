/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         return false;
       }
 }
return true;
}
