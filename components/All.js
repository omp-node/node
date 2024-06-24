/**
 * All class
 */
class All {
  /**
   * @method sendClientMessage
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   */
  static sendClientMessage(color, text) {
    const result = __internal_omp.All.SendClientMessage(color, text);
    return result.ret;
  }

  /**
   * @method createExplosion
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} type
   * @param {number} radius
   * @returns {boolean}
   */
  static createExplosion(x, y, z, type, radius) {
    const result = __internal_omp.All.CreateExplosion(x, y, z, type, radius);
    return result.ret;
  }

  /**
   * @method sendDeathMessage
   * @param {Player} killer
   * @param {Player} killee
   * @param {number} weapon
   * @returns {boolean}
   */
  static sendDeathMessage(killer, killee, weapon) {
    const result = __internal_omp.All.SendDeathMessage(killer.getPtr(), killee.getPtr(), weapon);
    return result.ret;
  }

  /**
   * @method enableStuntBonus
   * @param {boolean} enable
   * @returns {boolean}
   */
  static enableStuntBonus(enable) {
    const result = __internal_omp.All.EnableStuntBonus(enable);
    return result.ret;
  }
}

export default All;
