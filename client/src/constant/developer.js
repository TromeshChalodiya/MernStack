export const PROP_INITIALIZED = 'initialized';
export const PROP_FETCHING = 'fetching';
export const PROP_ERROR = 'error';
export const PROP_STATUS = 'status';
export const PROP_DATA = 'data';

function sumOfThree(...elements) {
  return new Promise((resolve, reject) => {
    if (elements.length < 3) {
      reject('Only three elemenst');
    } else {
      let sum = 0;
      let i = 0;
      while (i < elements.length) {
        sum += elements[i];
        i++;
      }
      resolve('sum has been cleared', sum);
    }
  });
}

sumOfThree([1, 2, 3]);
