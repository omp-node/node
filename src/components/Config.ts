import { internal_omp } from "../globals";

/**
 * Config class
 */
export default class Config {
  /**
   * @method getAsBool
   * @param {string} cvar
   * @returns {boolean}
   */
  static getAsBool(cvar: string): boolean {
    const result = internal_omp.Config.GetAsBool(cvar);
    return result.ret;
  }

  /**
   * @method getAsInt
   * @param {string} cvar
   * @returns {number}
   */
  static getAsInt(cvar: string): number {
    const result = internal_omp.Config.GetAsInt(cvar);
    return result.ret;
  }

  /**
   * @method getAsFloat
   * @param {string} cvar
   * @returns {number}
   */
  static getAsFloat(cvar: string): number {
    const result = internal_omp.Config.GetAsFloat(cvar);
    return result.ret;
  }

  /**
   * @method getAsString
   * @param {string} cvar
   * @returns {{ret: boolean, output: string}} return object
   */
  static getAsString(cvar: string): { ret: boolean; output: string } {
    const result = internal_omp.Config.GetAsString(cvar);
    return result;
  }
}
