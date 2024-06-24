import ObjectMp from "./components/Object.js";
import Pickup from "./components/Pickup.js";
import Player from "./components/Player.js";
import TextDraw from "./components/TextDraw.js";
import TextLabel from "./components/TextLabel.js";
import Actor from "./components/Actor.js";
import GangZone from "./components/GangZone.js";
import Vehicle from "./components/Vehicle.js";
import Menu from "./components/Menu.js";
import PlayerObject from "./components/PlayerObject.js";
import PlayerTextLabel from "./components/PlayerTextLabel.js";
import PlayerTextDraw from "./components/PlayerTextDraw.js";

/**
 * Player pool
 */
export class PlayerPool {
  /**
   * @type {Map<number, Player>}
   */
  #entries = new Map();

  /**
   * @description A map of player pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get player instance based on their ID
   * @param {number} id
   * @returns {Player|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get player instance based on their pointer
   * @param {number} ptr - player pointer
   * @returns {Player|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get player id based on their pointer
   * @param {number} ptr - player pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get player pointer based on their ID
   * @param {number} id - player ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method at
   * @returns {Player[]} a copy of array of players
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(Player, number): void} callback - The function to execute for each player.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve = true) {
    let entity = null;
    if (retrieve) {
      entity = new Player(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * Vehicle pool
 */
export class VehiclePool {
  /**
   * @type {Map<number, Vehicle>}
   */
  #entries = new Map();

