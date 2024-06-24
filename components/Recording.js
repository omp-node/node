/**
 * Recording class
 */
class Recording {
  /**
   * @method start
   * @param {Player} player
   * @param {number} type
   * @param {string} file
   * @returns {boolean}
   */
  static start(player, type, file) {
    const result = __internal_omp.Recording.Start(player.getPtr(), type, file);
    return result.ret;
  }

  /**
   * @method stop
   * @param {Player} player
   * @returns {boolean}
   */
  static stop(player) {
    const result = __internal_omp.Recording.Stop(player.getPtr());
    return result.ret;
  }
}

export default Recording;
