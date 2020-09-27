/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let array = str.split(/[^\d.-]/g);
   let arr = array.filter(item => item !== "")
  .sort( (a, b) => a - b);

  let result = {
  min: +`${arr[0]}`,
  max: +`${arr[arr.length - 1]}`
};
return result;
  
}
