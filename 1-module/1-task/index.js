/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
 function factorial(n) {
         let x = 1;

         if (n <= 1) {
             return x;
         } else {
             while (n > 1) {
                 x = x * n;
                 n = n - 1;
             }
             return x;
         }
 }
