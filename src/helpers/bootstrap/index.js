/** @function Bootstrap
 * @description
 * In this process we have fake promise. instead we can
 * load external application resources, such as configuration
 * and translations.
 */

const Bootstrap = store => {
  let promise = new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  return promise;
};

export default Bootstrap;
