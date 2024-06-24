/**
 * Dialog class
 */
class Dialog {
  /**
   * @method show
   * @param {Player} player
   * @param {number} dialog
   * @param {number} style
   * @param {string} title
   * @param {string} body
   * @param {string} button1
   * @param {string} button2
   * @returns {boolean}
   */
  static show(player, dialog, style, title, body, button1, button2) {
    const result = __internal_omp.Dialog.Show(player.getPtr(), dialog, style, title, body, button1, button2);
    return result.ret;
  }

  /**
   * @method hide
   * @param {Player} player
   * @returns {boolean}
   */
  static hide(player) {
    const result = __internal_omp.Dialog.Hide(player.getPtr());
    return result.ret;
  }
}

export default Dialog;
