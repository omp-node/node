/**
 * Menu class
 */
class Menu {
  /**
   * @var ptr
   * @description Menu pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description Menu ID
   * @type {number|null}
   * @private
   */
  #id = null;

  /**
   * @constructor
   * @param {string} titleOrId
   * @param {number} columns
   * @param {number} x
   * @param {number} y
   * @param {number} column1Width
   * @param {number} column2Width
   * @throws Will throw an error if the menu creation fails
   */
  constructor(titleOrId, columns, x, y, column1Width, column2Width) {
    if (columns === undefined && x === undefined) {
      const result = __internal_omp.Menu.FromID(titleOrId);
      if (result.ret === 0) {
        throw new Error("Failed to retrieve menu");
      }

      this.#ptr = result.ret;
      this.#id = titleOrId;
      return;
    }

    const result = __internal_omp.Menu.Create(
      titleOrId,
      columns,
      x,
      y,
      column1Width,
      column2Width
    );
    if (result.ret === 0) {
      throw new Error("Failed to create menu");
    }

    this.#ptr = result.ret;
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the menu retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Actor.Destroy(this.#ptr);
    if (result.ret) {
      this.#ptr = null;
      this.#id = null;
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method getPtr
   * @description get menu pointer
   * @returns {number|null} menu pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get menu id
   * @returns {number|null} menu id
   */
  getID() {
    return this.#id;
  }

  /**
   * @method addItem
   * @param {number} column
   * @param {string} text
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  addItem(column, text) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.AddItem(this.#ptr, column, text);
    return result.ret;
  }

  /**
   * @method setColumnHeader
   * @param {number} column
   * @param {string} headerTitle
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  setColumnHeader(column, headerTitle) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.SetColumnHeader(
      this.#ptr,
      column,
      headerTitle
    );
    return result.ret;
  }

  /**
   * @method showForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  showForPlayer(player) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.ShowForPlayer(
      this.#ptr,
      player.getPtr()
    );
    return result.ret;
  }

  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  hideForPlayer(player) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.HideForPlayer(
      this.#ptr,
      player.getPtr()
    );
    return result.ret;
  }

  /**
   * @method disable
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  disable() {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.Disable(this.#ptr);
    return result.ret;
  }

  /**
   * @method disableRow
   * @param {number} row
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  disableRow(row) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.DisableRow(this.#ptr, row);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isValid() {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.IsValid(this.#ptr);
    return result.ret;
  }

  /**
   * @method isDisabled
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isDisabled() {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.IsDisabled(this.#ptr);
    return result.ret;
  }

  /**
   * @method isRowDisabled
   * @param {number} row
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isRowDisabled(row) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.IsRowDisabled(this.#ptr, row);
    return result.ret;
  }

  /**
   * @method getColumns
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  getColumns() {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.GetColumns(this.#ptr);
    return result.ret;
  }

  /**
   * @method getItems
   * @param {number} column
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  getItems(column) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.GetItems(this.#ptr, column);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getPos() {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.GetPos(this.#ptr);
    return result;
  }

  /**
   * @method getColumnWidth
   * @returns {{ret: boolean, column1Width: number,column2Width: number}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getColumnWidth() {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.GetColumnWidth(this.#ptr);
    return result;
  }

  /**
   * @method getColumnHeader
   * @param {number} column
   * @returns {{ret: boolean, header: string}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getColumnHeader(column) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.GetColumnHeader(this.#ptr, column);
    return result;
  }

  /**
   * @method getItem
   * @param {number} column
   * @param {number} row
   * @returns {{ret: boolean, item: string}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getItem(column, row) {
    if (!this.#ptr) {
      throw new Error("Menu instance is not valid");
    }

    const result = __internal_omp.Menu.GetItem(this.#ptr, column, row);
    return result;
  }
}

export default Menu;
