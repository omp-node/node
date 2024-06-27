import { Player } from "./index";
import { internal_omp } from "../globals";

/**
 * Recording class
 */
export default class Recording {
  /**
   * @method start
   * @param {Player} player
   * @param {number} type
   * @param {string} file
   * @returns {boolean}
   */
  static start(player: Player, type: number, file: string): boolean {
    const result = internal_omp.Recording.Start(player.getPtr(), type, file);
    return result.ret;
  }

  /**
   * @method stop
   * @param {Player} player
   * @returns {boolean}
   */
  static stop(player: Player): boolean {
    const result = internal_omp.Recording.Stop(player.getPtr());
    return result.ret;
  }
}
