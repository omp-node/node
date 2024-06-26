/**
 * Class class
 */
class Class {
  /**
   * @var ptr
   * @description Class pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description Class ID
   * @type {number|null}
   * @private
   */
  #id = null;

  /**
   * @add
   * @param {number} teamOrId
   * @param {number} skin
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} angle
   * @param {number} weapon1
   * @param {number} ammo1
   * @param {number} weapon2
   * @param {number} ammo2
   * @param {number} weapon3
   * @param {number} ammo3
   * @throws Will throw an error if the class creation fails
   */
  constructor(
    teamOrId,
    skin,
    x,
    y,
    z,
    angle,
    weapon1,
    ammo1,
    weapon2,
    ammo2,
    weapon3,
    ammo3
  ) {
    if (skin === undefined && x === undefined) {
      const result = __internal_omp.Class.FromID(teamOrId);
      if (result.ret === 0) {
        throw new Error("Failed to retrieve class");
      }

      this.#ptr = omp.PTR(result.ret);
      this.#id = teamOrId;
      return;
    }

    const result = __internal_omp.Class.Add(
      teamOrId,
      skin,
      x,
      y,
      z,
      angle,
      weapon1,
      ammo1,
      weapon2,
      ammo2,
      weapon3,
      ammo3
    );
    if (result.ret === 0) {
      throw new Error("Failed to create class");
    }

    this.#ptr = omp.PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.#id = result.id;
    }
  }

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the class retrieval fails
   */
  destroy() {
    if (!this.#ptr) {
      throw new Error("Class instance is not valid");
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
   * @description get class pointer
   * @returns {number|null} class pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get class id
   * @returns {number|null} class id
   */
  getID() {
    return this.#id;
  }

  /**
   * @method count
   * @returns {number}
   * @throws Will throw an error if the class is invalid
   */
  static count() {
    const result = __internal_omp.Class.Count();
    return result.ret;
  }

  /**
   * @method getData
   * @returns {{ret: boolean, teamid: number,skin: number,x: number,y: number,z: number,angle: number,weapon1: number,weapon1_ammo: number,weapon2: number,weapon2_ammo: number,weapon3: number,weapon3_ammo: number}} return object
   * @throws Will throw an error if the class is invalid
   */
  getData() {
    if (!this.#ptr) {
      throw new Error("Class instance is not valid");
    }

    const result = __internal_omp.Class.GetData(this.#ptr);
    return result;
  }

  /**
   * @method edit
   * @param {number} teamid
   * @param {number} skin
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} angle
   * @param {number} weapon1
   * @param {number} ammo1
   * @param {number} weapon2
   * @param {number} ammo2
   * @param {number} weapon3
   * @param {number} ammo3
   * @returns {boolean}
   * @throws Will throw an error if the class is invalid
   */
  edit(
    teamid,
    skin,
    x,
    y,
    z,
    angle,
    weapon1,
    ammo1,
    weapon2,
    ammo2,
    weapon3,
    ammo3
  ) {
    if (!this.#ptr) {
      throw new Error("Class instance is not valid");
    }

    const result = __internal_omp.Class.Edit(
      this.#ptr,
      teamid,
      skin,
      x,
      y,
      z,
      angle,
      weapon1,
      ammo1,
      weapon2,
      ammo2,
      weapon3,
      ammo3
    );
    return result.ret;
  }
}

export default Class;
