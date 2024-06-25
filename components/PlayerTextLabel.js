/**
 * PlayerTextLabel class
 */
class PlayerTextLabel {
  /**
   * @var ptr
   * @description PlayerTextLabel pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description PlayerTextLabel ID
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
   * @param {string} textOrId
   * @param {number} color
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} drawDistance
   * @param {Player} attachedPlayer
   * @param {Player} attachedVehicle
   * @param {boolean} los
   * @throws Will throw an error if the playerTextLabel creation fails
   */
  constructor(
    player,
    textOrId,
    color,
    x,
    y,
    z,
    drawDistance,
    attachedPlayer,
    attachedVehicle,
    los
  ) {
    if (color === undefined && x === undefined) {
      const result = __internal_omp.PlayerTextLabel.FromID(
        player.getPtr(),
        textOrId
      );
      if (result.ret === 0) {
        throw new Error("Failed to retrieve playerTextLabel");
      }

      this.#ptr = BigInt(result.ret);
      this.#id = textOrId;
      this.#player = player;
      return;
    }

    const result = __internal_omp.PlayerTextLabel.Create(
      player,
      textOrId,
      color,
      x,
      y,
      z,
      drawDistance,
      attachedPlayer,
      attachedVehicle,
      los
    );
    if (result.ret === 0) {
      throw new Error("Failed to create playerTextLabel");
    }

    this.#player = player;
    this.#ptr = BigInt(result.ret);
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the playerTextLabel retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("PlayerTextLabel instance is not valid");
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
   * @returns {Player|null} playerTextLabel of current entity
   */
  getPlayer() {
    return this.#player;
  }

  /**
   * @method getPtr
   * @description get playerTextLabel pointer
   * @returns {number|null} playerTextLabel pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get playerTextLabel id
   * @returns {number|null} playerTextLabel id
   */
  getID() {
    return this.#id;
  }

  /**
   * @method updateText
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  updateText(color, text) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.UpdateText(
      this.#player.getPtr(),
      this.#ptr,
      color,
      text
    );
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {{ret: boolean, valid: boolean}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  isValid() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.IsValid(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getText
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getText() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.GetText(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getColor
   * @returns {{ret: boolean, color: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getColor() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.GetColor(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getPos() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.GetPos(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }

  /**
   * @method setDrawDistance
   * @param {number} distance
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  setDrawDistance(distance) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.SetDrawDistance(
      this.#player.getPtr(),
      this.#ptr,
      distance
    );
    return result.ret;
  }

  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getDrawDistance() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.GetDrawDistance(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getLOS
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getLOS() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.GetLOS(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method setLOS
   * @param {boolean} status
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  setLOS(status) {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.SetLOS(
      this.#player.getPtr(),
      this.#ptr,
      status
    );
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getVirtualWorld() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.GetVirtualWorld(
      this.#player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getAttachedData
   * @returns {{ret: boolean, attached_player: number,attached_vehicle: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getAttachedData() {
    if (!this.#ptr || !this.#player) {
      throw new Error("PlayerTextLabel instance is not valid");
    }

    const result = __internal_omp.PlayerTextLabel.GetAttachedData(
      this.#player.getPtr(),
      this.#ptr
    );
    return result;
  }
}

export default PlayerTextLabel;
