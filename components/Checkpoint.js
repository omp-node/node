/**
 * Checkpoint class
 */
class Checkpoint {
  /**
   * @method set
   * @param {Player} player
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} radius
   * @returns {boolean}
   */
  static set(player, x, y, z, radius) {
    const result = __internal_omp.Checkpoint.Set(player.getPtr(), x, y, z, radius);
    return result.ret;
  }

  /**
   * @method disable
   * @param {Player} player
   * @returns {boolean}
   */
  static disable(player) {
    const result = __internal_omp.Checkpoint.Disable(player.getPtr());
    return result.ret;
  }

  /**
   * @method isPlayerIn
   * @param {Player} player
   * @returns {boolean}
   */
  static isPlayerIn(player) {
    const result = __internal_omp.Checkpoint.IsPlayerIn(player.getPtr());
    return result.ret;
  }

  /**
   * @method isActive
   * @param {Player} player
   * @returns {boolean}
   */
  static isActive(player) {
    const result = __internal_omp.Checkpoint.IsActive(player.getPtr());
    return result.ret;
  }

  /**
   * @method get
   * @param {Player} player
   * @returns {{ret: boolean, x: number,y: number,z: number,radius: number}} return object
   */
  static get(player) {
    const result = __internal_omp.Checkpoint.Get(player.getPtr());
    return result;
  }
}

export default Checkpoint;
