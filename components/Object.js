/**
 * Object class
 */
class Object {
  /**
   * @var ptr
   * @description Object pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description Object ID
   * @type {number|null}
   * @private
   */
  #id = null;

  /**
   * @constructor
   * @param {number} modelidOrId
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {number} drawDistance
   * @throws Will throw an error if the object creation fails
   */
  constructor(
    modelidOrId,
    x,
    y,
    z,
    rotationX,
    rotationY,
    rotationZ,
    drawDistance
  ) {
    if (x === undefined && y === undefined) {
      const result = __internal_omp.Object.FromID(modelidOrId);
      if (result.ret === 0) {
        throw new Error("Failed to retrieve object");
      }

      this.#ptr = result.ret;
      this.#id = modelidOrId;
      return;
    }

    const result = __internal_omp.Object.Create(
      modelidOrId,
      x,
      y,
      z,
      rotationX,
      rotationY,
      rotationZ,
      drawDistance
    );
    if (result.ret === 0) {
      throw new Error("Failed to create object");
    }

    this.#ptr = result.ret;
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the object retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
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
   * @description get object pointer
   * @returns {number|null} object pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get object id
   * @returns {number|null} object id
   */
  getID() {
    return this.#id;
  }

  /**
   * @method attachToVehicle
   * @param {Vehicle} vehicle
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  attachToVehicle(
    vehicle,
    offsetX,
    offsetY,
    offsetZ,
    rotationX,
    rotationY,
    rotationZ
  ) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.AttachToVehicle(
      this.#ptr,
      vehicle.getPtr(),
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method attachToObject
   * @param {Object} objAttachedTo
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {boolean} syncRotation
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  attachToObject(
    objAttachedTo,
    offsetX,
    offsetY,
    offsetZ,
    rotationX,
    rotationY,
    rotationZ,
    syncRotation
  ) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.AttachToObject(
      this.#ptr,
      objAttachedTo.getPtr(),
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ,
      syncRotation
    );
    return result.ret;
  }

  /**
   * @method attachToPlayer
   * @param {Player} player
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  attachToPlayer(
    player,
    offsetX,
    offsetY,
    offsetZ,
    rotationX,
    rotationY,
    rotationZ
  ) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.AttachToPlayer(
      this.#ptr,
      player.getPtr(),
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setPos(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.SetPos(this.#ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getPos() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetPos(this.#ptr);
    return result;
  }

  /**
   * @method setRot
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setRot(rotationX, rotationY, rotationZ) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.SetRot(
      this.#ptr,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method getRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getRot() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetRot(this.#ptr);
    return result;
  }

  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getModel() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetModel(this.#ptr);
    return result.ret;
  }

  /**
   * @method setNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setNoCameraCollision() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.SetNoCameraCollision(this.#ptr);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isValid() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.IsValid(this.#ptr);
    return result.ret;
  }

  /**
   * @method move
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} speed
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  move(x, y, z, speed, rotationX, rotationY, rotationZ) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.Move(
      this.#ptr,
      x,
      y,
      z,
      speed,
      rotationX,
      rotationY,
      rotationZ
    );
    return result.ret;
  }

  /**
   * @method stop
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  stop() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.Stop(this.#ptr);
    return result.ret;
  }

  /**
   * @method isMoving
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isMoving() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.IsMoving(this.#ptr);
    return result.ret;
  }

  /**
   * @method beginEditing
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  beginEditing(player) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.BeginEditing(
      player.getPtr(),
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method beginSelecting
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  static beginSelecting(player) {
    const result = __internal_omp.Object.BeginSelecting(player.getPtr());
    return result.ret;
  }

  /**
   * @method endEditing
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  static endEditing(player) {
    const result = __internal_omp.Object.EndEditing(player.getPtr());
    return result.ret;
  }

  /**
   * @method setMaterial
   * @param {number} materialIndex
   * @param {number} modelId
   * @param {string} textureLibrary
   * @param {string} textureName
   * @param {number} materialColor
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setMaterial(
    materialIndex,
    modelId,
    textureLibrary,
    textureName,
    materialColor
  ) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.SetMaterial(
      this.#ptr,
      materialIndex,
      modelId,
      textureLibrary,
      textureName,
      materialColor
    );
    return result.ret;
  }

  /**
   * @method setMaterialText
   * @param {string} text
   * @param {number} materialIndex
   * @param {number} materialSize
   * @param {string} fontface
   * @param {number} fontsize
   * @param {boolean} bold
   * @param {number} fontColor
   * @param {number} backgroundColor
   * @param {number} textalignment
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setMaterialText(
    text,
    materialIndex,
    materialSize,
    fontface,
    fontsize,
    bold,
    fontColor,
    backgroundColor,
    textalignment
  ) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.SetMaterialText(
      this.#ptr,
      text,
      materialIndex,
      materialSize,
      fontface,
      fontsize,
      bold,
      fontColor,
      backgroundColor,
      textalignment
    );
    return result.ret;
  }

  /**
   * @method setDefaultCameraCollision
   * @param {boolean} disable
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setDefaultCameraCollision(disable) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.SetDefaultCameraCollision(
      this.#ptr,
      disable
    );
    return result.ret;
  }

  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getDrawDistance() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetDrawDistance(this.#ptr);
    return result.ret;
  }

  /**
   * @method getMoveSpeed
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getMoveSpeed() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetMoveSpeed(this.#ptr);
    return result.ret;
  }

  /**
   * @method getMovingTargetPos
   * @returns {{ret: boolean, targetX: number,targetY: number,targetZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMovingTargetPos() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetMovingTargetPos(this.#ptr);
    return result;
  }

  /**
   * @method getMovingTargetRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMovingTargetRot() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetMovingTargetRot(this.#ptr);
    return result;
  }

  /**
   * @method getAttachedData
   * @returns {{ret: boolean, parentVehicle: number,parentObject: number,parentPlayer: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getAttachedData() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetAttachedData(this.#ptr);
    return result;
  }

  /**
   * @method getAttachedOffset
   * @returns {{ret: boolean, offsetX: number,offsetY: number,offsetZ: number,rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getAttachedOffset() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetAttachedOffset(this.#ptr);
    return result;
  }

  /**
   * @method getSyncRotation
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  getSyncRotation() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetSyncRotation(this.#ptr);
    return result.ret;
  }

  /**
   * @method isMaterialSlotUsed
   * @param {number} materialIndex
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isMaterialSlotUsed(materialIndex) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.IsMaterialSlotUsed(
      this.#ptr,
      materialIndex
    );
    return result.ret;
  }

  /**
   * @method getMaterial
   * @param {number} materialIndex
   * @returns {{ret: boolean, modelid: number,textureLibrary: string,textureName: string,materialColor: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMaterial(materialIndex) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetMaterial(this.#ptr, materialIndex);
    return result;
  }

  /**
   * @method getMaterialText
   * @param {number} materialIndex
   * @returns {{ret: boolean, text: string,materialSize: number,fontFace: string,fontSize: number,bold: boolean,fontColor: number,backgroundColor: number,textAlignment: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMaterialText(materialIndex) {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.GetMaterialText(
      this.#ptr,
      materialIndex
    );
    return result;
  }

  /**
   * @method isObjectNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isObjectNoCameraCollision() {
    if (!this.#ptr) {
      throw new Error("Object instance is not valid");
    }

    const result = __internal_omp.Object.IsObjectNoCameraCollision(this.#ptr);
    return result.ret;
  }

  /**
   * @method getType
   * @param {Player} player
   * @param {number} objectid
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  static getType(player, objectid) {
    const result = __internal_omp.Object.GetType(player.getPtr(), objectid);
    return result.ret;
  }
}

export default Object;
