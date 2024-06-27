import { Player } from "./index";
import { PTR, internal_omp } from "../globals";

/**
 * Actor class
 */
export default class Actor {
  /**
   * @var ptr
   * @description Actor pointer
   * @type {number|null}
   * @private
   */
  private ptr: number | null = null;

  /**
   * @var id
   * @description Actor ID
   * @type {number|null}
   * @private
   */
  private id: number | null = null;

  /**
   * @constructor
   * @param {number} model
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rot
   * @throws Will throw an error if the actor creation fails
   */
  constructor(model: number, x: number, y: number, z: number, rot: number);

  constructor(model: number, x?: number, y?: number, z?: number, rot?: number) {
    if (arguments.length < 2) {
      const result = internal_omp.Actor.FromID(model);
      if (result.ret === 0) {
        throw new Error("Failed to create actor");
      }

      this.ptr = PTR(result.ret);
      this.id = model;
      return;
    }

    const result = internal_omp.Actor.Create(model, x, y, z, rot!);
    if (result.ret === 0) {
      throw new Error("Failed to create actor");
    }

    this.ptr = PTR(result.ret);
    if (result.hasOwnProperty("id")) {
      this.id = result.id;
    }
  }

  /**
   * @method destroy
   * @throws Will throw an error if the actor retrieval fails
   */
  destroy(): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.Destroy(this.ptr);
    if (result.ret) {
      this.ptr = null;
      this.id = null;
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method getPtr
   * @description get actor pointer
   * @returns {number|null} actor pointer
   */
  getPtr(): number | null {
    return this.ptr;
  }

  /**
   * @method getID
   * @description get actor id
   * @returns {number|null} actor id
   */
  getID(): number | null {
    return this.id;
  }

  /**
   * @method isStreamedInFor
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  isStreamedInFor(player: Player): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.IsStreamedInFor(
      this.ptr,
      player.getPtr()
    );
    return result.ret;
  }

  /**
   * @method setVirtualWorld
   * @param {number} vw
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setVirtualWorld(vw: number): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.SetVirtualWorld(this.ptr, vw);
    return result.ret;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the actor is invalid
   */
  getVirtualWorld(): number {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.GetVirtualWorld(this.ptr);
    return result.ret;
  }

  /**
   * @method applyAnimation
   * @param {string} name
   * @param {string} library
   * @param {number} delta
   * @param {boolean} loop
   * @param {boolean} lockX
   * @param {boolean} lockY
   * @param {boolean} freeze
   * @param {number} time
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  applyAnimation(
    name: string,
    library: string,
    delta: number,
    loop: boolean,
    lockX: boolean,
    lockY: boolean,
    freeze: boolean,
    time: number
  ): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.ApplyAnimation(
      this.ptr,
      name,
      library,
      delta,
      loop,
      lockX,
      lockY,
      freeze,
      time
    );
    return result.ret;
  }

  /**
   * @method clearAnimations
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  clearAnimations(): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.ClearAnimations(this.ptr);
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setPos(x: number, y: number, z: number): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.SetPos(this.ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the actor is invalid
   */
  getPos(): { ret: boolean; x: number; y: number; z: number } {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.GetPos(this.ptr);
    return result;
  }

  /**
   * @method setFacingAngle
   * @param {number} angle
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setFacingAngle(angle: number): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.SetFacingAngle(this.ptr, angle);
    return result.ret;
  }

  /**
   * @method getFacingAngle
   * @returns {number}
   * @throws Will throw an error if the actor is invalid
   */
  getFacingAngle(): number {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.GetFacingAngle(this.ptr);
    return result.ret;
  }

  /**
   * @method setHealth
   * @param {number} hp
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setHealth(hp: number): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.SetHealth(this.ptr, hp);
    return result.ret;
  }

  /**
   * @method getHealth
   * @returns {number}
   * @throws Will throw an error if the actor is invalid
   */
  getHealth(): number {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.GetHealth(this.ptr);
    return result.ret;
  }

  /**
   * @method setInvulnerable
   * @param {boolean} toggle
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setInvulnerable(toggle: boolean): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.SetInvulnerable(this.ptr, toggle);
    return result.ret;
  }

  /**
   * @method isInvulnerable
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  isInvulnerable(): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.IsInvulnerable(this.ptr);
    return result.ret;
  }

  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  isValid(): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.IsValid(this.ptr);
    return result.ret;
  }

  /**
   * @method setSkin
   * @param {number} skin
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setSkin(skin: number): boolean {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.SetSkin(this.ptr, skin);
    return result.ret;
  }

  /**
   * @method getSkin
   * @returns {number}
   * @throws Will throw an error if the actor is invalid
   */
  getSkin(): number {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.GetSkin(this.ptr);
    return result.ret;
  }

  /**
   * @method getAnimation
   * @returns {{ret: boolean, library: string,name: string,delta: number,loop: boolean,lockX: boolean,lockY: boolean,freeze: boolean,time: number}} return object
   * @throws Will throw an error if the actor is invalid
   */
  getAnimation(): {
    ret: boolean;
    library: string;
    name: string;
    delta: number;
    loop: boolean;
    lockX: boolean;
    lockY: boolean;
    freeze: boolean;
    time: number;
  } {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.GetAnimation(this.ptr);
    return result;
  }

  /**
   * @method getSpawnInfo
   * @returns {{ret: boolean, x: number,y: number,z: number,angle: number,skin: number}} return object
   * @throws Will throw an error if the actor is invalid
   */
  getSpawnInfo(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
    angle: number;
    skin: number;
  } {
    if (!this.ptr) {
      throw new Error("Actor instance is not valid");
    }

    const result = internal_omp.Actor.GetSpawnInfo(this.ptr);
    return result;
  }
}
