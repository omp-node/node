/**
 * Vehicle class
 */
class Vehicle {
  /**
   * @var ptr
   * @description Vehicle pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description Vehicle ID
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
   * @param {number} rotation
   * @param {number} color1
   * @param {number} color2
   * @param {number} respawnDelay
   * @param {boolean} addSiren
   * @throws Will throw an error if the vehicle creation fails
   */
  constructor(
    modelidOrId,
    x,
    y,
    z,
    rotation,
    color1,
    color2,
    respawnDelay,
    addSiren
  ) {
    if (x === undefined && y === undefined) {
      const result = __internal_omp.Vehicle.FromID(modelidOrId);
      if (result.ret === 0) {
        throw new Error("Failed to retrieve vehicle");
      }

      this.#ptr = result.ret;
      this.#id = modelidOrId;
      return;
    }

    const result = __internal_omp.Vehicle.Create(
      modelidOrId,
      x,
      y,
      z,
      rotation,
      color1,
      color2,
      respawnDelay,
      addSiren
    );
    if (result.ret === 0) {
      throw new Error("Failed to create vehicle");
    }

    this.#ptr = result.ret;
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the vehicle retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
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
   * @description get vehicle pointer
   * @returns {number|null} vehicle pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get vehicle id
   * @returns {number|null} vehicle id
   */
  getID() {
    return this.#id;
  }

  /**
   * @method getMaxPassengerSeats
   * @param {number} modelid
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getMaxPassengerSeats(modelid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetMaxPassengerSeats(
      this.#ptr,
      modelid
    );
    return result.ret;
  }

  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isStreamedIn(player) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.IsStreamedIn(
      this.#ptr,
      player.getPtr()
    );
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getPos() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetPos(this.#ptr);
    return result;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setPos(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetPos(this.#ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method getZAngle
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getZAngle() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetZAngle(this.#ptr);
    return result.ret;
  }

  /**
   * @method getRotationQuat
   * @returns {{ret: boolean, w: number,x: number,y: number,z: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getRotationQuat() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetRotationQuat(this.#ptr);
    return result;
  }

  /**
   * @method getDistanceFromPoint
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getDistanceFromPoint(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetDistanceFromPoint(
      this.#ptr,
      x,
      y,
      z
    );
    return result.ret;
  }

  /**
   * @method setZAngle
   * @param {number} angle
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setZAngle(angle) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetZAngle(this.#ptr, angle);
    return result.ret;
  }

  /**
   * @method setParamsForPlayer
   * @param {Player} player
   * @param {number} objective
   * @param {number} doors
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsForPlayer(player, objective, doors) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetParamsForPlayer(
      this.#ptr,
      player.getPtr(),
      objective,
      doors
    );
    return result.ret;
  }

  /**
   * @method useManualEngineAndLights
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  useManualEngineAndLights() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.UseManualEngineAndLights(this.#ptr);
    return result.ret;
  }

  /**
   * @method setParamsEx
   * @param {number} engine
   * @param {number} lights
   * @param {number} alarm
   * @param {number} doors
   * @param {number} bonnet
   * @param {number} boot
   * @param {number} objective
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsEx(engine, lights, alarm, doors, bonnet, boot, objective) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetParamsEx(
      this.#ptr,
      engine,
      lights,
      alarm,
      doors,
      bonnet,
      boot,
      objective
    );
    return result.ret;
  }

  /**
   * @method getParamsEx
   * @returns {{ret: boolean, engine: number,lights: number,alarm: number,doors: number,bonnet: number,boot: number,objective: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getParamsEx() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetParamsEx(this.#ptr);
    return result;
  }

  /**
   * @method getParamsSirenState
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getParamsSirenState() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetParamsSirenState(this.#ptr);
    return result.ret;
  }

  /**
   * @method setParamsCarDoors
   * @param {number} frontLeft
   * @param {number} frontRight
   * @param {number} rearLeft
   * @param {number} rearRight
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsCarDoors(frontLeft, frontRight, rearLeft, rearRight) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetParamsCarDoors(
      this.#ptr,
      frontLeft,
      frontRight,
      rearLeft,
      rearRight
    );
    return result.ret;
  }

  /**
   * @method getParamsCarDoors
   * @returns {{ret: boolean, frontLeft: number,frontRight: number,rearLeft: number,rearRight: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getParamsCarDoors() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetParamsCarDoors(this.#ptr);
    return result;
  }

  /**
   * @method setParamsCarWindows
   * @param {number} frontLeft
   * @param {number} frontRight
   * @param {number} rearLeft
   * @param {number} rearRight
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsCarWindows(frontLeft, frontRight, rearLeft, rearRight) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetParamsCarWindows(
      this.#ptr,
      frontLeft,
      frontRight,
      rearLeft,
      rearRight
    );
    return result.ret;
  }

  /**
   * @method getParamsCarWindows
   * @returns {{ret: boolean, frontLeft: number,frontRight: number,rearLeft: number,rearRight: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getParamsCarWindows() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetParamsCarWindows(this.#ptr);
    return result;
  }

  /**
   * @method setToRespawn
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setToRespawn() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetToRespawn(this.#ptr);
    return result.ret;
  }

  /**
   * @method linkToInterior
   * @param {number} interiorid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  linkToInterior(interiorid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.LinkToInterior(this.#ptr, interiorid);
    return result.ret;
  }

  /**
   * @method addComponent
   * @param {number} componentid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  addComponent(componentid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.AddComponent(this.#ptr, componentid);
    return result.ret;
  }

  /**
   * @method removeComponent
   * @param {number} componentid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  removeComponent(componentid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.RemoveComponent(
      this.#ptr,
      componentid
    );
    return result.ret;
  }

  /**
   * @method changeColor
   * @param {number} color1
   * @param {number} color2
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  changeColor(color1, color2) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.ChangeColor(
      this.#ptr,
      color1,
      color2
    );
    return result.ret;
  }

  /**
   * @method changePaintjob
   * @param {number} paintjobid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  changePaintjob(paintjobid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.ChangePaintjob(this.#ptr, paintjobid);
    return result.ret;
  }

  /**
   * @method setHealth
   * @param {number} health
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setHealth(health) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetHealth(this.#ptr, health);
    return result.ret;
  }

  /**
   * @method getHealth
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getHealth() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetHealth(this.#ptr);
    return result.ret;
  }

  /**
   * @method attachTrailer
   * @param {Vehicle} trailer
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  attachTrailer(trailer) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.AttachTrailer(
      this.#ptr,
      trailer.getPtr()
    );
    return result.ret;
  }

  /**
   * @method detachTrailer
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  detachTrailer() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.DetachTrailer(this.#ptr);
    return result.ret;
  }

  /**
   * @method isTrailerAttached
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isTrailerAttached() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.IsTrailerAttached(this.#ptr);
    return result.ret;
  }

  /**
   * @method getTrailer
   * @returns {Vehicle}
   * @throws Will throw an error if the vehicle is invalid
   */
  getTrailer() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetTrailer(this.#ptr);
    return result.ret;
  }

  /**
   * @method setNumberPlate
   * @param {string} numberPlate
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setNumberPlate(numberPlate) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetNumberPlate(
      this.#ptr,
      numberPlate
    );
    return result.ret;
  }

  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getModel() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetModel(this.#ptr);
    return result.ret;
  }

  /**
   * @method getComponentInSlot
   * @param {number} slot
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getComponentInSlot(slot) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetComponentInSlot(this.#ptr, slot);
    return result.ret;
  }

  /**
   * @method getComponentType
   * @param {number} componentid
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getComponentType(componentid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetComponentType(
      this.#ptr,
      componentid
    );
    return result.ret;
  }

  /**
   * @method canHaveComponent
   * @param {number} modelid
   * @param {number} componentid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  canHaveComponent(modelid, componentid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.CanHaveComponent(
      this.#ptr,
      modelid,
      componentid
    );
    return result.ret;
  }

  /**
   * @method getRandomColorPair
   * @param {number} modelid
   * @returns {{ret: boolean, color1: number,color2: number,color3: number,color4: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getRandomColorPair(modelid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetRandomColorPair(
      this.#ptr,
      modelid
    );
    return result;
  }

  /**
   * @method colorIndexToColor
   * @param {number} colorIndex
   * @param {number} alpha
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  colorIndexToColor(colorIndex, alpha) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.ColorIndexToColor(
      this.#ptr,
      colorIndex,
      alpha
    );
    return result.ret;
  }

  /**
   * @method repair
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  repair() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.Repair(this.#ptr);
    return result.ret;
  }

  /**
   * @method getVelocity
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getVelocity() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetVelocity(this.#ptr);
    return result;
  }

  /**
   * @method setVelocity
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setVelocity(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetVelocity(this.#ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method setAngularVelocity
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setAngularVelocity(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetAngularVelocity(
      this.#ptr,
      x,
      y,
      z
    );
    return result.ret;
  }

  /**
   * @method getDamageStatus
   * @returns {{ret: boolean, panels: number,doors: number,lights: number,tires: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getDamageStatus() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetDamageStatus(this.#ptr);
    return result;
  }

  /**
   * @method updateDamageStatus
   * @param {number} panels
   * @param {number} doors
   * @param {number} lights
   * @param {number} tires
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  updateDamageStatus(panels, doors, lights, tires) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.UpdateDamageStatus(
      this.#ptr,
      panels,
      doors,
      lights,
      tires
    );
    return result.ret;
  }

  /**
   * @method getModelInfo
   * @param {number} vehiclemodel
   * @param {number} infotype
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getModelInfo(vehiclemodel, infotype) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetModelInfo(
      this.#ptr,
      vehiclemodel,
      infotype
    );
    return result;
  }

  /**
   * @method setVirtualWorld
   * @param {number} virtualWorld
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setVirtualWorld(virtualWorld) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetVirtualWorld(
      this.#ptr,
      virtualWorld
    );
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getVirtualWorld() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetVirtualWorld(this.#ptr);
    return result.ret;
  }

  /**
   * @method getLandingGearState
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getLandingGearState() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetLandingGearState(this.#ptr);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isValid() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.IsValid(this.#ptr);
    return result.ret;
  }

  /**
   * @method addStatic
   * @param {number} modelid
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} angle
   * @param {number} color1
   * @param {number} color2
   * @returns {{ret: boolean, id: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  addStatic(modelid, x, y, z, angle, color1, color2) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.AddStatic(
      this.#ptr,
      modelid,
      x,
      y,
      z,
      angle,
      color1,
      color2
    );
    return result;
  }

  /**
   * @method addStaticEx
   * @param {number} modelid
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} angle
   * @param {number} color1
   * @param {number} color2
   * @param {number} respawnDelay
   * @param {boolean} addSiren
   * @returns {{ret: boolean, id: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  addStaticEx(modelid, x, y, z, angle, color1, color2, respawnDelay, addSiren) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.AddStaticEx(
      this.#ptr,
      modelid,
      x,
      y,
      z,
      angle,
      color1,
      color2,
      respawnDelay,
      addSiren
    );
    return result;
  }

  /**
   * @method enableFriendlyFire
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  enableFriendlyFire() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.EnableFriendlyFire(this.#ptr);
    return result.ret;
  }

  /**
   * @method getSpawnInfo
   * @returns {{ret: boolean, x: number,y: number,z: number,rotation: number,color1: number,color2: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getSpawnInfo() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetSpawnInfo(this.#ptr);
    return result;
  }

  /**
   * @method setSpawnInfo
   * @param {number} modelid
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rotation
   * @param {number} color1
   * @param {number} color2
   * @param {number} respawn_time
   * @param {number} interior
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setSpawnInfo(
    modelid,
    x,
    y,
    z,
    rotation,
    color1,
    color2,
    respawn_time,
    interior
  ) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetSpawnInfo(
      this.#ptr,
      modelid,
      x,
      y,
      z,
      rotation,
      color1,
      color2,
      respawn_time,
      interior
    );
    return result.ret;
  }

  /**
   * @method getModelCount
   * @param {number} modelid
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getModelCount(modelid) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetModelCount(this.#ptr, modelid);
    return result.ret;
  }

  /**
   * @method getModelsUsed
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getModelsUsed() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetModelsUsed(this.#ptr);
    return result.ret;
  }

  /**
   * @method getPaintjob
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getPaintjob() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetPaintjob(this.#ptr);
    return result.ret;
  }

  /**
   * @method getColor
   * @returns {{ret: boolean, color1: number,color2: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getColor() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetColor(this.#ptr);
    return result;
  }

  /**
   * @method getInterior
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getInterior() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetInterior(this.#ptr);
    return result.ret;
  }

  /**
   * @method getNumberPlate
   * @returns {{ret: boolean, numberPlate: string}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getNumberPlate() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetNumberPlate(this.#ptr);
    return result;
  }

  /**
   * @method setRespawnDelay
   * @param {number} respawn_delay
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setRespawnDelay(respawn_delay) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetRespawnDelay(
      this.#ptr,
      respawn_delay
    );
    return result.ret;
  }

  /**
   * @method getRespawnDelay
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getRespawnDelay() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetRespawnDelay(this.#ptr);
    return result.ret;
  }

  /**
   * @method getCab
   * @returns {Vehicle}
   * @throws Will throw an error if the vehicle is invalid
   */
  getCab() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetCab(this.#ptr);
    return result.ret;
  }

  /**
   * @method getTower
   * @returns {Vehicle}
   * @throws Will throw an error if the vehicle is invalid
   */
  getTower() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetTower(this.#ptr);
    return result.ret;
  }

  /**
   * @method getOccupiedTick
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getOccupiedTick() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetOccupiedTick(this.#ptr);
    return result.ret;
  }

  /**
   * @method getRespawnTick
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getRespawnTick() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetRespawnTick(this.#ptr);
    return result.ret;
  }

  /**
   * @method hasBeenOccupied
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  hasBeenOccupied() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.HasBeenOccupied(this.#ptr);
    return result.ret;
  }

  /**
   * @method isOccupied
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isOccupied() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.IsOccupied(this.#ptr);
    return result.ret;
  }

  /**
   * @method isDead
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isDead() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.IsDead(this.#ptr);
    return result.ret;
  }

  /**
   * @method setParamsSirenState
   * @param {boolean} siren_state
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsSirenState(siren_state) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.SetParamsSirenState(
      this.#ptr,
      siren_state
    );
    return result.ret;
  }

  /**
   * @method toggleSirenEnabled
   * @param {boolean} status
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  toggleSirenEnabled(status) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.ToggleSirenEnabled(this.#ptr, status);
    return result.ret;
  }

  /**
   * @method isSirenEnabled
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isSirenEnabled() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.IsSirenEnabled(this.#ptr);
    return result.ret;
  }

  /**
   * @method getLastDriver
   * @returns {Player}
   * @throws Will throw an error if the vehicle is invalid
   */
  getLastDriver() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetLastDriver(this.#ptr);
    return result.ret;
  }

  /**
   * @method getDriver
   * @returns {Player}
   * @throws Will throw an error if the vehicle is invalid
   */
  getDriver() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetDriver(this.#ptr);
    return result.ret;
  }

  /**
   * @method getSirenState
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getSirenState() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetSirenState(this.#ptr);
    return result.ret;
  }

  /**
   * @method getHydraReactorAngle
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getHydraReactorAngle() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetHydraReactorAngle(this.#ptr);
    return result.ret;
  }

  /**
   * @method getTrainSpeed
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getTrainSpeed() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetTrainSpeed(this.#ptr);
    return result.ret;
  }

  /**
   * @method getMatrix
   * @returns {{ret: boolean, rightX: number,rightY: number,rightZ: number,upX: number,upY: number,upZ: number,atX: number,atY: number,atZ: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getMatrix() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetMatrix(this.#ptr);
    return result;
  }

  /**
   * @method getOccupant
   * @param {number} seat
   * @returns {Player}
   * @throws Will throw an error if the vehicle is invalid
   */
  getOccupant(seat) {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.GetOccupant(this.#ptr, seat);
    return result.ret;
  }

  /**
   * @method countOccupants
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  countOccupants() {
    if (!this.#ptr) {
      throw new Error("Vehicle instance is not valid");
    }

    const result = __internal_omp.Vehicle.CountOccupants(this.#ptr);
    return result.ret;
  }
}

export default Vehicle;
