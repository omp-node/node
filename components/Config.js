/**
 * Config class
 */
class Config {
  /**
   * @method getAsBool
   * @param {string} cvar
   * @returns {boolean}
   */
  static getAsBool(cvar) {
    const result = __internal_omp.Config.GetAsBool(cvar);
    return result.ret;
  }

  /**
   * @method getAsInt
   * @param {string} cvar
   * @returns {number}
   */
  static getAsInt(cvar) {
    const result = __internal_omp.Config.GetAsInt(cvar);
    return result.ret;
  }

  /**
   * @method getAsFloat
   * @param {string} cvar
   * @returns {number}
   */
  static getAsFloat(cvar) {
    const result = __internal_omp.Config.GetAsFloat(cvar);
    return result.ret;
  }

  /**
   * @method getAsString
   * @param {string} cvar
   * @returns {{ret: boolean, output: string}} return object
   */
  static getAsString(cvar) {
    const result = __internal_omp.Config.GetAsString(cvar);
    return result;
  }
}

export default Config;
