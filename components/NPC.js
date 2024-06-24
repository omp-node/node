/**
 * NPC class
 */
class NPC {
  /**
   * @method connect
   * @param {string} name
   * @param {string} script
   * @returns {boolean}
   */
  static connect(name, script) {
    const result = __internal_omp.NPC.Connect(name, script);
    return result.ret;
  }
}

export default NPC;
