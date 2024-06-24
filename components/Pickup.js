/**
 * Pickup class
 */
class Pickup {
  /**
   * @var ptr
   * @description Pickup pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description Pickup ID
   * @type {number|null}
   * @private
   */
  #id = null;

  /**
   * @constructor
   * @param {number} modelOrId
   * @param {number} type
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} virtualWorld
   * @throws Will throw an error if the pickup creation fails
   */
  constructor(modelOrId, type, x, y, z, virtualWorld) {
    if (type === undefined && x === undefined) {
      const result = __internal_omp.Pickup.FromID(modelOrId);
      if (result.ret === 0) {
        throw new Error("Failed to retrieve pickup");
      }

      this.#ptr = result.ret;
      this.#id = modelOrId;
      return;
    }

    const result = __internal_omp.Pickup.Create(
      modelOrId,
      type,
      x,
      y,
      z,
      virtualWorld
    );
    if (result.ret === 0) {
      throw new Error("Failed to create pickup");
    }

    this.#ptr = result.ret;
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the pickup retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
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
   * @description get pickup pointer
   * @returns {number|null} pickup pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get pickup id
   * @returns {number|null} pickup id
   */
  getID() {
    return this.#id;
  }

  /**
   * @method addStatic
   * @param {number} model
   * @param {number} type
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} virtualWorld
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  addStatic(model, type, x, y, z, virtualWorld) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.AddStatic(
      this.#ptr,
      model,
      type,
      x,
      y,
      z,
      virtualWorld
    );
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isValid() {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.IsValid(this.#ptr);
    return result.ret;
  }

  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isStreamedIn(player) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.IsStreamedIn(
      player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the pickup is invalid
   */
  getPos() {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.GetPos(this.#ptr);
    return result;
  }

  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getModel() {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.GetModel(this.#ptr);
    return result.ret;
  }

  /**
   * @method getType
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getType() {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.GetType(this.#ptr);
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getVirtualWorld() {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.GetVirtualWorld(this.#ptr);
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setPos(x, y, z, update) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.SetPos(this.#ptr, x, y, z, update);
    return result.ret;
  }

  /**
   * @method setModel
   * @param {number} model
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setModel(model, update) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.SetModel(this.#ptr, model, update);
    return result.ret;
  }

  /**
   * @method setType
   * @param {number} type
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setType(type, update) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.SetType(this.#ptr, type, update);
    return result.ret;
  }

  /**
   * @method setVirtualWorld
   * @param {number} virtualworld
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setVirtualWorld(virtualworld) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.SetVirtualWorld(
      this.#ptr,
      virtualworld
    );
    return result.ret;
  }

  /**
   * @method showForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  showForPlayer(player) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.ShowForPlayer(
      player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  hideForPlayer(player) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.HideForPlayer(
      player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method isHiddenForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isHiddenForPlayer(player) {
    if (!this.#ptr) {
      throw new Error("Pickup instance is not valid");
    }

    const result = __internal_omp.Pickup.IsHiddenForPlayer(
      player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }
}

export default Pickup;
