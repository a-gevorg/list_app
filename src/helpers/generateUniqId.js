/** UUID generator
 * Function provides "unique" id.
 * Must be used with React iterable components.
 */

const hash = _ => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

/** @function guid
 * @description
 * The function generates uuid. It can be used as `key`-s needed for
 * React itarated components
 */

const guid = _ => hash() + hash() + '-' + hash() + '-' + hash() + '-' + hash() + '-' + hash() + hash() + hash();

export default guid;
