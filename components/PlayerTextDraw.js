/**
 * PlayerTextDraw class
 */
class PlayerTextDraw {
  /**
   * @var ptr
   * @description PlayerTextDraw pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description PlayerTextDraw ID
   * @type {number|null}
   * @private
   */
  #id = null;

  /**
   * @var player
   * @description Player for this per player entity
   * @type {Player|null}
   * @private
   */
  #player = null;

  /**
   * @constructor
   * @param {Player} player
   * @param {number} xOrId
   * @param {number} y
   * @param {string} text
   * @throws Will throw an error if the playerTextDraw creation fails
   */
  constructor(player, xOrId, y, text) {
    if (y === undefined && text === undefined) {
      const result = __internal_omp.PlayerTextDraw.FromID(player.getPtr(), xOrId);
      if (result.ret === 0) {
        throw new Error("Failed to retrieve playerTextDraw");
      }

      this.#ptr = result.ret;
      this.#id = xOrId;
      this.#player = player;
      return;
    }

    const result = __internal_omp.PlayerTextDraw.Create(player, xOrId, y, text);
    if (result.ret === 0) {
      throw new Error("Failed to create playerTextDraw");
    }

    this.#player = player;
    this.#ptr = result.ret;
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the playerTextDraw retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("PlayerTextDraw instance is not valid");
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
   * @method getPlayer
   * @description get entity's player
   * @returns {Player|null} playerTextDraw of current entity
   */
  getPlayer() {
    return this.#player;
  }

  /**
   * @method getPtr
   * @description get playerTextDraw pointer
   * @returns {number|null} playerTextDraw pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get playerTextDraw id
   * @returns {number|null} playerTextDraw id
   */
  getID() {
    return this.#id;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isValid() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.IsValid(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method isVisible
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isVisible() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.IsVisible(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method letterSize
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  letterSize(x, y) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.LetterSize(
      this.#player.getPtr(),
      this.#ptr,
      x,
      y
    );
    return result.ret;
  }

  /**
   * @method textSize
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  textSize(x, y) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.TextSize(
      this.#player.getPtr(),
      this.#ptr,
      x,
      y
    );
    return result.ret;
  }

  /**
   * @method alignment
   * @param {number} alignment
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  alignment(alignment) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.Alignment(
      this.#player.getPtr(),
      this.#ptr,
      alignment
    );
    return result.ret;
  }

  /**
   * @method color
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  color(color) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.Color(
      this.#player.getPtr(),
      this.#ptr,
      color
    );
    return result.ret;
  }

  /**
   * @method useBox
   * @param {boolean} use
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  useBox(use) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.UseBox(
      this.#player.getPtr(),
      this.#ptr,
      use
    );
    return result.ret;
  }

  /**
   * @method boxColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  boxColor(color) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.BoxColor(
      this.#player.getPtr(),
      this.#ptr,
      color
    );
    return result.ret;
  }

  /**
   * @method setShadow
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setShadow(size) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetShadow(
      this.#player.getPtr(),
      this.#ptr,
      size
    );
    return result.ret;
  }

  /**
   * @method setOutline
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setOutline(size) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetOutline(
      this.#player.getPtr(),
      this.#ptr,
      size
    );
    return result.ret;
  }

  /**
   * @method backgroundColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  backgroundColor(color) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.BackgroundColor(
      this.#player.getPtr(),
      this.#ptr,
      color
    );
    return result.ret;
  }

  /**
   * @method font
   * @param {number} font
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  font(font) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.Font(
      this.#player.getPtr(),
      this.#ptr,
      font
    );
    return result.ret;
  }

  /**
   * @method setProportional
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setProportional(set) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetProportional(
      this.#player.getPtr(),
      this.#ptr,
      set
    );
    return result.ret;
  }

  /**
   * @method setSelectable
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setSelectable(set) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetSelectable(
      this.#player.getPtr(),
      this.#ptr,
      set
    );
    return result.ret;
  }

  /**
   * @method show
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  show() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.Show(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method hide
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  hide() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.Hide(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method setString
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setString(text) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetString(
      this.#player.getPtr(),
      this.#ptr,
      text
    );
    return result.ret;
  }

  /**
   * @method setPreviewModel
   * @param {number} model
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewModel(model) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetPreviewModel(
      this.#player.getPtr(),
      this.#ptr,
      model
    );
    return result.ret;
  }

  /**
   * @method setPreviewRot
   * @param {number} rx
   * @param {number} ry
   * @param {number} rz
   * @param {number} zoom
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewRot(rx, ry, rz, zoom) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetPreviewRot(
      this.#player.getPtr(),
      this.#ptr,
      rx,
      ry,
      rz,
      zoom
    );
    return result.ret;
  }

  /**
   * @method setPreviewVehCol
   * @param {number} color1
   * @param {number} color2
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewVehCol(color1, color2) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetPreviewVehCol(
      this.#player.getPtr(),
      this.#ptr,
      color1,
      color2
    );
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPos(x, y) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.SetPos(
      this.#player.getPtr(),
      this.#ptr,
      x,
      y
    );
    return result.ret;
  }

  /**
   * @method getString
   * @returns {{ret: boolean, text: string}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getString() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetString(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getLetterSize
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getLetterSize() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetLetterSize(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getTextSize
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getTextSize() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetTextSize(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPos() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetPos(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getColor() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetColor(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getBoxColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getBoxColor() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetBoxColor(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getBackgroundColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getBackgroundColor() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetBackgroundColor(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getShadow
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getShadow() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetShadow(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getOutline
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getOutline() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetOutline(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getFont
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getFont() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetFont(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method isBox
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isBox() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.IsBox(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method isProportional
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isProportional() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.IsProportional(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method isSelectable
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isSelectable() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.IsSelectable(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getAlignment
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getAlignment() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetAlignment(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getPreviewModel
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewModel() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetPreviewModel(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getPreviewRot
   * @returns {{ret: boolean, rx: number,ry: number,rz: number,zoom: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewRot() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetPreviewRot(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getPreviewVehColor
   * @returns {{ret: boolean, color1: number,color2: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewVehColor() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextDraw instance is not valid");
    }

    const result = __internal_omp.PlayerTextDraw.GetPreviewVehColor(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }
}

export default PlayerTextDraw;
