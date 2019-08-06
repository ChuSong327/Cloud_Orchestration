/**
 * Encode string to base64
 * This is not a full analogue of btoa!
 * @param str
 * @param options
 * @returns {String}
 */
export const encodeBase64String = (str, options = {}) => {
  if (options.toJSON) {
    str = JSON.stringify(str)
  }
  return Buffer.from(str).toString('base64')
}

/**
 * Decode string from base64
 * @param str
 * @returns {string}
 */
export const decodeBase64String = str => {
  return Buffer.from(str, 'base64').toString()
}
