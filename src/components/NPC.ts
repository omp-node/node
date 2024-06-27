import { internal_omp } from "../globals";

/**
 * NPC class
 */
export default class NPC {
  /**
   * @method connect
   * @param {string} name
   * @param {string} script
   * @returns {boolean}
   */
  static connect(name: string, script: string): boolean {
    const result = internal_omp.NPC.Connect(name, script);
    return result.ret;
  }
}