  /**
   * @description A map of vehicle pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get vehicle instance based on their ID
   * @param {number} id
   * @returns {Vehicle|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get vehicle instance based on their pointer
   * @param {number} ptr - vehicle pointer
   * @returns {Vehicle|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get vehicle id based on their pointer
   * @param {number} ptr - vehicle pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get vehicle pointer based on their ID
   * @param {number} id - vehicle ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new vehicle
   * @param {number} modelid
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rotation
   * @param {number} color1
   * @param {number} color2
   * @param {number} respawnDelay
   * @param {boolean} addSiren
   * @returns {Vehicle} a Vehicle instance
   * @throws Will throw an error if the vehicle creation fails
   */
  new(modelid, x, y, z, rotation, color1, color2, respawnDelay, addSiren) {
    const entity = new Vehicle(
      modelid,
      x,
      y,
      z,
      rotation,
      color1,
      color2,
      respawnDelay,
      addSiren
    );
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {Vehicle[]} a copy of array of vehicles
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(Vehicle, number): void} callback - The function to execute for each vehicle.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new Vehicle(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * Object pool
 */
export class ObjectPool {
  /**
   * @type {Map<number, ObjectMp>}
   */
  #entries = new Map();

  /**
   * @description A map of object pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get object instance based on their ID
   * @param {number} id
   * @returns {ObjectMp|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get object instance based on their pointer
   * @param {number} ptr - object pointer
   * @returns {ObjectMp|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get object id based on their pointer
   * @param {number} ptr - object pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get object pointer based on their ID
   * @param {number} id - object ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new object
   * @param {number} modelid
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {number} drawDistance
   * @returns {ObjectMp} an Object instance
   * @throws Will throw an error if the object creation fails
   */
  new(modelid, x, y, z, rotationX, rotationY, rotationZ, drawDistance) {
    const entity = new ObjectMp(
      modelid,
      x,
      y,
      z,
      rotationX,
      rotationY,
      rotationZ,
      drawDistance
    );
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {ObjectMp[]} a copy of array of objects
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(ObjectMp, number): void} callback - The function to execute for each object.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new ObjectMp(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * TextDraw pool
 */
export class TextDrawPool {
  /**
   * @type {Map<number, TextDraw>}
   */
  #entries = new Map();

  /**
   * @description A map of textdraw pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get textdraw instance based on their ID
   * @param {number} id
   * @returns {TextDraw|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get textdraw instance based on their pointer
   * @param {number} ptr - textdraw pointer
   * @returns {TextDraw|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get textdraw id based on their pointer
   * @param {number} ptr - textdraw pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get textdraw pointer based on their ID
   * @param {number} id - textdraw ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new textdraw
   * @param {number} x
   * @param {number} y
   * @param {string} text
   * @returns {TextDraw} a TextDraw instance
   * @throws Will throw an error if the textdraw creation fails
   */
  new(x, y, text) {
    const entity = new TextDraw(x, y, text);
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {TextDraw[]} a copy of array of textdraws
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(TextDraw, number): void} callback - The function to execute for each textdraw.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new TextDraw(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * Pickup pool
 */
export class PickupPool {
  /**
   * @type {Map<number, Pickup>}
   */
  #entries = new Map();

  /**
   * @description A map of pickup pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get pickup instance based on their ID
   * @param {number} id
   * @returns {Pickup|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get pickup instance based on their pointer
   * @param {number} ptr - pickup pointer
   * @returns {Pickup|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get pickup id based on their pointer
   * @param {number} ptr - pickup pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get pickup pointer based on their ID
   * @param {number} id - pickup ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new pickup
   * @param {number} model
   * @param {number} type
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} virtualWorld
   * @returns {Pickup} a Pickup instance
   * @throws Will throw an error if the pickup creation fails
   */
  new(model, type, x, y, z, virtualWorld) {
    const entity = new Pickup(model, type, x, y, z, virtualWorld);
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {Pickup[]} a copy of array of pickups
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(Pickup, number): void} callback - The function to execute for each pickup.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new Pickup(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * GangZone pool
 */
export class GangZonePool {
  /**
   * @type {Map<number, GangZone>}
   */
  #entries = new Map();

  /**
   * @description A map of gangzone pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get gangzone instance based on their ID
   * @param {number} id
   * @returns {GangZone|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get gangzone instance based on their pointer
   * @param {number} ptr - gangzone pointer
   * @returns {GangZone|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get gangzone id based on their pointer
   * @param {number} ptr - gangzone pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get gangzone pointer based on their ID
   * @param {number} id - gangzone ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new gangzone
   * @param {number} minx
   * @param {number} miny
   * @param {number} maxx
   * @param {number} maxy
   * @returns {GangZone} a GangZone instance
   * @throws Will throw an error if the gangzone creation fails
   */
  new(minx, miny, maxx, maxy) {
    const entity = new GangZone(minx, miny, maxx, maxy);
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {GangZone[]} a copy of array of gangzones
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(GangZone, number): void} callback - The function to execute for each gangzone.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new GangZone(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * TextLabel pool
 */
export class TextLabelPool {
  /**
   * @type {Map<number, TextLabel>}
   */
  #entries = new Map();

  /**
   * @description A map of textlabel pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get textlabel instance based on their ID
   * @param {number} id
   * @returns {TextLabel|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get textlabel instance based on their pointer
   * @param {number} ptr - textlabel pointer
   * @returns {TextLabel|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get textlabel id based on their pointer
   * @param {number} ptr - textlabel pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get textlabel pointer based on their ID
   * @param {number} id - textlabel ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new textlabel
   * @param {string} text
   * @param {number} color
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} drawDistance
   * @param {number} virtualWorld
   * @param {boolean} los
   * @returns {TextLabel} a TextLabel instance
   * @throws Will throw an error if the textlabel creation fails
   */
  new(text, color, x, y, z, drawDistance, virtualWorld, los) {
    const entity = new TextLabel(
      text,
      color,
      x,
      y,
      z,
      drawDistance,
      virtualWorld,
      los
    );
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {TextLabel[]} a copy of array of textlabels
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(TextLabel, number): void} callback - The function to execute for each textlabel.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new TextLabel(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * Actor pool
 */
export class ActorPool {
  /**
   * @type {Map<number, Actor>}
   */
  #entries = new Map();

  /**
   * @description A map of actor pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get actor instance based on their ID
   * @param {number} id
   * @returns {Actor|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get actor instance based on their pointer
   * @param {number} ptr - actor pointer
   * @returns {Actor|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get actor id based on their pointer
   * @param {number} ptr - actor pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get actor pointer based on their ID
   * @param {number} id - actor ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new actor
   * @param {number} model
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rot
   * @returns {Actor} a Actor instance
   * @throws Will throw an error if the actor creation fails
   */
  new(model, x, y, z, rot) {
    const entity = new Actor(model, x, y, z, rot);
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {Actor[]} a copy of array of actors
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(Actor, number): void} callback - The function to execute for each actor.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new Actor(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * Menu pool
 */
export class MenuPool {
  /**
   * @type {Map<number, Menu>}
   */
  #entries = new Map();

  /**
   * @description A map of menu pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @method at
   * @description Get menu instance based on their ID
   * @param {number} id
   * @returns {Menu|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get menu instance based on their pointer
   * @param {number} ptr - menu pointer
   * @returns {Menu|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get menu id based on their pointer
   * @param {number} ptr - menu pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get menu pointer based on their ID
   * @param {number} id - menu ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new menu
   * @param {string} title
   * @param {number} columns
   * @param {number} x
   * @param {number} y
   * @param {number} column1Width
   * @param {number} column2Width
   * @returns {Menu} a Menu instance
   * @throws Will throw an error if the menu creation fails
   */
  new(title, columns, x, y, column1Width, column2Width) {
    const entity = new Menu(title, columns, x, y, column1Width, column2Width);
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {Menu[]} a copy of array of menus
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(Menu, number): void} callback - The function to execute for each menu.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new Menu(entityOrId);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * PlayerObject pool
 */
export class PlayerObjectPool {
  /**
   * @type {Player}
   */
  #player = new Map();

  /**
   * @type {Map<number, PlayerObject>}
   */
  #entries = new Map();

  /**
   * @description A map of player object pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @constructor
   * @param {Player} player
   */
  constructor(player) {
    this.#player = player;
  }

  /**
   * @method at
   * @description Get player object instance based on their ID
   * @param {number} id
   * @returns {PlayerObject|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get player object instance based on their pointer
   * @param {number} ptr - player object pointer
   * @returns {PlayerObject|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get player object id based on their pointer
   * @param {number} ptr - player object pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get player object pointer based on their ID
   * @param {number} id - player object ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new player object
   * @param {number} modelid
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {number} drawDistance
   * @returns {PlayerObject} a PlayerObject instance
   * @throws Will throw an error if the player object creation fails
   */
  new(modelid, x, y, z, rotationX, rotationY, rotationZ, drawDistance) {
    const entity = new PlayerObject(
      this.#player,
      modelid,
      x,
      y,
      z,
      rotationX,
      rotationY,
      rotationZ,
      drawDistance
    );
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {PlayerObject[]} a copy of array of player objects
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(PlayerObject, number): void} callback - The function to execute for each player object.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new PlayerObject(this.#player, id);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * PlayerTextLabel pool
 */
export class PlayerTextLabelPool {
  /**
   * @type {Player}
   */
  #player = new Map();

  /**
   * @type {Map<number, PlayerTextLabel>}
   */
  #entries = new Map();

  /**
   * @description A map of player textlabel pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @constructor
   * @param {Player} player
   */
  constructor(player) {
    this.#player = player;
  }

  /**
   * @method at
   * @description Get player textlabel instance based on their ID
   * @param {number} id
   * @returns {PlayerTextLabel|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get player textlabel instance based on their pointer
   * @param {number} ptr - player textlabel pointer
   * @returns {PlayerTextLabel|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get player textlabel id based on their pointer
   * @param {number} ptr - player textlabel pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get player textlabel pointer based on their ID
   * @param {number} id - player textlabel ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new player textlabel
   * @param {string} text
   * @param {number} color
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} drawDistance
   * @param {Player} attachedPlayer
   * @param {Player} attachedVehicle
   * @param {boolean} los
   * @returns {PlayerTextLabel} a PlayerTextLabel instance
   * @throws Will throw an error if the player textlabel creation fails
   */
  new(
    text,
    color,
    x,
    y,
    z,
    drawDistance,
    attachedPlayer,
    attachedVehicle,
    los
  ) {
    const entity = new PlayerTextLabel(
      this.#player,
      text,
      color,
      x,
      y,
      z,
      drawDistance,
      attachedPlayer,
      attachedVehicle,
      los
    );
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {PlayerTextLabel[]} a copy of array of player textlabels
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(PlayerTextLabel, number): void} callback - The function to execute for each player textlabel.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new PlayerTextLabel(this.#player, id);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

/**
 * PlayerTextDraw pool
 */
export class PlayerTextDrawPool {
  /**
   * @type {Player}
   */
  #player = new Map();

  /**
   * @type {Map<number, PlayerTextDraw>}
   */
  #entries = new Map();

  /**
   * @description A map of player textdraw pointers, with their IDs as key
   * @type {Map<number, number>}
   */
  #entityPtrs = new Map();

  /**
   * @constructor
   * @param {Player} player
   */
  constructor(player) {
    this.#player = player;
  }

  /**
   * @method at
   * @description Get player textdraw instance based on their ID
   * @param {number} id
   * @returns {PlayerTextDraw|undefined}
   */
  at(id) {
    const ptr = this.#entityPtrs.get(id);
    if (ptr !== undefined) {
      return this.#entries.get(ptr);
    }
    return undefined;
  }

  /**
   * @method get
   * @description Get player textdraw instance based on their pointer
   * @param {number} ptr - player textdraw pointer
   * @returns {PlayerTextDraw|undefined}
   */
  get(ptr) {
    return this.#entries.get(ptr);
  }

  /**
   * @method getID
   * @description Get player textdraw id based on their pointer
   * @param {number} ptr - player textdraw pointer
   * @returns {number}
   */
  getID(ptr) {
    const entity = this.#entries.get(ptr);
    if (entity) {
      return entity.getID();
    }
    return -1;
  }

  /**
   * @method getPtr
   * @description Get player textdraw pointer based on their ID
   * @param {number} id - player textdraw ID
   * @returns {number|null}
   */
  getPtr(id) {
    const entityPtr = this.#entityPtrs.get(id);
    if (entityPtr !== undefined) {
      return entityPtr;
    }
    return null;
  }

  /**
   * @method new
   * @description Create a new player textdraw
   * @param {number} x
   * @param {number} y
   * @param {string} text
   * @returns {PlayerTextDraw} a PlayerTextDraw instance
   * @throws Will throw an error if the player textdraw creation fails
   */
  new(x, y, text) {
    const entity = new PlayerTextDraw(this.#player, x, y, text);
    this.add_INTERNAL_UNSAFE(entity);
    return entity;
  }

  /**
   * @method all
   * @returns {PlayerTextDraw[]} a copy of array of player textdraws
   */
  all() {
    return [...Array.from(this.#entries.values())];
  }

  /**
   * @method forEach
   * @param {function(PlayerTextDraw, number): void} callback - The function to execute for each player textdraw.
   */
  forEach(callback) {
    this.#entries.forEach((value, key) => callback(value, key));
  }

  add_INTERNAL_UNSAFE(entityOrId, retrieve) {
    let entity = null;
    if (retrieve) {
      entity = new PlayerTextDraw(this.#player, id);
    } else {
      entity = entityOrId;
    }

    this.#entityPtrs.set(entity.getID(), entity.getPtr());
    this.#entries.set(entity.getPtr(), entity);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }

  ids_INTERNAL_UNSAFE() {
    return this.#entityPtrs;
  }
}

export class PerPlayerEntityPool {
  #entries = new Map();

  /**
   * @method at
   * @description Get player's entity pool
   * @param {number} playerid
   * @returns {any|undefined}
   */
  at(playerid) {
    return this.#entries.get(playerid);
  }

  entries_INTERNAL_UNSAFE() {
    return this.#entries;
  }
}
