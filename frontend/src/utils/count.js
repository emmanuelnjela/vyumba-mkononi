/**
 * The function count the number to a given maximum number
 * @param {number} maxNum 
 * @returns updated num
 */
export function count(maxNum) {
  var num = 0;

  return function () {
    if (num < maxNum)
      num++;

    else
      num = 1;
    return num;
  };
}