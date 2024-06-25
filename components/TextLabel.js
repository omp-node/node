/**
 * TextLabel class
 */
class TextLabel {
  /**
   * @var ptr
   * @description TextLabel pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description TextLabel ID
   * @type {number|null}
   * @private
   */
  #id = null;

  /**
   * @constructor
   * @param {string} textOrId
   * @param {number} color
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} drawDistance
   * @param {number} virtualWorld
   * @param {boolean} los
   * @throws Will throw an error if the textLabel creation fails
   */
  constructor(textOrId, color, x, y, z, drawDistance, virtualWorld, los) {
    if (color === undefined && x === undefined) {
      const result = __internal_omp.TextLabel.FromID(textOrId);
      if (result.ret === 0) {
        throw new Error("Failed to retrieve textLabel");
      }

      this.#ptr = BigInt(result.ret);
      this.#id = textOrId;
      return;
    }

    const result = __internal_omp.TextLabel.Create(
      textOrId,
      color,
      x,
      y,
      z,
      drawDistance,
      virtualWorld,
      los
    );
    if (result.ret === 0) {
      throw new Error("Failed to create textLabel");
    }

    this.#ptr = BigInt(result.ret);
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the textLabel retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
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
   * @description get textLabel pointer
   * @returns {number|null} textLabel pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get textLabel id
   * @returns {number|null} textLabel id
   */
  getID() {
    return this.#id;
  }

  /**
   * @method attachToPlayer
   * @param {Player} player
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  attachToPlayer(player, offsetX, offsetY, offsetZ) {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.AttachToPlayer(
      this.#ptr,
      player.getPtr(),
      offsetX,
      offsetY,
      offsetZ
    );
    return result.ret;
  }

  /**
   * @method attachToVehicle
   * @param {Vehicle} vehicle
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  attachToVehicle(vehicle, offsetX, offsetY, offsetZ) {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.AttachToVehicle(
      this.#ptr,
      vehicle.getPtr(),
      offsetX,
      offsetY,
      offsetZ
    );
    return result.ret;
  }

  /**
   * @method updateText
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  updateText(color, text) {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.UpdateText(this.#ptr, color, text);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  isValid() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.IsValid(this.#ptr);
    return result.ret;
  }

  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  isStreamedIn(player) {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.IsStreamedIn(
      player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getText
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getText() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.GetText(this.#ptr);
    return result;
  }

  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getColor() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.GetColor(this.#ptr);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getPos() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.GetPos(this.#ptr);
    return result;
  }

  /**
   * @method setDrawDistance
   * @param {number} distance
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setDrawDistance(distance) {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.SetDrawDistance(
      this.#ptr,
      distance
    );
    return result.ret;
  }

  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getDrawDistance() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.GetDrawDistance(this.#ptr);
    return result.ret;
  }

  /**
   * @method getLOS
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  getLOS() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.GetLOS(this.#ptr);
    return result.ret;
  }

  /**
   * @method setLOS
   * @param {boolean} status
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setLOS(status) {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.SetLOS(this.#ptr, status);
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getVirtualWorld() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.GetVirtualWorld(this.#ptr);
    return result.ret;
  }

  /**
   * @method setVirtualWorld
   * @param {number} world
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setVirtualWorld(world) {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.SetVirtualWorld(this.#ptr, world);
    return result.ret;
  }

  /**
   * @method getAttachedData
   * @returns {{ret: boolean, attached_player: number,attached_vehicle: number}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getAttachedData() {
    if (!this.#ptr) {
      throw new Error("TextLabel instance is not valid");
    }

    const result = __internal_omp.TextLabel.GetAttachedData(this.#ptr);
    return result;
  }
}

export default TextLabel;
