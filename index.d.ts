// Type definitions for omp-node
// Project: omp-node
// Definitions by: iAmir <https://github.com/pkfln>

/**
 * All class
 */
declare class All {
  /**
   * @method sendClientMessage
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   */
  static sendClientMessage(color: number, text: string): boolean;
  /**
   * @method createExplosion
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} type
   * @param {number} radius
   * @returns {boolean}
   */
  static createExplosion(
    x: number,
    y: number,
    z: number,
    type: number,
    radius: number
  ): boolean;
  /**
   * @method sendDeathMessage
   * @param {Player} killer
   * @param {Player} killee
   * @param {number} weapon
   * @returns {boolean}
   */
  static sendDeathMessage(
    killer: Player,
    killee: Player,
    weapon: number
  ): boolean;
  /**
   * @method enableStuntBonus
   * @param {boolean} enable
   * @returns {boolean}
   */
  static enableStuntBonus(enable: boolean): boolean;
}

/**
 * Core class
 */
declare class Core {
  /**
   * @method tickCount
   * @returns {number}
   */
  static tickCount(): number;
  /**
   * @method maxPlayers
   * @returns {number}
   */
  static maxPlayers(): number;
  /**
   * @method log
   * @param {string} text
   * @returns {boolean}
   */
  static log(text: string): boolean;
  /**
   * @method isAdminTeleportAllowed
   * @returns {boolean}
   */
  static isAdminTeleportAllowed(): boolean;
  /**
   * @method allowAdminTeleport
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowAdminTeleport(allow: boolean): boolean;
  /**
   * @method areAllAnimationsEnabled
   * @returns {boolean}
   */
  static areAllAnimationsEnabled(): boolean;
  /**
   * @method enableAllAnimations
   * @param {boolean} allow
   * @returns {boolean}
   */
  static enableAllAnimations(allow: boolean): boolean;
  /**
   * @method isAnimationLibraryValid
   * @param {string} name
   * @returns {boolean}
   */
  static isAnimationLibraryValid(name: string): boolean;
  /**
   * @method areInteriorWeaponsAllowed
   * @returns {boolean}
   */
  static areInteriorWeaponsAllowed(): boolean;
  /**
   * @method allowInteriorWeapons
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowInteriorWeapons(allow: boolean): boolean;
  /**
   * @method blockIpAddress
   * @param {string} ipAddress
   * @param {number} timeMS
   * @returns {boolean}
   */
  static blockIpAddress(ipAddress: string, timeMS: number): boolean;
  /**
   * @method unBlockIpAddress
   * @param {string} ipAddress
   * @returns {boolean}
   */
  static unBlockIpAddress(ipAddress: string): boolean;
  /**
   * @method disableEntryExitMarkers
   * @returns {boolean}
   */
  static disableEntryExitMarkers(): boolean;
  /**
   * @method disableNameTagsLOS
   * @returns {boolean}
   */
  static disableNameTagsLOS(): boolean;
  /**
   * @method enableZoneNames
   * @param {boolean} enable
   * @returns {boolean}
   */
  static enableZoneNames(enable: boolean): boolean;
  /**
   * @method showGameTextForAll
   * @param {string} msg
   * @param {number} time
   * @param {number} style
   * @returns {boolean}
   */
  static showGameTextForAll(msg: string, time: number, style: number): boolean;
  /**
   * @method hideGameTextForAll
   * @param {number} style
   * @returns {boolean}
   */
  static hideGameTextForAll(style: number): boolean;
  /**
   * @method networkStats
   * @returns {{ret: boolean, output: string}} return object
   */
  static networkStats(): {
    ret: boolean;
    output: string;
  };
  /**
   * @method serverTickRate
   * @returns {number}
   */
  static serverTickRate(): number;
  /**
   * @method setChatRadius
   * @param {number} globalChatRadius
   * @returns {boolean}
   */
  static setChatRadius(globalChatRadius: number): boolean;
  /**
   * @method setMarkerRadius
   * @param {number} playerMarkerRadius
   * @returns {boolean}
   */
  static setMarkerRadius(playerMarkerRadius: number): boolean;
  /**
   * @method sendRconCommand
   * @param {string} command
   * @returns {boolean}
   */
  static sendRconCommand(command: string): boolean;
  /**
   * @method setDeathDropAmount
   * @param {number} amount
   * @returns {boolean}
   */
  static setDeathDropAmount(amount: number): boolean;
  /**
   * @method gameMode
   * @param {string} string
   * @returns {boolean}
   */
  static gameMode(string: string): boolean;
  /**
   * @method setGravity
   * @param {number} gravity
   * @returns {boolean}
   */
  static setGravity(gravity: number): boolean;
  /**
   * @method getGravity
   * @returns {number}
   */
  static getGravity(): number;
  /**
   * @method setNameTagsDrawDistance
   * @param {number} distance
   * @returns {boolean}
   */
  static setNameTagsDrawDistance(distance: number): boolean;
  /**
   * @method setWeather
   * @param {number} weatherid
   * @returns {boolean}
   */
  static setWeather(weatherid: number): boolean;
  /**
   * @method setWorldTime
   * @param {number} hour
   * @returns {boolean}
   */
  static setWorldTime(hour: number): boolean;
  /**
   * @method showNameTags
   * @param {boolean} show
   * @returns {boolean}
   */
  static showNameTags(show: boolean): boolean;
  /**
   * @method showPlayerMarkers
   * @param {number} mode
   * @returns {boolean}
   */
  static showPlayerMarkers(mode: number): boolean;
  /**
   * @method usePedAnims
   * @returns {boolean}
   */
  static usePedAnims(): boolean;
  /**
   * @method getWeather
   * @returns {number}
   */
  static getWeather(): number;
  /**
   * @method getWorldTime
   * @returns {number}
   */
  static getWorldTime(): number;
  /**
   * @method toggleChatTextReplacement
   * @param {boolean} enable
   * @returns {boolean}
   */
  static toggleChatTextReplacement(enable: boolean): boolean;
  /**
   * @method isChatTextReplacementToggled
   * @returns {boolean}
   */
  static isChatTextReplacementToggled(): boolean;
  /**
   * @method isNickNameValid
   * @param {string} name
   * @returns {boolean}
   */
  static isNickNameValid(name: string): boolean;
  /**
   * @method allowNickNameCharacter
   * @param {number} character
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowNickNameCharacter(character: number, allow: boolean): boolean;
  /**
   * @method isNickNameCharacterAllowed
   * @param {number} character
   * @returns {boolean}
   */
  static isNickNameCharacterAllowed(character: number): boolean;
  /**
   * @method clearBanList
   * @returns {boolean}
   */
  static clearBanList(): boolean;
  /**
   * @method isIpAddressBanned
   * @param {string} ip
   * @returns {boolean}
   */
  static isIpAddressBanned(ip: string): boolean;
  /**
   * @method getWeaponSlot
   * @param {number} weapon
   * @returns {number}
   */
  static getWeaponSlot(weapon: number): number;
  /**
   * @method addRule
   * @param {string} name
   * @param {string} value
   * @returns {boolean}
   */
  static addRule(name: string, value: string): boolean;
  /**
   * @method isValidRule
   * @param {string} name
   * @returns {boolean}
   */
  static isValidRule(name: string): boolean;
  /**
   * @method removeRule
   * @param {string} name
   * @returns {boolean}
   */
  static removeRule(name: string): boolean;
}

/**
 * Config class
 */
declare class Config {
  /**
   * @method getAsBool
   * @param {string} cvar
   * @returns {boolean}
   */
  static getAsBool(cvar: string): boolean;
  /**
   * @method getAsInt
   * @param {string} cvar
   * @returns {number}
   */
  static getAsInt(cvar: string): number;
  /**
   * @method getAsFloat
   * @param {string} cvar
   * @returns {number}
   */
  static getAsFloat(cvar: string): number;
  /**
   * @method getAsString
   * @param {string} cvar
   * @returns {{ret: boolean, output: string}} return object
   */
  static getAsString(cvar: string): {
    ret: boolean;
    output: string;
  };
}

/**
 * CustomModel class
 */
declare class CustomModel {
  /**
   * @method addCharModel
   * @param {number} baseid
   * @param {number} newid
   * @param {string} dff
   * @param {string} textureLibrary
   * @returns {boolean}
   */
  static addCharModel(
    baseid: number,
    newid: number,
    dff: string,
    textureLibrary: string
  ): boolean;
  /**
   * @method addSimpleModel
   * @param {number} virtualWorld
   * @param {number} baseid
   * @param {number} newid
   * @param {string} dff
   * @param {string} textureLibrary
   * @returns {boolean}
   */
  static addSimpleModel(
    virtualWorld: number,
    baseid: number,
    newid: number,
    dff: string,
    textureLibrary: string
  ): boolean;
  /**
   * @method addSimpleModelTimed
   * @param {number} virtualWorld
   * @param {number} baseid
   * @param {number} newid
   * @param {string} dff
   * @param {string} textureLibrary
   * @param {number} timeOn
   * @param {number} timeOff
   * @returns {boolean}
   */
  static addSimpleModelTimed(
    virtualWorld: number,
    baseid: number,
    newid: number,
    dff: string,
    textureLibrary: string,
    timeOn: number,
    timeOff: number
  ): boolean;
  /**
   * @method redirectDownload
   * @param {Player} player
   * @param {string} url
   * @returns {boolean}
   */
  static redirectDownload(player: Player, url: string): boolean;
  /**
   * @method findModelFileNameFromCRC
   * @param {number} crc
   * @returns {{ret: boolean, output: string}} return object
   */
  static findModelFileNameFromCRC(crc: number): {
    ret: boolean;
    output: string;
  };
  /**
   * @method isValid
   * @param {number} modelId
   * @returns {boolean}
   */
  static isValid(modelId: number): boolean;
  /**
   * @method getPath
   * @param {number} modelId
   * @returns {{ret: boolean, dffPath: string,txdPath: string}} return object
   */
  static getPath(modelId: number): {
    ret: boolean;
    dffPath: string;
    txdPath: string;
  };
}

/**
 * Dialog class
 */
declare class Dialog {
  /**
   * @method show
   * @param {Player} player
   * @param {number} dialog
   * @param {number} style
   * @param {string} title
   * @param {string} body
   * @param {string} button1
   * @param {string} button2
   * @returns {boolean}
   */
  static show(
    player: Player,
    dialog: number,
    style: number,
    title: string,
    body: string,
    button1: string,
    button2: string
  ): boolean;
  /**
   * @method hide
   * @param {Player} player
   * @returns {boolean}
   */
  static hide(player: Player): boolean;
}

/**
 * NPC class
 */
declare class NPC {
  /**
   * @method connect
   * @param {string} name
   * @param {string} script
   * @returns {boolean}
   */
  static connect(name: string, script: string): boolean;
}

/**
 * Player class
 */
declare class Player {
  /**
   * @method getPtr
   * @description get player pointer
   * @returns {number|null} player pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get player id
   * @returns {number|null} player id
   */
  getID(): number | null;
  /**
   * @method setSpawnInfo
   * @param {number} team
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
   * @throws Will throw an error if the player is invalid
   */
  setSpawnInfo(
    team: number,
    skin: number,
    x: number,
    y: number,
    z: number,
    angle: number,
    weapon1: number,
    ammo1: number,
    weapon2: number,
    ammo2: number,
    weapon3: number,
    ammo3: number
  ): boolean;
  /**
   * @method getSpawnInfo
   * @returns {{ret: boolean, team: number,skin: number,x: number,y: number,z: number,angle: number,weapon1: number,ammo1: number,weapon2: number,ammo2: number,weapon3: number,ammo3: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getSpawnInfo(): {
    ret: boolean;
    team: number;
    skin: number;
    x: number;
    y: number;
    z: number;
    angle: number;
    weapon1: number;
    ammo1: number;
    weapon2: number;
    ammo2: number;
    weapon3: number;
    ammo3: number;
  };
  /**
   * @method getNetworkStats
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getNetworkStats(): {
    ret: boolean;
    output: string;
  };
  /**
   * @method netStatsBytesReceived
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsBytesReceived(): number;
  /**
   * @method netStatsBytesSent
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsBytesSent(): number;
  /**
   * @method netStatsConnectionStatus
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsConnectionStatus(): number;
  /**
   * @method netStatsGetConnectedTime
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsGetConnectedTime(): number;
  /**
   * @method netStatsGetIpPort
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  netStatsGetIpPort(): {
    ret: boolean;
    output: string;
  };
  /**
   * @method netStatsMessagesReceived
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsMessagesReceived(): number;
  /**
   * @method netStatsMessagesRecvPerSecond
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsMessagesRecvPerSecond(): number;
  /**
   * @method netStatsMessagesSent
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsMessagesSent(): number;
  /**
   * @method netStatsPacketLossPercent
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsPacketLossPercent(): number;
  /**
   * @method getCustomSkin
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getCustomSkin(): number;
  /**
   * @method getDialog
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getDialog(): number;
  /**
   * @method getDialogData
   * @returns {{ret: boolean, dialogid: number,style: number,title: string,body: string,button1: string,button2: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getDialogData(): {
    ret: boolean;
    dialogid: number;
    style: number;
    title: string;
    body: string;
    button1: string;
    button2: string;
  };
  /**
   * @method getMenu
   * @returns {Menu}
   * @throws Will throw an error if the player is invalid
   */
  getMenu(): Menu;
  /**
   * @method getSurfingPlayerObject
   * @returns {PlayerObject}
   * @throws Will throw an error if the player is invalid
   */
  getSurfingPlayerObject(): PlayerObject;
  /**
   * @method getCameraTargetPlayerObject
   * @returns {PlayerObject}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetPlayerObject(): PlayerObject;
  /**
   * @method sendClientMessage
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  sendClientMessage(color: number, text: string): boolean;
  /**
   * @method setCameraPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setCameraPos(x: number, y: number, z: number): boolean;
  /**
   * @method setDrunkLevel
   * @param {number} level
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setDrunkLevel(level: number): boolean;
  /**
   * @method setInterior
   * @param {number} interior
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setInterior(interior: number): boolean;
  /**
   * @method setWantedLevel
   * @param {number} level
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setWantedLevel(level: number): boolean;
  /**
   * @method setWeather
   * @param {number} weather
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setWeather(weather: number): boolean;
  /**
   * @method getWeather
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getWeather(): number;
  /**
   * @method setSkin
   * @param {number} skin
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setSkin(skin: number): boolean;
  /**
   * @method setShopName
   * @param {string} name
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setShopName(name: string): boolean;
  /**
   * @method giveMoney
   * @param {number} amount
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  giveMoney(amount: number): boolean;
  /**
   * @method setCameraLookAt
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} cutType
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setCameraLookAt(x: number, y: number, z: number, cutType: number): boolean;
  /**
   * @method setCameraBehind
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setCameraBehind(): boolean;
  /**
   * @method createExplosion
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} type
   * @param {number} radius
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  createExplosion(
    x: number,
    y: number,
    z: number,
    type: number,
    radius: number
  ): boolean;
  /**
   * @method playAudioStream
   * @param {string} url
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} distance
   * @param {boolean} usePos
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  playAudioStream(
    url: string,
    x: number,
    y: number,
    z: number,
    distance: number,
    usePos: boolean
  ): boolean;
  /**
   * @method stopAudioStream
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  stopAudioStream(): boolean;
  /**
   * @method toggleWidescreen
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleWidescreen(enable: boolean): boolean;
  /**
   * @method isWidescreenToggled
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isWidescreenToggled(): boolean;
  /**
   * @method setHealth
   * @param {number} health
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setHealth(health: number): boolean;
  /**
   * @method getHealth
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getHealth(): number;
  /**
   * @method setArmor
   * @param {number} armor
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setArmor(armor: number): boolean;
  /**
   * @method getArmor
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getArmor(): number;
  /**
   * @method setTeam
   * @param {number} team
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setTeam(team: number): boolean;
  /**
   * @method getTeam
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getTeam(): number;
  /**
   * @method setScore
   * @param {number} score
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setScore(score: number): boolean;
  /**
   * @method getScore
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getScore(): number;
  /**
   * @method getSkin
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSkin(): number;
  /**
   * @method setColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setColor(color: number): boolean;
  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getColor(): number;
  /**
   * @method getDefaultColor
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getDefaultColor(): number;
  /**
   * @method getDrunkLevel
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getDrunkLevel(): number;
  /**
   * @method giveWeapon
   * @param {number} weapon
   * @param {number} ammo
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  giveWeapon(weapon: number, ammo: number): boolean;
  /**
   * @method removeWeapon
   * @param {number} weapon
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeWeapon(weapon: number): boolean;
  /**
   * @method getMoney
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getMoney(): number;
  /**
   * @method resetMoney
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  resetMoney(): boolean;
  /**
   * @method setName
   * @param {string} name
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  setName(name: string): number;
  /**
   * @method getName
   * @returns {{ret: boolean, name: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getName(): {
    ret: boolean;
    name: string;
  };
  /**
   * @method getState
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getState(): number;
  /**
   * @method getPing
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getPing(): number;
  /**
   * @method getWeapon
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getWeapon(): number;
  /**
   * @method setTime
   * @param {number} hour
   * @param {number} minute
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setTime(hour: number, minute: number): boolean;
  /**
   * @method getTime
   * @returns {{ret: boolean, hour: number,minute: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getTime(): {
    ret: boolean;
    hour: number;
    minute: number;
  };
  /**
   * @method toggleClock
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleClock(enable: boolean): boolean;
  /**
   * @method hasClock
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  hasClock(): boolean;
  /**
   * @method forceClassSelection
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  forceClassSelection(): boolean;
  /**
   * @method getWantedLevel
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getWantedLevel(): number;
  /**
   * @method setFightingStyle
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setFightingStyle(style: number): boolean;
  /**
   * @method getFightingStyle
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getFightingStyle(): number;
  /**
   * @method setVelocity
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setVelocity(x: number, y: number, z: number): boolean;
  /**
   * @method getVelocity
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getVelocity(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method getCameraPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getCameraPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method getDistanceFromPoint
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getDistanceFromPoint(x: number, y: number, z: number): number;
  /**
   * @method getInterior
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getInterior(): number;
  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setPos(x: number, y: number, z: number): boolean;
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getVirtualWorld(): number;
  /**
   * @method isNPC
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isNPC(): boolean;
  /**
   * @method isStreamedIn
   * @param {Player} other
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isStreamedIn(other: Player): boolean;
  /**
   * @method playGameSound
   * @param {number} sound
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  playGameSound(sound: number, x: number, y: number, z: number): boolean;
  /**
   * @method spectatePlayer
   * @param {Player} target
   * @param {number} mode
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  spectatePlayer(target: Player, mode: number): boolean;
  /**
   * @method spectateVehicle
   * @param {Player} target
   * @param {number} mode
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  spectateVehicle(target: Player, mode: number): boolean;
  /**
   * @method setVirtualWorld
   * @param {number} vw
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setVirtualWorld(vw: number): boolean;
  /**
   * @method setWorldBounds
   * @param {number} xMax
   * @param {number} xMin
   * @param {number} yMax
   * @param {number} yMin
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setWorldBounds(
    xMax: number,
    xMin: number,
    yMax: number,
    yMin: number
  ): boolean;
  /**
   * @method clearWorldBounds
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  clearWorldBounds(): boolean;
  /**
   * @method getWorldBounds
   * @returns {{ret: boolean, xmax: number,xmin: number,ymax: number,ymin: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getWorldBounds(): {
    ret: boolean;
    xmax: number;
    xmin: number;
    ymax: number;
    ymin: number;
  };
  /**
   * @method clearAnimations
   * @param {number} syncType
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  clearAnimations(syncType: number): boolean;
  /**
   * @method getLastShotVectors
   * @returns {{ret: boolean, origin_x: number,origin_y: number,origin_z: number,hit_x: number,hit_y: number,hit_z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getLastShotVectors(): {
    ret: boolean;
    origin_x: number;
    origin_y: number;
    origin_z: number;
    hit_x: number;
    hit_y: number;
    hit_z: number;
  };
  /**
   * @method getCameraTargetPlayer
   * @returns {Player}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetPlayer(): Player;
  /**
   * @method getCameraTargetActor
   * @returns {Actor}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetActor(): Actor;
  /**
   * @method getCameraTargetObject
   * @returns {ObjectMp}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetObject(): ObjectMp;
  /**
   * @method getCameraTargetVehicle
   * @returns {Vehicle}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetVehicle(): Vehicle;
  /**
   * @method putInVehicle
   * @param {Vehicle} vehicle
   * @param {number} seat
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  putInVehicle(vehicle: Vehicle, seat: number): boolean;
  /**
   * @method removeBuilding
   * @param {number} model
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} radius
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeBuilding(
    model: number,
    x: number,
    y: number,
    z: number,
    radius: number
  ): boolean;
  /**
   * @method getBuildingsRemoved
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getBuildingsRemoved(): number;
  /**
   * @method removeFromVehicle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeFromVehicle(): boolean;
  /**
   * @method removeMapIcon
   * @param {number} icon
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeMapIcon(icon: number): boolean;
  /**
   * @method setMapIcon
   * @param {number} iconID
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} type
   * @param {number} color
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setMapIcon(
    iconID: number,
    x: number,
    y: number,
    z: number,
    type: number,
    color: number,
    style: number
  ): boolean;
  /**
   * @method resetWeapons
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  resetWeapons(): boolean;
  /**
   * @method setAmmo
   * @param {number} id
   * @param {number} ammo
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setAmmo(id: number, ammo: number): boolean;
  /**
   * @method setArmedWeapon
   * @param {number} weapon
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setArmedWeapon(weapon: number): boolean;
  /**
   * @method setChatBubble
   * @param {string} text
   * @param {number} color
   * @param {number} drawdistance
   * @param {number} expiretime
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setChatBubble(
    text: string,
    color: number,
    drawdistance: number,
    expiretime: number
  ): boolean;
  /**
   * @method setPosFindZ
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setPosFindZ(x: number, y: number, z: number): boolean;
  /**
   * @method setSkillLevel
   * @param {number} weapon
   * @param {number} level
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setSkillLevel(weapon: number, level: number): boolean;
  /**
   * @method setSpecialAction
   * @param {number} action
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setSpecialAction(action: number): boolean;
  /**
   * @method showNameTagForPlayer
   * @param {Player} other
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  showNameTagForPlayer(other: Player, enable: boolean): boolean;
  /**
   * @method toggleControllable
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleControllable(enable: boolean): boolean;
  /**
   * @method toggleSpectating
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleSpectating(enable: boolean): boolean;
  /**
   * @method applyAnimation
   * @param {string} animlib
   * @param {string} animname
   * @param {number} delta
   * @param {boolean} loop
   * @param {boolean} lockX
   * @param {boolean} lockY
   * @param {boolean} freeze
   * @param {number} time
   * @param {number} sync
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  applyAnimation(
    animlib: string,
    animname: string,
    delta: number,
    loop: boolean,
    lockX: boolean,
    lockY: boolean,
    freeze: boolean,
    time: number,
    sync: number
  ): boolean;
  /**
   * @method getAnimationName
   * @param {number} index
   * @returns {{ret: boolean, lib: string,name: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  static getAnimationName(index: number): {
    ret: boolean;
    lib: string;
    name: string;
  };
  /**
   * @method editAttachedObject
   * @param {number} index
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  editAttachedObject(index: number): boolean;
  /**
   * @method enableCameraTarget
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  enableCameraTarget(enable: boolean): boolean;
  /**
   * @method enableStuntBonus
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  enableStuntBonus(enable: boolean): boolean;
  /**
   * @method getPlayerAmmo
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getPlayerAmmo(): number;
  /**
   * @method getAnimationIndex
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getAnimationIndex(): number;
  /**
   * @method getFacingAngle
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getFacingAngle(): number;
  /**
   * @method getIp
   * @returns {{ret: boolean, ip: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getIp(): {
    ret: boolean;
    ip: string;
  };
  /**
   * @method getSpecialAction
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSpecialAction(): number;
  /**
   * @method getVehicleID
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getVehicleID(): number;
  /**
   * @method getVehicleSeat
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getVehicleSeat(): number;
  /**
   * @method getWeaponData
   * @param {number} slot
   * @returns {{ret: boolean, weaponid: number,ammo: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getWeaponData(slot: number): {
    ret: boolean;
    weaponid: number;
    ammo: number;
  };
  /**
   * @method getWeaponState
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getWeaponState(): number;
  /**
   * @method interpolateCameraPos
   * @param {number} from_x
   * @param {number} from_y
   * @param {number} from_z
   * @param {number} to_x
   * @param {number} to_y
   * @param {number} to_z
   * @param {number} time
   * @param {number} cut
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  interpolateCameraPos(
    from_x: number,
    from_y: number,
    from_z: number,
    to_x: number,
    to_y: number,
    to_z: number,
    time: number,
    cut: number
  ): boolean;
  /**
   * @method interpolateCameraLookAt
   * @param {number} from_x
   * @param {number} from_y
   * @param {number} from_z
   * @param {number} to_x
   * @param {number} to_y
   * @param {number} to_z
   * @param {number} time
   * @param {number} cut
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  interpolateCameraLookAt(
    from_x: number,
    from_y: number,
    from_z: number,
    to_x: number,
    to_y: number,
    to_z: number,
    time: number,
    cut: number
  ): boolean;
  /**
   * @method isPlayerAttachedObjectSlotUsed
   * @param {number} index
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isPlayerAttachedObjectSlotUsed(index: number): boolean;
  /**
   * @method attachCameraToObject
   * @param {ObjectMp} object
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  attachCameraToObject(object: ObjectMp): boolean;
  /**
   * @method attachCameraToPlayerObject
   * @param {ObjectMp} object
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  attachCameraToPlayerObject(object: ObjectMp): boolean;
  /**
   * @method getCameraAspectRatio
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getCameraAspectRatio(): number;
  /**
   * @method getCameraFrontVector
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getCameraFrontVector(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method getCameraMode
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getCameraMode(): number;
  /**
   * @method getKeys
   * @returns {{ret: boolean, keys: number,updown: number,leftright: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getKeys(): {
    ret: boolean;
    keys: number;
    updown: number;
    leftright: number;
  };
  /**
   * @method getSurfingVehicle
   * @returns {Vehicle}
   * @throws Will throw an error if the player is invalid
   */
  getSurfingVehicle(): Vehicle;
  /**
   * @method getSurfingObject
   * @returns {ObjectMp}
   * @throws Will throw an error if the player is invalid
   */
  getSurfingObject(): ObjectMp;
  /**
   * @method getTargetPlayer
   * @returns {Player}
   * @throws Will throw an error if the player is invalid
   */
  getTargetPlayer(): Player;
  /**
   * @method getTargetActor
   * @returns {Actor}
   * @throws Will throw an error if the player is invalid
   */
  getTargetActor(): Actor;
  /**
   * @method isInVehicle
   * @param {Vehicle} targetVehicle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInVehicle(targetVehicle: Vehicle): boolean;
  /**
   * @method isInAnyVehicle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInAnyVehicle(): boolean;
  /**
   * @method isInRangeOfPoint
   * @param {number} range
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInRangeOfPoint(range: number, x: number, y: number, z: number): boolean;
  /**
   * @method playCrimeReport
   * @param {Player} suspect
   * @param {number} crime
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  playCrimeReport(suspect: Player, crime: number): boolean;
  /**
   * @method removeAttachedObject
   * @param {number} index
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeAttachedObject(index: number): boolean;
  /**
   * @method setAttachedObject
   * @param {number} index
   * @param {number} modelid
   * @param {number} bone
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {number} scaleX
   * @param {number} scaleY
   * @param {number} scaleZ
   * @param {number} materialcolor1
   * @param {number} materialcolor2
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setAttachedObject(
    index: number,
    modelid: number,
    bone: number,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    scaleX: number,
    scaleY: number,
    scaleZ: number,
    materialcolor1: number,
    materialcolor2: number
  ): boolean;
  /**
   * @method getAttachedObject
   * @param {number} index
   * @returns {{ret: boolean, modelid: number,bone: number,offsetX: number,offsetY: number,offsetZ: number,rotationX: number,rotationY: number,rotationZ: number,scaleX: number,scaleY: number,scaleZ: number,materialcolor1: number,materialcolor2: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getAttachedObject(index: number): {
    ret: boolean;
    modelid: number;
    bone: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    materialcolor1: number;
    materialcolor2: number;
  };
  /**
   * @method setFacingAngle
   * @param {number} angle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setFacingAngle(angle: number): boolean;
  /**
   * @method setMarkerForPlayer
   * @param {Player} other
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setMarkerForPlayer(other: Player, color: number): boolean;
  /**
   * @method getMarkerForPlayer
   * @param {Player} other
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getMarkerForPlayer(other: Player): number;
  /**
   * @method allowTeleport
   * @param {boolean} allow
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  allowTeleport(allow: boolean): boolean;
  /**
   * @method isTeleportAllowed
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isTeleportAllowed(): boolean;
  /**
   * @method disableRemoteVehicleCollisions
   * @param {boolean} disable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  disableRemoteVehicleCollisions(disable: boolean): boolean;
  /**
   * @method getCameraZoom
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getCameraZoom(): number;
  /**
   * @method selectTextDraw
   * @param {number} hoverColour
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  selectTextDraw(hoverColour: number): boolean;
  /**
   * @method cancelSelectTextDraw
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  cancelSelectTextDraw(): boolean;
  /**
   * @method sendClientCheck
   * @param {number} actionType
   * @param {number} address
   * @param {number} offset
   * @param {number} count
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  sendClientCheck(
    actionType: number,
    address: number,
    offset: number,
    count: number
  ): boolean;
  /**
   * @method spawn
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  spawn(): boolean;
  /**
   * @method gPCI
   * @returns {{ret: boolean, gpci: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  gPCI(): {
    ret: boolean;
    gpci: string;
  };
  /**
   * @method isAdmin
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isAdmin(): boolean;
  /**
   * @method kick
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  kick(): boolean;
  /**
   * @method showGameText
   * @param {string} text
   * @param {number} time
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  showGameText(text: string, time: number, style: number): boolean;
  /**
   * @method hideGameText
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  hideGameText(style: number): boolean;
  /**
   * @method hasGameText
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  hasGameText(style: number): boolean;
  /**
   * @method getGameText
   * @param {number} style
   * @returns {{ret: boolean, message: string,time: number,remaining: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getGameText(style: number): {
    ret: boolean;
    message: string;
    time: number;
    remaining: number;
  };
  /**
   * @method ban
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  ban(): boolean;
  /**
   * @method banEx
   * @param {string} reason
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  banEx(reason: string): boolean;
  /**
   * @method sendDeathMessage
   * @param {Player} killer
   * @param {Player} killee
   * @param {number} weapon
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  sendDeathMessage(killer: Player, killee: Player, weapon: number): boolean;
  /**
   * @method sendMessageToPlayer
   * @param {Player} sender
   * @param {string} message
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  sendMessageToPlayer(sender: Player, message: string): boolean;
  /**
   * @method getVersion
   * @returns {{ret: boolean, version: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getVersion(): {
    ret: boolean;
    version: string;
  };
  /**
   * @method getSkillLevel
   * @param {number} skill
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSkillLevel(skill: number): number;
  /**
   * @method getZAim
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getZAim(): number;
  /**
   * @method getSurfingOffsets
   * @returns {{ret: boolean, offsetX: number,offsetY: number,offsetZ: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getSurfingOffsets(): {
    ret: boolean;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
  };
  /**
   * @method getRotationQuat
   * @returns {{ret: boolean, x: number,y: number,z: number,w: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getRotationQuat(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
    w: number;
  };
  /**
   * @method getPlayerSpectateID
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getPlayerSpectateID(): number;
  /**
   * @method getSpectateType
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSpectateType(): number;
  /**
   * @method getRawIp
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getRawIp(): number;
  /**
   * @method setGravity
   * @param {number} gravity
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setGravity(gravity: number): boolean;
  /**
   * @method getGravity
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getGravity(): number;
  /**
   * @method setAdmin
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setAdmin(set: boolean): boolean;
  /**
   * @method isSpawned
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isSpawned(): boolean;
  /**
   * @method isControllable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isControllable(): boolean;
  /**
   * @method isCameraTargetEnabled
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isCameraTargetEnabled(): boolean;
  /**
   * @method toggleGhostMode
   * @param {boolean} toggle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleGhostMode(toggle: boolean): boolean;
  /**
   * @method getGhostMode
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  getGhostMode(): boolean;
  /**
   * @method allowWeapons
   * @param {boolean} allow
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  allowWeapons(allow: boolean): boolean;
  /**
   * @method areWeaponsAllowed
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  areWeaponsAllowed(): boolean;
  /**
   * @method isPlayerUsingOfficialClient
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isPlayerUsingOfficialClient(): boolean;
  /**
   * @method getAnimationFlags
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getAnimationFlags(): number;
  /**
   * @method isInDriveByMode
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInDriveByMode(): boolean;
  /**
   * @method isCuffed
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isCuffed(): boolean;
  /**
   * @method isInModShop
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInModShop(): boolean;
  /**
   * @method getSirenState
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSirenState(): number;
  /**
   * @method getLandingGearState
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getLandingGearState(): number;
  /**
   * @method getHydraReactorAngle
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getHydraReactorAngle(): number;
  /**
   * @method getTrainSpeed
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getTrainSpeed(): number;
  #private;
}

/**
 * Checkpoint class
 */
declare class Checkpoint {
  /**
   * @method set
   * @param {Player} player
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} radius
   * @returns {boolean}
   */
  static set(
    player: Player,
    x: number,
    y: number,
    z: number,
    radius: number
  ): boolean;
  /**
   * @method disable
   * @param {Player} player
   * @returns {boolean}
   */
  static disable(player: Player): boolean;
  /**
   * @method isPlayerIn
   * @param {Player} player
   * @returns {boolean}
   */
  static isPlayerIn(player: Player): boolean;
  /**
   * @method isActive
   * @param {Player} player
   * @returns {boolean}
   */
  static isActive(player: Player): boolean;
  /**
   * @method get
   * @param {Player} player
   * @returns {{ret: boolean, x: number,y: number,z: number,radius: number}} return object
   */
  static get(player: Player): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
    radius: number;
  };
}

/**
 * Actor class
 */
declare class Actor {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the actor retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get actor pointer
   * @returns {number|null} actor pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get actor id
   * @returns {number|null} actor id
   */
  getID(): number | null;
  /**
   * @method isStreamedInFor
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  isStreamedInFor(player: Player): boolean;
  /**
   * @method setVirtualWorld
   * @param {number} vw
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setVirtualWorld(vw: number): boolean;
  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the actor is invalid
   */
  getVirtualWorld(): number;
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
  ): boolean;
  /**
   * @method clearAnimations
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  clearAnimations(): boolean;
  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setPos(x: number, y: number, z: number): boolean;
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the actor is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method setFacingAngle
   * @param {number} angle
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setFacingAngle(angle: number): boolean;
  /**
   * @method getFacingAngle
   * @returns {number}
   * @throws Will throw an error if the actor is invalid
   */
  getFacingAngle(): number;
  /**
   * @method setHealth
   * @param {number} hp
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setHealth(hp: number): boolean;
  /**
   * @method getHealth
   * @returns {number}
   * @throws Will throw an error if the actor is invalid
   */
  getHealth(): number;
  /**
   * @method setInvulnerable
   * @param {boolean} toggle
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setInvulnerable(toggle: boolean): boolean;
  /**
   * @method isInvulnerable
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  isInvulnerable(): boolean;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  isValid(): boolean;
  /**
   * @method setSkin
   * @param {number} skin
   * @returns {boolean}
   * @throws Will throw an error if the actor is invalid
   */
  setSkin(skin: number): boolean;
  /**
   * @method getSkin
   * @returns {number}
   * @throws Will throw an error if the actor is invalid
   */
  getSkin(): number;
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
  };
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
  };
  #private;
}

/**
 * GangZone class
 */
declare class GangZone {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the gangZone retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get gangZone pointer
   * @returns {number|null} gangZone pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get gangZone id
   * @returns {number|null} gangZone id
   */
  getID(): number | null;
  /**
   * @method showForPlayer
   * @param {Player} player
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  showForPlayer(player: Player, color: number): boolean;
  /**
   * @method showForAll
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  showForAll(color: number): boolean;
  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  hideForPlayer(player: Player): boolean;
  /**
   * @method hideForAll
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  hideForAll(): boolean;
  /**
   * @method flashForPlayer
   * @param {Player} player
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  flashForPlayer(player: Player, color: number): boolean;
  /**
   * @method flashForAll
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  flashForAll(color: number): boolean;
  /**
   * @method stopFlashForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  stopFlashForPlayer(player: Player): boolean;
  /**
   * @method stopFlashForAll
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  stopFlashForAll(): boolean;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  isValid(): boolean;
  /**
   * @method isPlayerIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  isPlayerIn(player: Player): boolean;
  /**
   * @method isVisibleForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  isVisibleForPlayer(player: Player): boolean;
  /**
   * @method getColorForPlayer
   * @param {Player} player
   * @returns {number}
   * @throws Will throw an error if the gangZone is invalid
   */
  getColorForPlayer(player: Player): number;
  /**
   * @method getFlashColorForPlayer
   * @param {Player} player
   * @returns {number}
   * @throws Will throw an error if the gangZone is invalid
   */
  getFlashColorForPlayer(player: Player): number;
  /**
   * @method isFlashingForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  isFlashingForPlayer(player: Player): boolean;
  /**
   * @method getPos
   * @returns {{ret: boolean, minx: number,miny: number,maxx: number,maxy: number}} return object
   * @throws Will throw an error if the gangZone is invalid
   */
  getPos(): {
    ret: boolean;
    minx: number;
    miny: number;
    maxx: number;
    maxy: number;
  };
  /**
   * @method useCheck
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the gangZone is invalid
   */
  useCheck(enable: boolean): boolean;
  #private;
}

/**
 * Menu class
 */
declare class Menu {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the menu retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get menu pointer
   * @returns {number|null} menu pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get menu id
   * @returns {number|null} menu id
   */
  getID(): number | null;
  /**
   * @method addItem
   * @param {number} column
   * @param {string} text
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  addItem(column: number, text: string): number;
  /**
   * @method setColumnHeader
   * @param {number} column
   * @param {string} headerTitle
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  setColumnHeader(column: number, headerTitle: string): boolean;
  /**
   * @method showForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  showForPlayer(player: Player): boolean;
  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  hideForPlayer(player: Player): boolean;
  /**
   * @method disable
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  disable(): boolean;
  /**
   * @method disableRow
   * @param {number} row
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  disableRow(row: number): boolean;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isValid(): boolean;
  /**
   * @method isDisabled
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isDisabled(): boolean;
  /**
   * @method isRowDisabled
   * @param {number} row
   * @returns {boolean}
   * @throws Will throw an error if the menu is invalid
   */
  isRowDisabled(row: number): boolean;
  /**
   * @method getColumns
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  getColumns(): number;
  /**
   * @method getItems
   * @param {number} column
   * @returns {number}
   * @throws Will throw an error if the menu is invalid
   */
  getItems(column: number): number;
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
  };
  /**
   * @method getColumnWidth
   * @returns {{ret: boolean, column1Width: number,column2Width: number}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getColumnWidth(): {
    ret: boolean;
    column1Width: number;
    column2Width: number;
  };
  /**
   * @method getColumnHeader
   * @param {number} column
   * @returns {{ret: boolean, header: string}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getColumnHeader(column: number): {
    ret: boolean;
    header: string;
  };
  /**
   * @method getItem
   * @param {number} column
   * @param {number} row
   * @returns {{ret: boolean, item: string}} return object
   * @throws Will throw an error if the menu is invalid
   */
  getItem(
    column: number,
    row: number
  ): {
    ret: boolean;
    item: string;
  };
  #private;
}

/**
 * ObjectMp class
 */
declare class ObjectMp {
  /**
   * @method beginSelecting
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  static beginSelecting(player: Player): boolean;
  /**
   * @method endEditing
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  static endEditing(player: Player): boolean;
  /**
   * @method getType
   * @param {Player} player
   * @param {number} objectid
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  static getType(player: Player, objectid: number): number;
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the object retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get object pointer
   * @returns {number|null} object pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get object id
   * @returns {number|null} object id
   */
  getID(): number | null;
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
    vehicle: Vehicle,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): boolean;
  /**
   * @method attachToObject
   * @param {ObjectMp} objAttachedTo
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
    objAttachedTo: ObjectMp,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    syncRotation: boolean
  ): boolean;
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
    player: Player,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): boolean;
  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setPos(x: number, y: number, z: number): boolean;
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method setRot
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setRot(rotationX: number, rotationY: number, rotationZ: number): boolean;
  /**
   * @method getRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getRot(): {
    ret: boolean;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  };
  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getModel(): number;
  /**
   * @method setNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setNoCameraCollision(): boolean;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isValid(): boolean;
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
  move(
    x: number,
    y: number,
    z: number,
    speed: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): number;
  /**
   * @method stop
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  stop(): boolean;
  /**
   * @method isMoving
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isMoving(): boolean;
  /**
   * @method beginEditing
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  beginEditing(player: Player): boolean;
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
    materialIndex: number,
    modelId: number,
    textureLibrary: string,
    textureName: string,
    materialColor: number
  ): boolean;
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
    text: string,
    materialIndex: number,
    materialSize: number,
    fontface: string,
    fontsize: number,
    bold: boolean,
    fontColor: number,
    backgroundColor: number,
    textalignment: number
  ): boolean;
  /**
   * @method setDefaultCameraCollision
   * @param {boolean} disable
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  setDefaultCameraCollision(disable: boolean): boolean;
  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getDrawDistance(): number;
  /**
   * @method getMoveSpeed
   * @returns {number}
   * @throws Will throw an error if the object is invalid
   */
  getMoveSpeed(): number;
  /**
   * @method getMovingTargetPos
   * @returns {{ret: boolean, targetX: number,targetY: number,targetZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMovingTargetPos(): {
    ret: boolean;
    targetX: number;
    targetY: number;
    targetZ: number;
  };
  /**
   * @method getMovingTargetRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMovingTargetRot(): {
    ret: boolean;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  };
  /**
   * @method getAttachedData
   * @returns {{ret: boolean, parentVehicle: number,parentObject: number,parentPlayer: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getAttachedData(): {
    ret: boolean;
    parentVehicle: number;
    parentObject: number;
    parentPlayer: number;
  };
  /**
   * @method getAttachedOffset
   * @returns {{ret: boolean, offsetX: number,offsetY: number,offsetZ: number,rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getAttachedOffset(): {
    ret: boolean;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  };
  /**
   * @method getSyncRotation
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  getSyncRotation(): boolean;
  /**
   * @method isMaterialSlotUsed
   * @param {number} materialIndex
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isMaterialSlotUsed(materialIndex: number): boolean;
  /**
   * @method getMaterial
   * @param {number} materialIndex
   * @returns {{ret: boolean, modelid: number,textureLibrary: string,textureName: string,materialColor: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMaterial(materialIndex: number): {
    ret: boolean;
    modelid: number;
    textureLibrary: string;
    textureName: string;
    materialColor: number;
  };
  /**
   * @method getMaterialText
   * @param {number} materialIndex
   * @returns {{ret: boolean, text: string,materialSize: number,fontFace: string,fontSize: number,bold: boolean,fontColor: number,backgroundColor: number,textAlignment: number}} return object
   * @throws Will throw an error if the object is invalid
   */
  getMaterialText(materialIndex: number): {
    ret: boolean;
    text: string;
    materialSize: number;
    fontFace: string;
    fontSize: number;
    bold: boolean;
    fontColor: number;
    backgroundColor: number;
    textAlignment: number;
  };
  /**
   * @method isObjectNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the object is invalid
   */
  isObjectNoCameraCollision(): boolean;
  #private;
}

/**
 * Pickup class
 */
declare class Pickup {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the pickup retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get pickup pointer
   * @returns {number|null} pickup pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get pickup id
   * @returns {number|null} pickup id
   */
  getID(): number | null;
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
  addStatic(
    model: number,
    type: number,
    x: number,
    y: number,
    z: number,
    virtualWorld: number
  ): boolean;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isValid(): boolean;
  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isStreamedIn(player: Player): boolean;
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the pickup is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getModel(): number;
  /**
   * @method getType
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getType(): number;
  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the pickup is invalid
   */
  getVirtualWorld(): number;
  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setPos(x: number, y: number, z: number, update: boolean): boolean;
  /**
   * @method setModel
   * @param {number} model
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setModel(model: number, update: boolean): boolean;
  /**
   * @method setType
   * @param {number} type
   * @param {boolean} update
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setType(type: number, update: boolean): boolean;
  /**
   * @method setVirtualWorld
   * @param {number} virtualworld
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  setVirtualWorld(virtualworld: number): boolean;
  /**
   * @method showForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  showForPlayer(player: Player): boolean;
  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  hideForPlayer(player: Player): boolean;
  /**
   * @method isHiddenForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the pickup is invalid
   */
  isHiddenForPlayer(player: Player): boolean;
  #private;
}

/**
 * PlayerObject class
 */
declare class PlayerObject {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the playerObject retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPlayer
   * @description get entity's player
   * @returns {Player|null} playerObject of current entity
   */
  getPlayer(): Player | null;
  /**
   * @method getPtr
   * @description get playerObject pointer
   * @returns {number|null} playerObject pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get playerObject id
   * @returns {number|null} playerObject id
   */
  getID(): number | null;
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
   * @throws Will throw an error if the playerObject is invalid
   */
  attachToVehicle(
    vehicle: Vehicle,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): boolean;
  /**
   * @method attachToPlayer
   * @param {Player} playerAttachedTo
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  attachToPlayer(
    playerAttachedTo: Player,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): boolean;
  /**
   * @method attachToObject
   * @param {PlayerObject} attachedTo
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  attachToObject(
    attachedTo: PlayerObject,
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): boolean;
  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  setPos(x: number, y: number, z: number): boolean;
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method setRot
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  setRot(rotationX: number, rotationY: number, rotationZ: number): boolean;
  /**
   * @method getRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getRot(): {
    ret: boolean;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  };
  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the playerObject is invalid
   */
  getModel(): number;
  /**
   * @method setNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  setNoCameraCollision(): boolean;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  isValid(): boolean;
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
   * @throws Will throw an error if the playerObject is invalid
   */
  move(
    x: number,
    y: number,
    z: number,
    speed: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ): number;
  /**
   * @method stop
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  stop(): boolean;
  /**
   * @method isMoving
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  isMoving(): boolean;
  /**
   * @method beginEditing
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  beginEditing(): boolean;
  /**
   * @method setMaterial
   * @param {number} materialIndex
   * @param {number} modelId
   * @param {string} textureLibrary
   * @param {string} textureName
   * @param {number} materialColor
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  setMaterial(
    materialIndex: number,
    modelId: number,
    textureLibrary: string,
    textureName: string,
    materialColor: number
  ): boolean;
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
   * @throws Will throw an error if the playerObject is invalid
   */
  setMaterialText(
    text: string,
    materialIndex: number,
    materialSize: number,
    fontface: string,
    fontsize: number,
    bold: boolean,
    fontColor: number,
    backgroundColor: number,
    textalignment: number
  ): boolean;
  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the playerObject is invalid
   */
  getDrawDistance(): number;
  /**
   * @method getMoveSpeed
   * @returns {number}
   * @throws Will throw an error if the playerObject is invalid
   */
  getMoveSpeed(): number;
  /**
   * @method getMovingTargetPos
   * @returns {{ret: boolean, targetX: number,targetY: number,targetZ: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getMovingTargetPos(): {
    ret: boolean;
    targetX: number;
    targetY: number;
    targetZ: number;
  };
  /**
   * @method getMovingTargetRot
   * @returns {{ret: boolean, rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getMovingTargetRot(): {
    ret: boolean;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  };
  /**
   * @method getAttachedData
   * @returns {{ret: boolean, parentVehicle: number,parentObject: number,parentPlayer: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getAttachedData(): {
    ret: boolean;
    parentVehicle: number;
    parentObject: number;
    parentPlayer: number;
  };
  /**
   * @method getAttachedOffset
   * @returns {{ret: boolean, offsetX: number,offsetY: number,offsetZ: number,rotationX: number,rotationY: number,rotationZ: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getAttachedOffset(): {
    ret: boolean;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  };
  /**
   * @method getSyncRotation
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  getSyncRotation(): boolean;
  /**
   * @method isMaterialSlotUsed
   * @param {number} materialIndex
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  isMaterialSlotUsed(materialIndex: number): boolean;
  /**
   * @method getMaterial
   * @param {number} materialIndex
   * @returns {{ret: boolean, modelid: number,textureLibrary: string,textureName: string,materialColor: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getMaterial(materialIndex: number): {
    ret: boolean;
    modelid: number;
    textureLibrary: string;
    textureName: string;
    materialColor: number;
  };
  /**
   * @method getMaterialText
   * @param {number} materialIndex
   * @returns {{ret: boolean, text: string,materialSize: number,fontFace: string,fontSize: number,bold: boolean,fontColor: number,backgroundColor: number,textAlignment: number}} return object
   * @throws Will throw an error if the playerObject is invalid
   */
  getMaterialText(materialIndex: number): {
    ret: boolean;
    text: string;
    materialSize: number;
    fontFace: string;
    fontSize: number;
    bold: boolean;
    fontColor: number;
    backgroundColor: number;
    textAlignment: number;
  };
  /**
   * @method isNoCameraCollision
   * @returns {boolean}
   * @throws Will throw an error if the playerObject is invalid
   */
  isNoCameraCollision(): boolean;
  #private;
}

/**
 * PlayerTextDraw class
 */
declare class PlayerTextDraw {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the playerTextDraw retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPlayer
   * @description get entity's player
   * @returns {Player|null} playerTextDraw of current entity
   */
  getPlayer(): Player | null;
  /**
   * @method getPtr
   * @description get playerTextDraw pointer
   * @returns {number|null} playerTextDraw pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get playerTextDraw id
   * @returns {number|null} playerTextDraw id
   */
  getID(): number | null;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isValid(): boolean;
  /**
   * @method isVisible
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isVisible(): boolean;
  /**
   * @method setLetterSize
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setLetterSize(x: number, y: number): boolean;
  /**
   * @method setTextSize
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setTextSize(x: number, y: number): boolean;
  /**
   * @method setAlignment
   * @param {number} alignment
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setAlignment(alignment: number): boolean;
  /**
   * @method setColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setColor(color: number): boolean;
  /**
   * @method useBox
   * @param {boolean} use
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  useBox(use: boolean): boolean;
  /**
   * @method setBoxColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setBoxColor(color: number): boolean;
  /**
   * @method setShadow
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setShadow(size: number): boolean;
  /**
   * @method setOutline
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setOutline(size: number): boolean;
  /**
   * @method setBackgroundColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setBackgroundColor(color: number): boolean;
  /**
   * @method setFont
   * @param {number} font
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setFont(font: number): boolean;
  /**
   * @method setProportional
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setProportional(set: boolean): boolean;
  /**
   * @method setSelectable
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setSelectable(set: boolean): boolean;
  /**
   * @method show
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  show(): boolean;
  /**
   * @method hide
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  hide(): boolean;
  /**
   * @method setString
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setString(text: string): boolean;
  /**
   * @method setPreviewModel
   * @param {number} model
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewModel(model: number): boolean;
  /**
   * @method setPreviewRot
   * @param {number} rx
   * @param {number} ry
   * @param {number} rz
   * @param {number} zoom
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewRot(rx: number, ry: number, rz: number, zoom: number): boolean;
  /**
   * @method setPreviewVehCol
   * @param {number} color1
   * @param {number} color2
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPreviewVehCol(color1: number, color2: number): boolean;
  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  setPos(x: number, y: number): boolean;
  /**
   * @method getString
   * @returns {{ret: boolean, text: string}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getString(): {
    ret: boolean;
    text: string;
  };
  /**
   * @method getLetterSize
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getLetterSize(): {
    ret: boolean;
    x: number;
    y: number;
  };
  /**
   * @method getTextSize
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getTextSize(): {
    ret: boolean;
    x: number;
    y: number;
  };
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
  };
  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getColor(): number;
  /**
   * @method getBoxColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getBoxColor(): number;
  /**
   * @method getBackgroundColor
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getBackgroundColor(): number;
  /**
   * @method getShadow
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getShadow(): number;
  /**
   * @method getOutline
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getOutline(): number;
  /**
   * @method getFont
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getFont(): number;
  /**
   * @method isBox
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isBox(): boolean;
  /**
   * @method isProportional
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isProportional(): boolean;
  /**
   * @method isSelectable
   * @returns {boolean}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  isSelectable(): boolean;
  /**
   * @method getAlignment
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getAlignment(): number;
  /**
   * @method getPreviewModel
   * @returns {number}
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewModel(): number;
  /**
   * @method getPreviewRot
   * @returns {{ret: boolean, rx: number,ry: number,rz: number,zoom: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewRot(): {
    ret: boolean;
    rx: number;
    ry: number;
    rz: number;
    zoom: number;
  };
  /**
   * @method getPreviewVehColor
   * @returns {{ret: boolean, color1: number,color2: number}} return object
   * @throws Will throw an error if the playerTextDraw is invalid
   */
  getPreviewVehColor(): {
    ret: boolean;
    color1: number;
    color2: number;
  };
  #private;
}

/**
 * PlayerTextLabel class
 */
declare class PlayerTextLabel {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the playerTextLabel retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPlayer
   * @description get entity's player
   * @returns {Player|null} playerTextLabel of current entity
   */
  getPlayer(): Player | null;
  /**
   * @method getPtr
   * @description get playerTextLabel pointer
   * @returns {number|null} playerTextLabel pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get playerTextLabel id
   * @returns {number|null} playerTextLabel id
   */
  getID(): number | null;
  /**
   * @method updateText
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  updateText(color: number, text: string): boolean;
  /**
   * @method isValid
   * @returns {{ret: boolean, valid: boolean}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  isValid(): {
    ret: boolean;
    valid: boolean;
  };
  /**
   * @method getText
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getText(): {
    ret: boolean;
    output: string;
  };
  /**
   * @method getColor
   * @returns {{ret: boolean, color: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getColor(): {
    ret: boolean;
    color: number;
  };
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method setDrawDistance
   * @param {number} distance
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  setDrawDistance(distance: number): boolean;
  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getDrawDistance(): number;
  /**
   * @method getLOS
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getLOS(): boolean;
  /**
   * @method setLOS
   * @param {boolean} status
   * @returns {boolean}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  setLOS(status: boolean): boolean;
  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getVirtualWorld(): number;
  /**
   * @method getAttachedData
   * @returns {{ret: boolean, attached_player: number,attached_vehicle: number}} return object
   * @throws Will throw an error if the playerTextLabel is invalid
   */
  getAttachedData(): {
    ret: boolean;
    attached_player: number;
    attached_vehicle: number;
  };
  #private;
}

/**
 * RaceCheckpoint class
 */
declare class RaceCheckpoint {
  /**
   * @method set
   * @param {Player} player
   * @param {number} type
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} nextX
   * @param {number} nextY
   * @param {number} nextZ
   * @param {number} radius
   * @returns {boolean}
   */
  static set(
    player: Player,
    type: number,
    x: number,
    y: number,
    z: number,
    nextX: number,
    nextY: number,
    nextZ: number,
    radius: number
  ): boolean;
  /**
   * @method disable
   * @param {Player} player
   * @returns {boolean}
   */
  static disable(player: Player): boolean;
  /**
   * @method isPlayerIn
   * @param {Player} player
   * @returns {boolean}
   */
  static isPlayerIn(player: Player): boolean;
  /**
   * @method isActive
   * @param {Player} player
   * @returns {boolean}
   */
  static isActive(player: Player): boolean;
  /**
   * @method get
   * @param {Player} player
   * @returns {{ret: boolean, x: number,y: number,z: number,nextX: number,nextY: number,nextZ: number,radius: number}} return object
   */
  static get(player: Player): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
    nextX: number;
    nextY: number;
    nextZ: number;
    radius: number;
  };
}

/**
 * Recording class
 */
declare class Recording {
  /**
   * @method start
   * @param {Player} player
   * @param {number} type
   * @param {string} file
   * @returns {boolean}
   */
  static start(player: Player, type: number, file: string): boolean;
  /**
   * @method stop
   * @param {Player} player
   * @returns {boolean}
   */
  static stop(player: Player): boolean;
}

/**
 * TextDraw class
 */
declare class TextDraw {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the textDraw retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get textDraw pointer
   * @returns {number|null} textDraw pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get textDraw id
   * @returns {number|null} textDraw id
   */
  getID(): number | null;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isValid(): boolean;
  /**
   * @method isVisibleForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isVisibleForPlayer(player: Player): boolean;
  /**
   * @method setLetterSize
   * @param {number} sizeX
   * @param {number} sizeY
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setLetterSize(sizeX: number, sizeY: number): boolean;
  /**
   * @method setTextSize
   * @param {number} sizeX
   * @param {number} sizeY
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setTextSize(sizeX: number, sizeY: number): boolean;
  /**
   * @method setAlignment
   * @param {number} alignment
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setAlignment(alignment: number): boolean;
  /**
   * @method setColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setColor(color: number): boolean;
  /**
   * @method setUseBox
   * @param {boolean} use
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setUseBox(use: boolean): boolean;
  /**
   * @method setBoxColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setBoxColor(color: number): boolean;
  /**
   * @method setShadow
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setShadow(size: number): boolean;
  /**
   * @method setOutline
   * @param {number} size
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setOutline(size: number): boolean;
  /**
   * @method setBackgroundColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setBackgroundColor(color: number): boolean;
  /**
   * @method setFont
   * @param {number} font
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setFont(font: number): boolean;
  /**
   * @method setSetProportional
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setSetProportional(set: boolean): boolean;
  /**
   * @method setSelectable
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setSelectable(set: boolean): boolean;
  /**
   * @method showForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  showForPlayer(player: Player): boolean;
  /**
   * @method hideForPlayer
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  hideForPlayer(player: Player): boolean;
  /**
   * @method showForAll
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  showForAll(): boolean;
  /**
   * @method hideForAll
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  hideForAll(): boolean;
  /**
   * @method setString
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setString(text: string): boolean;
  /**
   * @method setPreviewModel
   * @param {number} model
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setPreviewModel(model: number): boolean;
  /**
   * @method setPreviewRot
   * @param {number} rotationX
   * @param {number} rotationY
   * @param {number} rotationZ
   * @param {number} zoom
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setPreviewRot(
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    zoom: number
  ): boolean;
  /**
   * @method setPreviewVehCol
   * @param {number} color1
   * @param {number} color2
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setPreviewVehCol(color1: number, color2: number): boolean;
  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setPos(x: number, y: number): boolean;
  /**
   * @method getString
   * @returns {{ret: boolean, text: string}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getString(): {
    ret: boolean;
    text: string;
  };
  /**
   * @method getLetterSize
   * @returns {{ret: boolean, sizeX: number,sizeY: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getLetterSize(): {
    ret: boolean;
    sizeX: number;
    sizeY: number;
  };
  /**
   * @method getTextSize
   * @returns {{ret: boolean, sizeX: number,sizeY: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getTextSize(): {
    ret: boolean;
    sizeX: number;
    sizeY: number;
  };
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
  };
  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getColor(): number;
  /**
   * @method getBoxColor
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getBoxColor(): number;
  /**
   * @method getBackgroundColor
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getBackgroundColor(): number;
  /**
   * @method getShadow
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getShadow(): number;
  /**
   * @method getOutline
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getOutline(): number;
  /**
   * @method getFont
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getFont(): number;
  /**
   * @method isBox
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isBox(): boolean;
  /**
   * @method isProportional
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isProportional(): boolean;
  /**
   * @method isSelectable
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  isSelectable(): boolean;
  /**
   * @method getAlignment
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getAlignment(): number;
  /**
   * @method getPreviewModel
   * @returns {number}
   * @throws Will throw an error if the textDraw is invalid
   */
  getPreviewModel(): number;
  /**
   * @method getPreviewRot
   * @returns {{ret: boolean, x: number,y: number,z: number,zoom: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getPreviewRot(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
    zoom: number;
  };
  /**
   * @method getPreviewVehColor
   * @returns {{ret: boolean, color1: number,color2: number}} return object
   * @throws Will throw an error if the textDraw is invalid
   */
  getPreviewVehColor(): {
    ret: boolean;
    color1: number;
    color2: number;
  };
  /**
   * @method setStringForPlayer
   * @param {Player} player
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the textDraw is invalid
   */
  setStringForPlayer(player: Player, text: string): boolean;
  #private;
}

/**
 * TextLabel class
 */
declare class TextLabel {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the textLabel retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get textLabel pointer
   * @returns {number|null} textLabel pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get textLabel id
   * @returns {number|null} textLabel id
   */
  getID(): number | null;
  /**
   * @method attachToPlayer
   * @param {Player} player
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  attachToPlayer(
    player: Player,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ): boolean;
  /**
   * @method attachToVehicle
   * @param {Vehicle} vehicle
   * @param {number} offsetX
   * @param {number} offsetY
   * @param {number} offsetZ
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  attachToVehicle(
    vehicle: Vehicle,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ): boolean;
  /**
   * @method updateText
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  updateText(color: number, text: string): boolean;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  isValid(): boolean;
  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  isStreamedIn(player: Player): boolean;
  /**
   * @method getText
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getText(): {
    ret: boolean;
    output: string;
  };
  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getColor(): number;
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method setDrawDistance
   * @param {number} distance
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setDrawDistance(distance: number): boolean;
  /**
   * @method getDrawDistance
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getDrawDistance(): number;
  /**
   * @method getLOS
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  getLOS(): boolean;
  /**
   * @method setLOS
   * @param {boolean} status
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setLOS(status: boolean): boolean;
  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the textLabel is invalid
   */
  getVirtualWorld(): number;
  /**
   * @method setVirtualWorld
   * @param {number} world
   * @returns {boolean}
   * @throws Will throw an error if the textLabel is invalid
   */
  setVirtualWorld(world: number): boolean;
  /**
   * @method getAttachedData
   * @returns {{ret: boolean, attached_player: number,attached_vehicle: number}} return object
   * @throws Will throw an error if the textLabel is invalid
   */
  getAttachedData(): {
    ret: boolean;
    attached_player: number;
    attached_vehicle: number;
  };
  #private;
}

/**
 * Vehicle class
 */
declare class Vehicle {
  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the vehicle retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get vehicle pointer
   * @returns {number|null} vehicle pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get vehicle id
   * @returns {number|null} vehicle id
   */
  getID(): number | null;
  /**
   * @method getMaxPassengerSeats
   * @param {number} modelid
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  static getMaxPassengerSeats(modelid: number): number;
  /**
   * @method isStreamedIn
   * @param {Player} player
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isStreamedIn(player: Player): boolean;
  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getPos(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setPos(x: number, y: number, z: number): boolean;
  /**
   * @method getZAngle
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getZAngle(): number;
  /**
   * @method getRotationQuat
   * @returns {{ret: boolean, w: number,x: number,y: number,z: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getRotationQuat(): {
    ret: boolean;
    w: number;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method getDistanceFromPoint
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getDistanceFromPoint(x: number, y: number, z: number): number;
  /**
   * @method setZAngle
   * @param {number} angle
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setZAngle(angle: number): boolean;
  /**
   * @method setParamsForPlayer
   * @param {Player} player
   * @param {number} objective
   * @param {number} doors
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsForPlayer(player: Player, objective: number, doors: number): boolean;
  /**
   * @method useManualEngineAndLights
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  static useManualEngineAndLights(): boolean;
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
  setParamsEx(
    engine: number,
    lights: number,
    alarm: number,
    doors: number,
    bonnet: number,
    boot: number,
    objective: number
  ): boolean;
  /**
   * @method getParamsEx
   * @returns {{ret: boolean, engine: number,lights: number,alarm: number,doors: number,bonnet: number,boot: number,objective: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getParamsEx(): {
    ret: boolean;
    engine: number;
    lights: number;
    alarm: number;
    doors: number;
    bonnet: number;
    boot: number;
    objective: number;
  };
  /**
   * @method getParamsSirenState
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getParamsSirenState(): number;
  /**
   * @method setParamsCarDoors
   * @param {number} frontLeft
   * @param {number} frontRight
   * @param {number} rearLeft
   * @param {number} rearRight
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsCarDoors(
    frontLeft: number,
    frontRight: number,
    rearLeft: number,
    rearRight: number
  ): boolean;
  /**
   * @method getParamsCarDoors
   * @returns {{ret: boolean, frontLeft: number,frontRight: number,rearLeft: number,rearRight: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getParamsCarDoors(): {
    ret: boolean;
    frontLeft: number;
    frontRight: number;
    rearLeft: number;
    rearRight: number;
  };
  /**
   * @method setParamsCarWindows
   * @param {number} frontLeft
   * @param {number} frontRight
   * @param {number} rearLeft
   * @param {number} rearRight
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsCarWindows(
    frontLeft: number,
    frontRight: number,
    rearLeft: number,
    rearRight: number
  ): boolean;
  /**
   * @method getParamsCarWindows
   * @returns {{ret: boolean, frontLeft: number,frontRight: number,rearLeft: number,rearRight: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getParamsCarWindows(): {
    ret: boolean;
    frontLeft: number;
    frontRight: number;
    rearLeft: number;
    rearRight: number;
  };
  /**
   * @method setToRespawn
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setToRespawn(): boolean;
  /**
   * @method linkToInterior
   * @param {number} interiorid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  linkToInterior(interiorid: number): boolean;
  /**
   * @method addComponent
   * @param {number} componentid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  addComponent(componentid: number): boolean;
  /**
   * @method removeComponent
   * @param {number} componentid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  removeComponent(componentid: number): boolean;
  /**
   * @method changeColor
   * @param {number} color1
   * @param {number} color2
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  changeColor(color1: number, color2: number): boolean;
  /**
   * @method changePaintjob
   * @param {number} paintjobid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  changePaintjob(paintjobid: number): boolean;
  /**
   * @method setHealth
   * @param {number} health
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setHealth(health: number): boolean;
  /**
   * @method getHealth
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getHealth(): number;
  /**
   * @method attachTrailer
   * @param {Vehicle} trailer
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  attachTrailer(trailer: Vehicle): boolean;
  /**
   * @method detachTrailer
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  detachTrailer(): boolean;
  /**
   * @method isTrailerAttached
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isTrailerAttached(): boolean;
  /**
   * @method getTrailer
   * @returns {Vehicle}
   * @throws Will throw an error if the vehicle is invalid
   */
  getTrailer(): Vehicle;
  /**
   * @method setNumberPlate
   * @param {string} numberPlate
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setNumberPlate(numberPlate: string): boolean;
  /**
   * @method getModel
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getModel(): number;
  /**
   * @method getComponentInSlot
   * @param {number} slot
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getComponentInSlot(slot: number): number;
  /**
   * @method getComponentType
   * @param {number} componentid
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  static getComponentType(componentid: number): number;
  /**
   * @method canHaveComponent
   * @param {number} modelid
   * @param {number} componentid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  static canHaveComponent(modelid: number, componentid: number): boolean;
  /**
   * @method getRandomColorPair
   * @param {number} modelid
   * @returns {{ret: boolean, color1: number,color2: number,color3: number,color4: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  static getRandomColorPair(modelid: number): {
    ret: boolean;
    color1: number;
    color2: number;
    color3: number;
    color4: number;
  };
  /**
   * @method colorIndexToColor
   * @param {number} colorIndex
   * @param {number} alpha
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  static colorIndexToColor(colorIndex: number, alpha: number): number;
  /**
   * @method repair
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  repair(): boolean;
  /**
   * @method getVelocity
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getVelocity(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method setVelocity
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setVelocity(x: number, y: number, z: number): boolean;
  /**
   * @method setAngularVelocity
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setAngularVelocity(x: number, y: number, z: number): boolean;
  /**
   * @method getDamageStatus
   * @returns {{ret: boolean, panels: number,doors: number,lights: number,tires: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getDamageStatus(): {
    ret: boolean;
    panels: number;
    doors: number;
    lights: number;
    tires: number;
  };
  /**
   * @method updateDamageStatus
   * @param {number} panels
   * @param {number} doors
   * @param {number} lights
   * @param {number} tires
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  updateDamageStatus(
    panels: number,
    doors: number,
    lights: number,
    tires: number
  ): boolean;
  /**
   * @method getModelInfo
   * @param {number} vehiclemodel
   * @param {number} infotype
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  static getModelInfo(
    vehiclemodel: number,
    infotype: number
  ): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
  };
  /**
   * @method setVirtualWorld
   * @param {number} virtualWorld
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setVirtualWorld(virtualWorld: number): boolean;
  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getVirtualWorld(): number;
  /**
   * @method getLandingGearState
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getLandingGearState(): number;
  /**
   * @method isValid
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isValid(): boolean;
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
  addStatic(
    modelid: number,
    x: number,
    y: number,
    z: number,
    angle: number,
    color1: number,
    color2: number
  ): {
    ret: boolean;
    id: number;
  };
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
  addStaticEx(
    modelid: number,
    x: number,
    y: number,
    z: number,
    angle: number,
    color1: number,
    color2: number,
    respawnDelay: number,
    addSiren: boolean
  ): {
    ret: boolean;
    id: number;
  };
  /**
   * @method enableFriendlyFire
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  static enableFriendlyFire(): boolean;
  /**
   * @method getSpawnInfo
   * @returns {{ret: boolean, x: number,y: number,z: number,rotation: number,color1: number,color2: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getSpawnInfo(): {
    ret: boolean;
    x: number;
    y: number;
    z: number;
    rotation: number;
    color1: number;
    color2: number;
  };
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
    modelid: number,
    x: number,
    y: number,
    z: number,
    rotation: number,
    color1: number,
    color2: number,
    respawn_time: number,
    interior: number
  ): boolean;
  /**
   * @method getModelCount
   * @param {number} modelid
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  static getModelCount(modelid: number): number;
  /**
   * @method getModelsUsed
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  static getModelsUsed(): number;
  /**
   * @method getPaintjob
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getPaintjob(): number;
  /**
   * @method getColor
   * @returns {{ret: boolean, color1: number,color2: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getColor(): {
    ret: boolean;
    color1: number;
    color2: number;
  };
  /**
   * @method getInterior
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getInterior(): number;
  /**
   * @method getNumberPlate
   * @returns {{ret: boolean, numberPlate: string}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getNumberPlate(): {
    ret: boolean;
    numberPlate: string;
  };
  /**
   * @method setRespawnDelay
   * @param {number} respawn_delay
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setRespawnDelay(respawn_delay: number): boolean;
  /**
   * @method getRespawnDelay
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getRespawnDelay(): number;
  /**
   * @method getCab
   * @returns {Vehicle}
   * @throws Will throw an error if the vehicle is invalid
   */
  getCab(): Vehicle;
  /**
   * @method getTower
   * @returns {Vehicle}
   * @throws Will throw an error if the vehicle is invalid
   */
  getTower(): Vehicle;
  /**
   * @method getOccupiedTick
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getOccupiedTick(): number;
  /**
   * @method getRespawnTick
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getRespawnTick(): number;
  /**
   * @method hasBeenOccupied
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  hasBeenOccupied(): boolean;
  /**
   * @method isOccupied
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isOccupied(): boolean;
  /**
   * @method isDead
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isDead(): boolean;
  /**
   * @method setParamsSirenState
   * @param {boolean} siren_state
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  setParamsSirenState(siren_state: boolean): boolean;
  /**
   * @method toggleSirenEnabled
   * @param {boolean} status
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  toggleSirenEnabled(status: boolean): boolean;
  /**
   * @method isSirenEnabled
   * @returns {boolean}
   * @throws Will throw an error if the vehicle is invalid
   */
  isSirenEnabled(): boolean;
  /**
   * @method getLastDriver
   * @returns {Player}
   * @throws Will throw an error if the vehicle is invalid
   */
  getLastDriver(): Player;
  /**
   * @method getDriver
   * @returns {Player}
   * @throws Will throw an error if the vehicle is invalid
   */
  getDriver(): Player;
  /**
   * @method getSirenState
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getSirenState(): number;
  /**
   * @method getHydraReactorAngle
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getHydraReactorAngle(): number;
  /**
   * @method getTrainSpeed
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  getTrainSpeed(): number;
  /**
   * @method getMatrix
   * @returns {{ret: boolean, rightX: number,rightY: number,rightZ: number,upX: number,upY: number,upZ: number,atX: number,atY: number,atZ: number}} return object
   * @throws Will throw an error if the vehicle is invalid
   */
  getMatrix(): {
    ret: boolean;
    rightX: number;
    rightY: number;
    rightZ: number;
    upX: number;
    upY: number;
    upZ: number;
    atX: number;
    atY: number;
    atZ: number;
  };
  /**
   * @method getOccupant
   * @param {number} seat
   * @returns {Player}
   * @throws Will throw an error if the vehicle is invalid
   */
  getOccupant(seat: number): Player;
  /**
   * @method countOccupants
   * @returns {number}
   * @throws Will throw an error if the vehicle is invalid
   */
  countOccupants(): number;
  #private;
}

/**
 * Class class
 */
declare class Class {
  /**
   * @method count
   * @returns {number}
   * @throws Will throw an error if the class is invalid
   */
  static count(): number;

  /**
   * @method destroy
   * @param {number} id
   * @throws Will throw an error if the class retrieval fails
   */
  destroy(): boolean;
  /**
   * @method getPtr
   * @description get class pointer
   * @returns {number|null} class pointer
   */
  getPtr(): number | null;
  /**
   * @method getID
   * @description get class id
   * @returns {number|null} class id
   */
  getID(): number | null;
  /**
   * @method getData
   * @returns {{ret: boolean, teamid: number,skin: number,x: number,y: number,z: number,angle: number,weapon1: number,weapon1_ammo: number,weapon2: number,weapon2_ammo: number,weapon3: number,weapon3_ammo: number}} return object
   * @throws Will throw an error if the class is invalid
   */
  getData(): {
    ret: boolean;
    teamid: number;
    skin: number;
    x: number;
    y: number;
    z: number;
    angle: number;
    weapon1: number;
    weapon1_ammo: number;
    weapon2: number;
    weapon2_ammo: number;
    weapon3: number;
    weapon3_ammo: number;
  };
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
    teamid: number,
    skin: number,
    x: number,
    y: number,
    z: number,
    angle: number,
    weapon1: number,
    ammo1: number,
    weapon2: number,
    ammo2: number,
    weapon3: number,
    ammo3: number
  ): boolean;
  #private;
}

/**
 * Player pool
 */
declare class PlayerPool {
  /**
   * @method at
   * @description Get player instance based on their ID
   * @param {number} id
   * @returns {Player|undefined}
   */
  at(id: number): Player | undefined;
  /**
   * @method get
   * @description Get player instance based on their pointer
   * @param {number} ptr - player pointer
   * @returns {Player|undefined}
   */
  get(ptr: number): Player | undefined;
  /**
   * @method getID
   * @description Get player id based on their pointer
   * @param {number} ptr - player pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get player pointer based on their ID
   * @param {number} id - player ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
  /**
   * @method at
   * @returns {Player[]} a copy of array of players
   */
  all(): Player[];
  /**
   * @method forEach
   * @param {function(Player, number): void} callback - The function to execute for each player.
   */
  forEach(callback: (arg0: Player, arg1: number) => void): void;
  #private;
}

/**
 * Vehicle pool
 */
declare class VehiclePool {
  /**
   * @method at
   * @description Get vehicle instance based on their ID
   * @param {number} id
   * @returns {Vehicle|undefined}
   */
  at(id: number): Vehicle | undefined;
  /**
   * @method get
   * @description Get vehicle instance based on their pointer
   * @param {number} ptr - vehicle pointer
   * @returns {Vehicle|undefined}
   */
  get(ptr: number): Vehicle | undefined;
  /**
   * @method getID
   * @description Get vehicle id based on their pointer
   * @param {number} ptr - vehicle pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get vehicle pointer based on their ID
   * @param {number} id - vehicle ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
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
  new(
    modelid: number,
    x: number,
    y: number,
    z: number,
    rotation: number,
    color1: number,
    color2: number,
    respawnDelay: number,
    addSiren: boolean
  ): Vehicle;
  /**
   * @method all
   * @returns {Vehicle[]} a copy of array of vehicles
   */
  all(): Vehicle[];
  /**
   * @method forEach
   * @param {function(Vehicle, number): void} callback - The function to execute for each vehicle.
   */
  forEach(callback: (arg0: Vehicle, arg1: number) => void): void;
  #private;
}

/**
 * Object pool
 */
declare class ObjectPool {
  /**
   * @method at
   * @description Get object instance based on their ID
   * @param {number} id
   * @returns {ObjectMp|undefined}
   */
  at(id: number): ObjectMp | undefined;
  /**
   * @method get
   * @description Get object instance based on their pointer
   * @param {number} ptr - object pointer
   * @returns {ObjectMp|undefined}
   */
  get(ptr: number): ObjectMp | undefined;
  /**
   * @method getID
   * @description Get object id based on their pointer
   * @param {number} ptr - object pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get object pointer based on their ID
   * @param {number} id - object ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
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
   * @returns {ObjectMp} an ObjectMp instance
   * @throws Will throw an error if the object creation fails
   */
  new(
    modelid: number,
    x: number,
    y: number,
    z: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    drawDistance: number
  ): ObjectMp;
  /**
   * @method all
   * @returns {ObjectMp[]} a copy of array of objects
   */
  all(): ObjectMp[];
  /**
   * @method forEach
   * @param {function(ObjectMp, number): void} callback - The function to execute for each object.
   */
  forEach(callback: (arg0: ObjectMp, arg1: number) => void): void;
  #private;
}

/**
 * TextDraw pool
 */
declare class TextDrawPool {
  /**
   * @method at
   * @description Get textdraw instance based on their ID
   * @param {number} id
   * @returns {TextDraw|undefined}
   */
  at(id: number): TextDraw | undefined;
  /**
   * @method get
   * @description Get textdraw instance based on their pointer
   * @param {number} ptr - textdraw pointer
   * @returns {TextDraw|undefined}
   */
  get(ptr: number): TextDraw | undefined;
  /**
   * @method getID
   * @description Get textdraw id based on their pointer
   * @param {number} ptr - textdraw pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get textdraw pointer based on their ID
   * @param {number} id - textdraw ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
  /**
   * @method new
   * @description Create a new textdraw
   * @param {number} x
   * @param {number} y
   * @param {string} text
   * @returns {TextDraw} a TextDraw instance
   * @throws Will throw an error if the textdraw creation fails
   */
  new(x: number, y: number, text: string): TextDraw;
  /**
   * @method all
   * @returns {TextDraw[]} a copy of array of textdraws
   */
  all(): TextDraw[];
  /**
   * @method forEach
   * @param {function(TextDraw, number): void} callback - The function to execute for each textdraw.
   */
  forEach(callback: (arg0: TextDraw, arg1: number) => void): void;
  #private;
}

/**
 * Pickup pool
 */
declare class PickupPool {
  /**
   * @method at
   * @description Get pickup instance based on their ID
   * @param {number} id
   * @returns {Pickup|undefined}
   */
  at(id: number): Pickup | undefined;
  /**
   * @method get
   * @description Get pickup instance based on their pointer
   * @param {number} ptr - pickup pointer
   * @returns {Pickup|undefined}
   */
  get(ptr: number): Pickup | undefined;
  /**
   * @method getID
   * @description Get pickup id based on their pointer
   * @param {number} ptr - pickup pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get pickup pointer based on their ID
   * @param {number} id - pickup ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
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
  new(
    model: number,
    type: number,
    x: number,
    y: number,
    z: number,
    virtualWorld: number
  ): Pickup;
  /**
   * @method all
   * @returns {Pickup[]} a copy of array of pickups
   */
  all(): Pickup[];
  /**
   * @method forEach
   * @param {function(Pickup, number): void} callback - The function to execute for each pickup.
   */
  forEach(callback: (arg0: Pickup, arg1: number) => void): void;
  #private;
}

/**
 * GangZone pool
 */
declare class GangZonePool {
  /**
   * @method at
   * @description Get gangzone instance based on their ID
   * @param {number} id
   * @returns {GangZone|undefined}
   */
  at(id: number): GangZone | undefined;
  /**
   * @method get
   * @description Get gangzone instance based on their pointer
   * @param {number} ptr - gangzone pointer
   * @returns {GangZone|undefined}
   */
  get(ptr: number): GangZone | undefined;
  /**
   * @method getID
   * @description Get gangzone id based on their pointer
   * @param {number} ptr - gangzone pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get gangzone pointer based on their ID
   * @param {number} id - gangzone ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
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
  new(minx: number, miny: number, maxx: number, maxy: number): GangZone;
  /**
   * @method all
   * @returns {GangZone[]} a copy of array of gangzones
   */
  all(): GangZone[];
  /**
   * @method forEach
   * @param {function(GangZone, number): void} callback - The function to execute for each gangzone.
   */
  forEach(callback: (arg0: GangZone, arg1: number) => void): void;
  #private;
}

/**
 * TextLabel pool
 */
declare class TextLabelPool {
  /**
   * @method at
   * @description Get textlabel instance based on their ID
   * @param {number} id
   * @returns {TextLabel|undefined}
   */
  at(id: number): TextLabel | undefined;
  /**
   * @method get
   * @description Get textlabel instance based on their pointer
   * @param {number} ptr - textlabel pointer
   * @returns {TextLabel|undefined}
   */
  get(ptr: number): TextLabel | undefined;
  /**
   * @method getID
   * @description Get textlabel id based on their pointer
   * @param {number} ptr - textlabel pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get textlabel pointer based on their ID
   * @param {number} id - textlabel ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
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
  new(
    text: string,
    color: number,
    x: number,
    y: number,
    z: number,
    drawDistance: number,
    virtualWorld: number,
    los: boolean
  ): TextLabel;
  /**
   * @method all
   * @returns {TextLabel[]} a copy of array of textlabels
   */
  all(): TextLabel[];
  /**
   * @method forEach
   * @param {function(TextLabel, number): void} callback - The function to execute for each textlabel.
   */
  forEach(callback: (arg0: TextLabel, arg1: number) => void): void;
  #private;
}

/**
 * Actor pool
 */
declare class ActorPool {
  /**
   * @method at
   * @description Get actor instance based on their ID
   * @param {number} id
   * @returns {Actor|undefined}
   */
  at(id: number): Actor | undefined;
  /**
   * @method get
   * @description Get actor instance based on their pointer
   * @param {number} ptr - actor pointer
   * @returns {Actor|undefined}
   */
  get(ptr: number): Actor | undefined;
  /**
   * @method getID
   * @description Get actor id based on their pointer
   * @param {number} ptr - actor pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get actor pointer based on their ID
   * @param {number} id - actor ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
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
  new(model: number, x: number, y: number, z: number, rot: number): Actor;
  /**
   * @method all
   * @returns {Actor[]} a copy of array of actors
   */
  all(): Actor[];
  /**
   * @method forEach
   * @param {function(Actor, number): void} callback - The function to execute for each actor.
   */
  forEach(callback: (arg0: Actor, arg1: number) => void): void;
  #private;
}

/**
 * Menu pool
 */
declare class MenuPool {
  /**
   * @method at
   * @description Get menu instance based on their ID
   * @param {number} id
   * @returns {Menu|undefined}
   */
  at(id: number): Menu | undefined;
  /**
   * @method get
   * @description Get menu instance based on their pointer
   * @param {number} ptr - menu pointer
   * @returns {Menu|undefined}
   */
  get(ptr: number): Menu | undefined;
  /**
   * @method getID
   * @description Get menu id based on their pointer
   * @param {number} ptr - menu pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get menu pointer based on their ID
   * @param {number} id - menu ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
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
  new(
    title: string,
    columns: number,
    x: number,
    y: number,
    column1Width: number,
    column2Width: number
  ): Menu;
  /**
   * @method all
   * @returns {Menu[]} a copy of array of menus
   */
  all(): Menu[];
  /**
   * @method forEach
   * @param {function(Menu, number): void} callback - The function to execute for each menu.
   */
  forEach(callback: (arg0: Menu, arg1: number) => void): void;
  #private;
}

/**
 * PlayerObject pool
 */
declare class PlayerObjectPool {
  /**
   * @method at
   * @description Get player object instance based on their ID
   * @param {number} id
   * @returns {PlayerObject|undefined}
   */
  at(id: number): PlayerObject | undefined;
  /**
   * @method get
   * @description Get player object instance based on their pointer
   * @param {number} ptr - player object pointer
   * @returns {PlayerObject|undefined}
   */
  get(ptr: number): PlayerObject | undefined;
  /**
   * @method getID
   * @description Get player object id based on their pointer
   * @param {number} ptr - player object pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get player object pointer based on their ID
   * @param {number} id - player object ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
  /**
   * @method new
   * @description Create a new player object
   * @param {Player} player
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
  new(
    player: Player,
    modelid: number,
    x: number,
    y: number,
    z: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    drawDistance: number
  ): PlayerObject;
  /**
   * @method all
   * @returns {PlayerObject[]} a copy of array of player objects
   */
  all(): PlayerObject[];
  /**
   * @method forEach
   * @param {function(PlayerObject, number): void} callback - The function to execute for each player object.
   */
  forEach(callback: (arg0: PlayerObject, arg1: number) => void): void;
  #private;
}

/**
 * PlayerTextLabel pool
 */
declare class PlayerTextLabelPool {
  /**
   * @method at
   * @description Get player textlabel instance based on their ID
   * @param {number} id
   * @returns {PlayerTextLabel|undefined}
   */
  at(id: number): PlayerTextLabel | undefined;
  /**
   * @method get
   * @description Get player textlabel instance based on their pointer
   * @param {number} ptr - player textlabel pointer
   * @returns {PlayerTextLabel|undefined}
   */
  get(ptr: number): PlayerTextLabel | undefined;
  /**
   * @method getID
   * @description Get player textlabel id based on their pointer
   * @param {number} ptr - player textlabel pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get player textlabel pointer based on their ID
   * @param {number} id - player textlabel ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
  /**
   * @method new
   * @description Create a new player textlabel
   * @param {Player} player
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
    player: Player,
    text: string,
    color: number,
    x: number,
    y: number,
    z: number,
    drawDistance: number,
    attachedPlayer: Player,
    attachedVehicle: Player,
    los: boolean
  ): PlayerTextLabel;
  /**
   * @method all
   * @returns {PlayerTextLabel[]} a copy of array of player textlabels
   */
  all(): PlayerTextLabel[];
  /**
   * @method forEach
   * @param {function(PlayerTextLabel, number): void} callback - The function to execute for each player textlabel.
   */
  forEach(callback: (arg0: PlayerTextLabel, arg1: number) => void): void;
  #private;
}

/**
 * PlayerTextDraw pool
 */
declare class PlayerTextDrawPool {
  /**
   * @method at
   * @description Get player textdraw instance based on their ID
   * @param {number} id
   * @returns {PlayerTextDraw|undefined}
   */
  at(id: number): PlayerTextDraw | undefined;
  /**
   * @method get
   * @description Get player textdraw instance based on their pointer
   * @param {number} ptr - player textdraw pointer
   * @returns {PlayerTextDraw|undefined}
   */
  get(ptr: number): PlayerTextDraw | undefined;
  /**
   * @method getID
   * @description Get player textdraw id based on their pointer
   * @param {number} ptr - player textdraw pointer
   * @returns {number}
   */
  getID(ptr: number): number;
  /**
   * @method getPtr
   * @description Get player textdraw pointer based on their ID
   * @param {number} id - player textdraw ID
   * @returns {number|null}
   */
  getPtr(id: number): number | null;
  /**
   * @method new
   * @description Create a new player textdraw
   * @param {Player} player
   * @param {number} x
   * @param {number} y
   * @param {string} text
   * @returns {PlayerTextDraw} a PlayerTextDraw instance
   * @throws Will throw an error if the player textdraw creation fails
   */
  new(player: Player, x: number, y: number, text: string): PlayerTextDraw;
  /**
   * @method all
   * @returns {PlayerTextDraw[]} a copy of array of player textdraws
   */
  all(): PlayerTextDraw[];
  /**
   * @method forEach
   * @param {function(PlayerTextDraw, number): void} callback - The function to execute for each player textdraw.
   */
  forEach(callback: (arg0: PlayerTextDraw, arg1: number) => void): void;
  #private;
}

/**
 * PerPlayerEntityPool base
 */
declare class PerPlayerEntityPool<T> {
  /**
   * @method at
   * @description Get player's entity pool
   * @param {number} playerid - player ID
   */
  at(playerid: number): T | undefined;
}

/*
 * @class omp
 */
declare class omp {
  /**
   * Adds a new event listener to resourceStart
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=resourceStart] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "resourceStart",
    callback: (error: boolean) => any
  ): void;
  /**
   * Adds a new event listener to playerGiveDamageActor
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerGiveDamageActor] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerGiveDamageActor",
    callback: (
      player: Player,
      actor: Actor,
      amount: number,
      weapon: number,
      part: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to actorStreamIn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=actorStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "actorStreamIn",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;
  /**
   * Adds a new event listener to actorStreamOut
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=actorStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "actorStreamOut",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerEnterCheckpoint
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerEnterCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerLeaveCheckpoint
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerLeaveCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerEnterRaceCheckpoint
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerEnterRaceCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerLeaveRaceCheckpoint
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerLeaveRaceCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerRequestClass
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerRequestClass] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerRequestClass",
    callback: (player: Player, classId: number) => any
  ): void;
  /**
   * Adds a new event listener to consoleText
   *
   * @name omp.on
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=consoleText] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "consoleText",
    callback: (command: string, parameters: string) => any
  ): void;
  /**
   * Adds a new event listener to rconLoginAttempt
   *
   * @name omp.on
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=rconLoginAttempt] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "rconLoginAttempt",
    callback: (address: string, password: string, success: boolean) => any
  ): void;
  /**
   * Adds a new event listener to tick
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=tick] - Event name
   * @param {function} callback - Event callback
   */
  static on(eventName: "tick", callback: (elapsed: number) => any): void;
  /**
   * Adds a new event listener to playerFinishedDownloading
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerFinishedDownloading] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerFinishedDownloading",
    callback: (player: Player, vw: number) => any
  ): void;
  /**
   * Adds a new event listener to playerRequestDownload
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerRequestDownload] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerRequestDownload",
    callback: (player: Player, type: number, checksum: number) => any
  ): void;
  /**
   * Adds a new event listener to dialogResponse
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=dialogResponse] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "dialogResponse",
    callback: (
      player: Player,
      dialogId: number,
      response: number,
      listItem: number,
      inputText: string
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerEnterGangZone
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerEnterGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Adds a new event listener to playerLeaveGangZone
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerLeaveGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Adds a new event listener to playerClickGangZone
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerClickGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Adds a new event listener to playerSelectedMenuRow
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectedMenuRow] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerSelectedMenuRow",
    callback: (player: Player, row: number) => any
  ): void;
  /**
   * Adds a new event listener to playerExitedMenu
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerExitedMenu] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerExitedMenu",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to objectMove
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=objectMove] - Event name
   * @param {function} callback - Event callback
   */
  static on(eventName: "objectMove", callback: (object: ObjectMp) => any): void;
  /**
   * Adds a new event listener to playerObjectMove
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerObjectMove] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerObjectMove",
    callback: (player: Player, object: ObjectMp) => any
  ): void;
  /**
   * Adds a new event listener to playerEditObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditObject] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerEditObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerEditPlayerObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerEditPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerEditAttachedObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditAttachedObject] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerEditAttachedObject",
    callback: (
      player: Player,
      saved: boolean,
      index: number,
      model: number,
      bone: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number,
      scaleX: number,
      scaleY: number,
      scaleZ: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerSelectObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectObject] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerSelectObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerSelectPlayerObject
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerSelectPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerPickUpPickup
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerPickUpPickup] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerPickUpPickup",
    callback: (player: Player, pickup: Pickup) => any
  ): void;
  /**
   * Adds a new event listener to playerCancelTextDrawSelection
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerCancelTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerCancelTextDrawSelection",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerCancelPlayerTextDrawSelection
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerCancelPlayerTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerCancelPlayerTextDrawSelection",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerClickTextDraw
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerClickTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;
  /**
   * Adds a new event listener to playerClickPlayerTextDraw
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickPlayerTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerClickPlayerTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;
  /**
   * Adds a new event listener to playerConnect
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerConnect] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerConnect",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerSpawn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static on(eventName: "playerSpawn", callback: (player: Player) => any): void;
  /**
   * Adds a new event listener to playerCommandText
   *
   * @name omp.on
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerCommandText] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerCommandText",
    callback: (player: Player, command: string) => any
  ): void;
  /**
   * Adds a new event listener to playerKeyStateChange
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerKeyStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerKeyStateChange",
    callback: (player: Player, newKeys: number, oldKeys: number) => any
  ): void;
  /**
   * Adds a new event listener to incomingConnection
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=incomingConnection] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "incomingConnection",
    callback: (player: Player, ipAddress: string, port: number) => any
  ): void;
  /**
   * Adds a new event listener to playerDisconnect
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerDisconnect] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerDisconnect",
    callback: (player: Player, reason: number) => any
  ): void;
  /**
   * Adds a new event listener to playerRequestSpawn
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerRequestSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerRequestSpawn",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerStreamIn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerStreamIn",
    callback: (player: Player, forPlayer: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerStreamOut
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerStreamOut",
    callback: (player: Player, forPlayer: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerText
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerText] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerText",
    callback: (player: Player, text: string) => any
  ): void;
  /**
   * Adds a new event listener to playerShotMissed
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotMissed] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerShotMissed",
    callback: (
      player: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerShotPlayer
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotPlayer] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerShotPlayer",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerShotVehicle
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerShotVehicle",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerShotObject
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotObject] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerShotObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerShotPlayerObject
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerShotPlayerObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerDeath
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerDeath] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerDeath",
    callback: (player: Player, killer: Player, reason: number) => any
  ): void;
  /**
   * Adds a new event listener to playerTakeDamage
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerTakeDamage] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerTakeDamage",
    callback: (
      player: Player,
      from: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerGiveDamage
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerGiveDamage] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerGiveDamage",
    callback: (
      player: Player,
      to: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerInteriorChange
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerInteriorChange] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerInteriorChange",
    callback: (player: Player, newInterior: number, oldInterior: number) => any
  ): void;
  /**
   * Adds a new event listener to playerStateChange
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerStateChange",
    callback: (player: Player, newState: number, oldState: number) => any
  ): void;
  /**
   * Adds a new event listener to playerClickMap
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickMap] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerClickMap",
    callback: (player: Player, x: number, y: number, z: number) => any
  ): void;
  /**
   * Adds a new event listener to playerClickPlayer
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickPlayer] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerClickPlayer",
    callback: (player: Player, clicked: Player, source: number) => any
  ): void;
  /**
   * Adds a new event listener to clientCheckResponse
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=clientCheckResponse] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "clientCheckResponse",
    callback: (
      player: Player,
      actionType: number,
      address: number,
      result: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerUpdate
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static on(eventName: "playerUpdate", callback: (player: Player) => any): void;
  /**
   * Adds a new event listener to vehicleStreamIn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehicleStreamIn",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Adds a new event listener to vehicleStreamOut
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehicleStreamOut",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Adds a new event listener to vehicleDeath
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleDeath] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehicleDeath",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerEnterVehicle
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerEnterVehicle",
    callback: (player: Player, vehicle: Vehicle, passenger: boolean) => any
  ): void;
  /**
   * Adds a new event listener to playerExitVehicle
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerExitVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "playerExitVehicle",
    callback: (player: Player, vehicle: Vehicle) => any
  ): void;
  /**
   * Adds a new event listener to vehicleDamageStatusUpdate
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleDamageStatusUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehicleDamageStatusUpdate",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Adds a new event listener to vehiclePaintJob
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehiclePaintJob] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehiclePaintJob",
    callback: (player: Player, vehicle: Vehicle, paintJob: number) => any
  ): void;
  /**
   * Adds a new event listener to vehicleMod
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleMod] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehicleMod",
    callback: (player: Player, vehicle: Vehicle, component: number) => any
  ): void;
  /**
   * Adds a new event listener to vehicleRespray
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleRespray] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehicleRespray",
    callback: (
      player: Player,
      vehicle: Vehicle,
      color1: number,
      color2: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to enterExitModShop
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=enterExitModShop] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "enterExitModShop",
    callback: (player: Player, enterexit: number, interiorId: number) => any
  ): void;
  /**
   * Adds a new event listener to vehicleSpawn
   *
   * @name omp.on
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehicleSpawn",
    callback: (vehicle: Vehicle) => any
  ): void;
  /**
   * Adds a new event listener to unoccupiedVehicleUpdate
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=unoccupiedVehicleUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "unoccupiedVehicleUpdate",
    callback: (
      vehicle: Vehicle,
      player: Player,
      seat: number,
      posX: number,
      posY: number,
      posZ: number,
      velocityX: number,
      velocityY: number,
      velocityZ: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to trailerUpdate
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=trailerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "trailerUpdate",
    callback: (player: Player, trailer: Vehicle) => any
  ): void;
  /**
   * Adds a new event listener to vehicleSirenStateChange
   *
   * @name omp.on
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleSirenStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static on(
    eventName: "vehicleSirenStateChange",
    callback: (player: Player, vehicle: Vehicle, sirenState: number) => any
  ): void;
  /**
   * Adds a new event listener to resourceStart
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=resourceStart] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "resourceStart",
    callback: (error: boolean) => any
  ): void;
  /**
   * Adds a new event listener to playerGiveDamageActor
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerGiveDamageActor] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerGiveDamageActor",
    callback: (
      player: Player,
      actor: Actor,
      amount: number,
      weapon: number,
      part: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to actorStreamIn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=actorStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "actorStreamIn",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;
  /**
   * Adds a new event listener to actorStreamOut
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=actorStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "actorStreamOut",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerEnterCheckpoint
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerEnterCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerLeaveCheckpoint
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerLeaveCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerEnterRaceCheckpoint
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerEnterRaceCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerLeaveRaceCheckpoint
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerLeaveRaceCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerRequestClass
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerRequestClass] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerRequestClass",
    callback: (player: Player, classId: number) => any
  ): void;
  /**
   * Adds a new event listener to consoleText
   *
   * @name omp.addListener
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=consoleText] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "consoleText",
    callback: (command: string, parameters: string) => any
  ): void;
  /**
   * Adds a new event listener to rconLoginAttempt
   *
   * @name omp.addListener
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=rconLoginAttempt] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "rconLoginAttempt",
    callback: (address: string, password: string, success: boolean) => any
  ): void;
  /**
   * Adds a new event listener to tick
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=tick] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "tick",
    callback: (elapsed: number) => any
  ): void;
  /**
   * Adds a new event listener to playerFinishedDownloading
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerFinishedDownloading] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerFinishedDownloading",
    callback: (player: Player, vw: number) => any
  ): void;
  /**
   * Adds a new event listener to playerRequestDownload
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerRequestDownload] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerRequestDownload",
    callback: (player: Player, type: number, checksum: number) => any
  ): void;
  /**
   * Adds a new event listener to dialogResponse
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=dialogResponse] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "dialogResponse",
    callback: (
      player: Player,
      dialogId: number,
      response: number,
      listItem: number,
      inputText: string
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerEnterGangZone
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerEnterGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Adds a new event listener to playerLeaveGangZone
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerLeaveGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerLeaveGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Adds a new event listener to playerClickGangZone
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerClickGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Adds a new event listener to playerSelectedMenuRow
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectedMenuRow] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerSelectedMenuRow",
    callback: (player: Player, row: number) => any
  ): void;
  /**
   * Adds a new event listener to playerExitedMenu
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerExitedMenu] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerExitedMenu",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to objectMove
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=objectMove] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "objectMove",
    callback: (object: ObjectMp) => any
  ): void;
  /**
   * Adds a new event listener to playerObjectMove
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerObjectMove] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerObjectMove",
    callback: (player: Player, object: ObjectMp) => any
  ): void;
  /**
   * Adds a new event listener to playerEditObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditObject] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerEditObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerEditPlayerObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerEditPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerEditAttachedObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEditAttachedObject] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerEditAttachedObject",
    callback: (
      player: Player,
      saved: boolean,
      index: number,
      model: number,
      bone: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number,
      scaleX: number,
      scaleY: number,
      scaleZ: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerSelectObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectObject] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerSelectObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerSelectPlayerObject
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSelectPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerSelectPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerPickUpPickup
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerPickUpPickup] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerPickUpPickup",
    callback: (player: Player, pickup: Pickup) => any
  ): void;
  /**
   * Adds a new event listener to playerCancelTextDrawSelection
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerCancelTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerCancelTextDrawSelection",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerCancelPlayerTextDrawSelection
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerCancelPlayerTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerCancelPlayerTextDrawSelection",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerClickTextDraw
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerClickTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;
  /**
   * Adds a new event listener to playerClickPlayerTextDraw
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickPlayerTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerClickPlayerTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;
  /**
   * Adds a new event listener to playerConnect
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerConnect] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerConnect",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerSpawn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerSpawn",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerCommandText
   *
   * @name omp.addListener
   * @badret Returning true will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerCommandText] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerCommandText",
    callback: (player: Player, command: string) => any
  ): void;
  /**
   * Adds a new event listener to playerKeyStateChange
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerKeyStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerKeyStateChange",
    callback: (player: Player, newKeys: number, oldKeys: number) => any
  ): void;
  /**
   * Adds a new event listener to incomingConnection
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=incomingConnection] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "incomingConnection",
    callback: (player: Player, ipAddress: string, port: number) => any
  ): void;
  /**
   * Adds a new event listener to playerDisconnect
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerDisconnect] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerDisconnect",
    callback: (player: Player, reason: number) => any
  ): void;
  /**
   * Adds a new event listener to playerRequestSpawn
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerRequestSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerRequestSpawn",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerStreamIn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerStreamIn",
    callback: (player: Player, forPlayer: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerStreamOut
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerStreamOut",
    callback: (player: Player, forPlayer: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerText
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerText] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerText",
    callback: (player: Player, text: string) => any
  ): void;
  /**
   * Adds a new event listener to playerShotMissed
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotMissed] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerShotMissed",
    callback: (
      player: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerShotPlayer
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotPlayer] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerShotPlayer",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerShotVehicle
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerShotVehicle",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerShotObject
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotObject] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerShotObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerShotPlayerObject
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerShotPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerShotPlayerObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerDeath
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerDeath] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerDeath",
    callback: (player: Player, killer: Player, reason: number) => any
  ): void;
  /**
   * Adds a new event listener to playerTakeDamage
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerTakeDamage] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerTakeDamage",
    callback: (
      player: Player,
      from: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerGiveDamage
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerGiveDamage] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerGiveDamage",
    callback: (
      player: Player,
      to: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerInteriorChange
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerInteriorChange] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerInteriorChange",
    callback: (player: Player, newInterior: number, oldInterior: number) => any
  ): void;
  /**
   * Adds a new event listener to playerStateChange
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerStateChange",
    callback: (player: Player, newState: number, oldState: number) => any
  ): void;
  /**
   * Adds a new event listener to playerClickMap
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickMap] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerClickMap",
    callback: (player: Player, x: number, y: number, z: number) => any
  ): void;
  /**
   * Adds a new event listener to playerClickPlayer
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerClickPlayer] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerClickPlayer",
    callback: (player: Player, clicked: Player, source: number) => any
  ): void;
  /**
   * Adds a new event listener to clientCheckResponse
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=clientCheckResponse] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "clientCheckResponse",
    callback: (
      player: Player,
      actionType: number,
      address: number,
      result: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to playerUpdate
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=playerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerUpdate",
    callback: (player: Player) => any
  ): void;
  /**
   * Adds a new event listener to vehicleStreamIn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehicleStreamIn",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Adds a new event listener to vehicleStreamOut
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehicleStreamOut",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Adds a new event listener to vehicleDeath
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleDeath] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehicleDeath",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Adds a new event listener to playerEnterVehicle
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerEnterVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerEnterVehicle",
    callback: (player: Player, vehicle: Vehicle, passenger: boolean) => any
  ): void;
  /**
   * Adds a new event listener to playerExitVehicle
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=playerExitVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "playerExitVehicle",
    callback: (player: Player, vehicle: Vehicle) => any
  ): void;
  /**
   * Adds a new event listener to vehicleDamageStatusUpdate
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleDamageStatusUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehicleDamageStatusUpdate",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Adds a new event listener to vehiclePaintJob
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehiclePaintJob] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehiclePaintJob",
    callback: (player: Player, vehicle: Vehicle, paintJob: number) => any
  ): void;
  /**
   * Adds a new event listener to vehicleMod
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleMod] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehicleMod",
    callback: (player: Player, vehicle: Vehicle, component: number) => any
  ): void;
  /**
   * Adds a new event listener to vehicleRespray
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleRespray] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehicleRespray",
    callback: (
      player: Player,
      vehicle: Vehicle,
      color1: number,
      color2: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to enterExitModShop
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=enterExitModShop] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "enterExitModShop",
    callback: (player: Player, enterexit: number, interiorId: number) => any
  ): void;
  /**
   * Adds a new event listener to vehicleSpawn
   *
   * @name omp.addListener
   * @badret Returning a value won't change anything in call chain behavior
   * @param {string} [eventName=vehicleSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehicleSpawn",
    callback: (vehicle: Vehicle) => any
  ): void;
  /**
   * Adds a new event listener to unoccupiedVehicleUpdate
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=unoccupiedVehicleUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "unoccupiedVehicleUpdate",
    callback: (
      vehicle: Vehicle,
      player: Player,
      seat: number,
      posX: number,
      posY: number,
      posZ: number,
      velocityX: number,
      velocityY: number,
      velocityZ: number
    ) => any
  ): void;
  /**
   * Adds a new event listener to trailerUpdate
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=trailerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "trailerUpdate",
    callback: (player: Player, trailer: Vehicle) => any
  ): void;
  /**
   * Adds a new event listener to vehicleSirenStateChange
   *
   * @name omp.addListener
   * @badret Returning false will stop other listeners from being executed and break the call chain.
   * @param {string} [eventName=vehicleSirenStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static addListener(
    eventName: "vehicleSirenStateChange",
    callback: (player: Player, vehicle: Vehicle, sirenState: number) => any
  ): void;
  /**
   * Removes a specific listener for resourceStart
   *
   * @name omp.removeListener
   * @param {string} [eventName=resourceStart] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "resourceStart",
    callback: (
      player: Player,
      actor: Actor,
      amount: number,
      weapon: number,
      part: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerGiveDamageActor
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerGiveDamageActor] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerGiveDamageActor",
    callback: (
      player: Player,
      actor: Actor,
      amount: number,
      weapon: number,
      part: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for actorStreamIn
   *
   * @name omp.removeListener
   * @param {string} [eventName=actorStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "actorStreamIn",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;
  /**
   * Removes a specific listener for actorStreamOut
   *
   * @name omp.removeListener
   * @param {string} [eventName=actorStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "actorStreamOut",
    callback: (actor: Actor, forPlayer: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerEnterCheckpoint
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEnterCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerEnterCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerLeaveCheckpoint
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerLeaveCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerLeaveCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerEnterRaceCheckpoint
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEnterRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerEnterRaceCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerLeaveRaceCheckpoint
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerLeaveRaceCheckpoint] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerLeaveRaceCheckpoint",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerRequestClass
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerRequestClass] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerRequestClass",
    callback: (player: Player, classId: number) => any
  ): void;
  /**
   * Removes a specific listener for consoleText
   *
   * @name omp.removeListener
   * @param {string} [eventName=consoleText] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "consoleText",
    callback: (command: string, parameters: string) => any
  ): void;
  /**
   * Removes a specific listener for rconLoginAttempt
   *
   * @name omp.removeListener
   * @param {string} [eventName=rconLoginAttempt] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "rconLoginAttempt",
    callback: (address: string, password: string, success: boolean) => any
  ): void;
  /**
   * Removes a specific listener for tick
   *
   * @name omp.removeListener
   * @param {string} [eventName=tick] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "tick",
    callback: (elapsed: number) => any
  ): void;
  /**
   * Removes a specific listener for playerFinishedDownloading
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerFinishedDownloading] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerFinishedDownloading",
    callback: (player: Player, vw: number) => any
  ): void;
  /**
   * Removes a specific listener for playerRequestDownload
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerRequestDownload] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerRequestDownload",
    callback: (player: Player, type: number, checksum: number) => any
  ): void;
  /**
   * Removes a specific listener for dialogResponse
   *
   * @name omp.removeListener
   * @param {string} [eventName=dialogResponse] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "dialogResponse",
    callback: (
      player: Player,
      dialogId: number,
      response: number,
      listItem: number,
      inputText: string
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerEnterGangZone
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEnterGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerEnterGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Removes a specific listener for playerLeaveGangZone
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerLeaveGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerLeaveGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Removes a specific listener for playerClickGangZone
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickGangZone] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerClickGangZone",
    callback: (player: Player, zone: GangZone) => any
  ): void;
  /**
   * Removes a specific listener for playerSelectedMenuRow
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerSelectedMenuRow] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerSelectedMenuRow",
    callback: (player: Player, row: number) => any
  ): void;
  /**
   * Removes a specific listener for playerExitedMenu
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerExitedMenu] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerExitedMenu",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for objectMove
   *
   * @name omp.removeListener
   * @param {string} [eventName=objectMove] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "objectMove",
    callback: (object: ObjectMp) => any
  ): void;
  /**
   * Removes a specific listener for playerObjectMove
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerObjectMove] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerObjectMove",
    callback: (player: Player, object: ObjectMp) => any
  ): void;
  /**
   * Removes a specific listener for playerEditObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEditObject] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerEditObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerEditPlayerObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEditPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerEditPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      response: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerEditAttachedObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEditAttachedObject] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerEditAttachedObject",
    callback: (
      player: Player,
      saved: boolean,
      index: number,
      model: number,
      bone: number,
      offsetX: number,
      offsetY: number,
      offsetZ: number,
      rotationX: number,
      rotationY: number,
      rotationZ: number,
      scaleX: number,
      scaleY: number,
      scaleZ: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerSelectObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerSelectObject] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerSelectObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerSelectPlayerObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerSelectPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerSelectPlayerObject",
    callback: (
      player: Player,
      object: ObjectMp,
      model: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerPickUpPickup
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerPickUpPickup] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerPickUpPickup",
    callback: (player: Player, pickup: Pickup) => any
  ): void;
  /**
   * Removes a specific listener for playerCancelTextDrawSelection
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerCancelTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerCancelTextDrawSelection",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerCancelPlayerTextDrawSelection
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerCancelPlayerTextDrawSelection] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerCancelPlayerTextDrawSelection",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerClickTextDraw
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerClickTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;
  /**
   * Removes a specific listener for playerClickPlayerTextDraw
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickPlayerTextDraw] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerClickPlayerTextDraw",
    callback: (player: Player, textdraw: TextDraw) => any
  ): void;
  /**
   * Removes a specific listener for playerConnect
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerConnect] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerConnect",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerSpawn
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerSpawn",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerCommandText
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerCommandText] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerCommandText",
    callback: (player: Player, command: string) => any
  ): void;
  /**
   * Removes a specific listener for playerKeyStateChange
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerKeyStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerKeyStateChange",
    callback: (player: Player, newKeys: number, oldKeys: number) => any
  ): void;
  /**
   * Removes a specific listener for incomingConnection
   *
   * @name omp.removeListener
   * @param {string} [eventName=incomingConnection] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "incomingConnection",
    callback: (player: Player, ipAddress: string, port: number) => any
  ): void;
  /**
   * Removes a specific listener for playerDisconnect
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerDisconnect] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerDisconnect",
    callback: (player: Player, reason: number) => any
  ): void;
  /**
   * Removes a specific listener for playerRequestSpawn
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerRequestSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerRequestSpawn",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerStreamIn
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerStreamIn",
    callback: (player: Player, forPlayer: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerStreamOut
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerStreamOut",
    callback: (player: Player, forPlayer: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerText
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerText] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerText",
    callback: (player: Player, text: string) => any
  ): void;
  /**
   * Removes a specific listener for playerShotMissed
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotMissed] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerShotMissed",
    callback: (
      player: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerShotPlayer
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotPlayer] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerShotPlayer",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerShotVehicle
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerShotVehicle",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerShotObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotObject] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerShotObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerShotPlayerObject
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerShotPlayerObject] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerShotPlayerObject",
    callback: (
      player: Player,
      target: Player,
      weapon: number,
      x: number,
      y: number,
      z: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerDeath
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerDeath] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerDeath",
    callback: (player: Player, killer: Player, reason: number) => any
  ): void;
  /**
   * Removes a specific listener for playerTakeDamage
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerTakeDamage] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerTakeDamage",
    callback: (
      player: Player,
      from: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerGiveDamage
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerGiveDamage] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerGiveDamage",
    callback: (
      player: Player,
      to: Player,
      amount: number,
      weapon: number,
      bodypart: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerInteriorChange
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerInteriorChange] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerInteriorChange",
    callback: (player: Player, newInterior: number, oldInterior: number) => any
  ): void;
  /**
   * Removes a specific listener for playerStateChange
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerStateChange",
    callback: (player: Player, newState: number, oldState: number) => any
  ): void;
  /**
   * Removes a specific listener for playerClickMap
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickMap] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerClickMap",
    callback: (player: Player, x: number, y: number, z: number) => any
  ): void;
  /**
   * Removes a specific listener for playerClickPlayer
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerClickPlayer] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerClickPlayer",
    callback: (player: Player, clicked: Player, source: number) => any
  ): void;
  /**
   * Removes a specific listener for clientCheckResponse
   *
   * @name omp.removeListener
   * @param {string} [eventName=clientCheckResponse] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "clientCheckResponse",
    callback: (
      player: Player,
      actionType: number,
      address: number,
      result: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for playerUpdate
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerUpdate",
    callback: (player: Player) => any
  ): void;
  /**
   * Removes a specific listener for vehicleStreamIn
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleStreamIn] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehicleStreamIn",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Removes a specific listener for vehicleStreamOut
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleStreamOut] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehicleStreamOut",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Removes a specific listener for vehicleDeath
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleDeath] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehicleDeath",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Removes a specific listener for playerEnterVehicle
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerEnterVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerEnterVehicle",
    callback: (player: Player, vehicle: Vehicle, passenger: boolean) => any
  ): void;
  /**
   * Removes a specific listener for playerExitVehicle
   *
   * @name omp.removeListener
   * @param {string} [eventName=playerExitVehicle] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "playerExitVehicle",
    callback: (player: Player, vehicle: Vehicle) => any
  ): void;
  /**
   * Removes a specific listener for vehicleDamageStatusUpdate
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleDamageStatusUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehicleDamageStatusUpdate",
    callback: (vehicle: Vehicle, player: Player) => any
  ): void;
  /**
   * Removes a specific listener for vehiclePaintJob
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehiclePaintJob] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehiclePaintJob",
    callback: (player: Player, vehicle: Vehicle, paintJob: number) => any
  ): void;
  /**
   * Removes a specific listener for vehicleMod
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleMod] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehicleMod",
    callback: (player: Player, vehicle: Vehicle, component: number) => any
  ): void;
  /**
   * Removes a specific listener for vehicleRespray
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleRespray] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehicleRespray",
    callback: (
      player: Player,
      vehicle: Vehicle,
      color1: number,
      color2: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for enterExitModShop
   *
   * @name omp.removeListener
   * @param {string} [eventName=enterExitModShop] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "enterExitModShop",
    callback: (player: Player, enterexit: number, interiorId: number) => any
  ): void;
  /**
   * Removes a specific listener for vehicleSpawn
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleSpawn] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehicleSpawn",
    callback: (vehicle: Vehicle) => any
  ): void;
  /**
   * Removes a specific listener for unoccupiedVehicleUpdate
   *
   * @name omp.removeListener
   * @param {string} [eventName=unoccupiedVehicleUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "unoccupiedVehicleUpdate",
    callback: (
      vehicle: Vehicle,
      player: Player,
      seat: number,
      posX: number,
      posY: number,
      posZ: number,
      velocityX: number,
      velocityY: number,
      velocityZ: number
    ) => any
  ): void;
  /**
   * Removes a specific listener for trailerUpdate
   *
   * @name omp.removeListener
   * @param {string} [eventName=trailerUpdate] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "trailerUpdate",
    callback: (player: Player, trailer: Vehicle) => any
  ): void;
  /**
   * Removes a specific listener for vehicleSirenStateChange
   *
   * @name omp.removeListener
   * @param {string} [eventName=vehicleSirenStateChange] - Event name
   * @param {function} callback - Event callback
   */
  static removeListener(
    eventName: "vehicleSirenStateChange",
    callback: (player: Player, vehicle: Vehicle, sirenState: number) => any
  ): void;
  /**
   * Removes all listeners for resourceStart
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=resourceStart] - Event name
   */
  static removeAllListeners(eventName: "resourceStart"): void;
  /**
   * Removes all listeners for playerGiveDamageActor
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerGiveDamageActor] - Event name
   */
  static removeAllListeners(eventName: "playerGiveDamageActor"): void;
  /**
   * Removes all listeners for actorStreamIn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=actorStreamIn] - Event name
   */
  static removeAllListeners(eventName: "actorStreamIn"): void;
  /**
   * Removes all listeners for actorStreamOut
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=actorStreamOut] - Event name
   */
  static removeAllListeners(eventName: "actorStreamOut"): void;
  /**
   * Removes all listeners for playerEnterCheckpoint
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEnterCheckpoint] - Event name
   */
  static removeAllListeners(eventName: "playerEnterCheckpoint"): void;
  /**
   * Removes all listeners for playerLeaveCheckpoint
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerLeaveCheckpoint] - Event name
   */
  static removeAllListeners(eventName: "playerLeaveCheckpoint"): void;
  /**
   * Removes all listeners for playerEnterRaceCheckpoint
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEnterRaceCheckpoint] - Event name
   */
  static removeAllListeners(eventName: "playerEnterRaceCheckpoint"): void;
  /**
   * Removes all listeners for playerLeaveRaceCheckpoint
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerLeaveRaceCheckpoint] - Event name
   */
  static removeAllListeners(eventName: "playerLeaveRaceCheckpoint"): void;
  /**
   * Removes all listeners for playerRequestClass
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerRequestClass] - Event name
   */
  static removeAllListeners(eventName: "playerRequestClass"): void;
  /**
   * Removes all listeners for consoleText
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=consoleText] - Event name
   */
  static removeAllListeners(eventName: "consoleText"): void;
  /**
   * Removes all listeners for rconLoginAttempt
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=rconLoginAttempt] - Event name
   */
  static removeAllListeners(eventName: "rconLoginAttempt"): void;
  /**
   * Removes all listeners for tick
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=tick] - Event name
   */
  static removeAllListeners(eventName: "tick"): void;
  /**
   * Removes all listeners for playerFinishedDownloading
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerFinishedDownloading] - Event name
   */
  static removeAllListeners(eventName: "playerFinishedDownloading"): void;
  /**
   * Removes all listeners for playerRequestDownload
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerRequestDownload] - Event name
   */
  static removeAllListeners(eventName: "playerRequestDownload"): void;
  /**
   * Removes all listeners for dialogResponse
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=dialogResponse] - Event name
   */
  static removeAllListeners(eventName: "dialogResponse"): void;
  /**
   * Removes all listeners for playerEnterGangZone
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEnterGangZone] - Event name
   */
  static removeAllListeners(eventName: "playerEnterGangZone"): void;
  /**
   * Removes all listeners for playerLeaveGangZone
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerLeaveGangZone] - Event name
   */
  static removeAllListeners(eventName: "playerLeaveGangZone"): void;
  /**
   * Removes all listeners for playerClickGangZone
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickGangZone] - Event name
   */
  static removeAllListeners(eventName: "playerClickGangZone"): void;
  /**
   * Removes all listeners for playerSelectedMenuRow
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerSelectedMenuRow] - Event name
   */
  static removeAllListeners(eventName: "playerSelectedMenuRow"): void;
  /**
   * Removes all listeners for playerExitedMenu
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerExitedMenu] - Event name
   */
  static removeAllListeners(eventName: "playerExitedMenu"): void;
  /**
   * Removes all listeners for objectMove
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=objectMove] - Event name
   */
  static removeAllListeners(eventName: "objectMove"): void;
  /**
   * Removes all listeners for playerObjectMove
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerObjectMove] - Event name
   */
  static removeAllListeners(eventName: "playerObjectMove"): void;
  /**
   * Removes all listeners for playerEditObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEditObject] - Event name
   */
  static removeAllListeners(eventName: "playerEditObject"): void;
  /**
   * Removes all listeners for playerEditPlayerObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEditPlayerObject] - Event name
   */
  static removeAllListeners(eventName: "playerEditPlayerObject"): void;
  /**
   * Removes all listeners for playerEditAttachedObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEditAttachedObject] - Event name
   */
  static removeAllListeners(eventName: "playerEditAttachedObject"): void;
  /**
   * Removes all listeners for playerSelectObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerSelectObject] - Event name
   */
  static removeAllListeners(eventName: "playerSelectObject"): void;
  /**
   * Removes all listeners for playerSelectPlayerObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerSelectPlayerObject] - Event name
   */
  static removeAllListeners(eventName: "playerSelectPlayerObject"): void;
  /**
   * Removes all listeners for playerPickUpPickup
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerPickUpPickup] - Event name
   */
  static removeAllListeners(eventName: "playerPickUpPickup"): void;
  /**
   * Removes all listeners for playerCancelTextDrawSelection
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerCancelTextDrawSelection] - Event name
   */
  static removeAllListeners(eventName: "playerCancelTextDrawSelection"): void;
  /**
   * Removes all listeners for playerCancelPlayerTextDrawSelection
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerCancelPlayerTextDrawSelection] - Event name
   */
  static removeAllListeners(
    eventName: "playerCancelPlayerTextDrawSelection"
  ): void;
  /**
   * Removes all listeners for playerClickTextDraw
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickTextDraw] - Event name
   */
  static removeAllListeners(eventName: "playerClickTextDraw"): void;
  /**
   * Removes all listeners for playerClickPlayerTextDraw
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickPlayerTextDraw] - Event name
   */
  static removeAllListeners(eventName: "playerClickPlayerTextDraw"): void;
  /**
   * Removes all listeners for playerConnect
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerConnect] - Event name
   */
  static removeAllListeners(eventName: "playerConnect"): void;
  /**
   * Removes all listeners for playerSpawn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerSpawn] - Event name
   */
  static removeAllListeners(eventName: "playerSpawn"): void;
  /**
   * Removes all listeners for playerCommandText
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerCommandText] - Event name
   */
  static removeAllListeners(eventName: "playerCommandText"): void;
  /**
   * Removes all listeners for playerKeyStateChange
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerKeyStateChange] - Event name
   */
  static removeAllListeners(eventName: "playerKeyStateChange"): void;
  /**
   * Removes all listeners for incomingConnection
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=incomingConnection] - Event name
   */
  static removeAllListeners(eventName: "incomingConnection"): void;
  /**
   * Removes all listeners for playerDisconnect
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerDisconnect] - Event name
   */
  static removeAllListeners(eventName: "playerDisconnect"): void;
  /**
   * Removes all listeners for playerRequestSpawn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerRequestSpawn] - Event name
   */
  static removeAllListeners(eventName: "playerRequestSpawn"): void;
  /**
   * Removes all listeners for playerStreamIn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerStreamIn] - Event name
   */
  static removeAllListeners(eventName: "playerStreamIn"): void;
  /**
   * Removes all listeners for playerStreamOut
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerStreamOut] - Event name
   */
  static removeAllListeners(eventName: "playerStreamOut"): void;
  /**
   * Removes all listeners for playerText
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerText] - Event name
   */
  static removeAllListeners(eventName: "playerText"): void;
  /**
   * Removes all listeners for playerShotMissed
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotMissed] - Event name
   */
  static removeAllListeners(eventName: "playerShotMissed"): void;
  /**
   * Removes all listeners for playerShotPlayer
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotPlayer] - Event name
   */
  static removeAllListeners(eventName: "playerShotPlayer"): void;
  /**
   * Removes all listeners for playerShotVehicle
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotVehicle] - Event name
   */
  static removeAllListeners(eventName: "playerShotVehicle"): void;
  /**
   * Removes all listeners for playerShotObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotObject] - Event name
   */
  static removeAllListeners(eventName: "playerShotObject"): void;
  /**
   * Removes all listeners for playerShotPlayerObject
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerShotPlayerObject] - Event name
   */
  static removeAllListeners(eventName: "playerShotPlayerObject"): void;
  /**
   * Removes all listeners for playerDeath
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerDeath] - Event name
   */
  static removeAllListeners(eventName: "playerDeath"): void;
  /**
   * Removes all listeners for playerTakeDamage
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerTakeDamage] - Event name
   */
  static removeAllListeners(eventName: "playerTakeDamage"): void;
  /**
   * Removes all listeners for playerGiveDamage
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerGiveDamage] - Event name
   */
  static removeAllListeners(eventName: "playerGiveDamage"): void;
  /**
   * Removes all listeners for playerInteriorChange
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerInteriorChange] - Event name
   */
  static removeAllListeners(eventName: "playerInteriorChange"): void;
  /**
   * Removes all listeners for playerStateChange
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerStateChange] - Event name
   */
  static removeAllListeners(eventName: "playerStateChange"): void;
  /**
   * Removes all listeners for playerClickMap
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickMap] - Event name
   */
  static removeAllListeners(eventName: "playerClickMap"): void;
  /**
   * Removes all listeners for playerClickPlayer
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerClickPlayer] - Event name
   */
  static removeAllListeners(eventName: "playerClickPlayer"): void;
  /**
   * Removes all listeners for clientCheckResponse
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=clientCheckResponse] - Event name
   */
  static removeAllListeners(eventName: "clientCheckResponse"): void;
  /**
   * Removes all listeners for playerUpdate
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerUpdate] - Event name
   */
  static removeAllListeners(eventName: "playerUpdate"): void;
  /**
   * Removes all listeners for vehicleStreamIn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleStreamIn] - Event name
   */
  static removeAllListeners(eventName: "vehicleStreamIn"): void;
  /**
   * Removes all listeners for vehicleStreamOut
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleStreamOut] - Event name
   */
  static removeAllListeners(eventName: "vehicleStreamOut"): void;
  /**
   * Removes all listeners for vehicleDeath
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleDeath] - Event name
   */
  static removeAllListeners(eventName: "vehicleDeath"): void;
  /**
   * Removes all listeners for playerEnterVehicle
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerEnterVehicle] - Event name
   */
  static removeAllListeners(eventName: "playerEnterVehicle"): void;
  /**
   * Removes all listeners for playerExitVehicle
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=playerExitVehicle] - Event name
   */
  static removeAllListeners(eventName: "playerExitVehicle"): void;
  /**
   * Removes all listeners for vehicleDamageStatusUpdate
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleDamageStatusUpdate] - Event name
   */
  static removeAllListeners(eventName: "vehicleDamageStatusUpdate"): void;
  /**
   * Removes all listeners for vehiclePaintJob
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehiclePaintJob] - Event name
   */
  static removeAllListeners(eventName: "vehiclePaintJob"): void;
  /**
   * Removes all listeners for vehicleMod
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleMod] - Event name
   */
  static removeAllListeners(eventName: "vehicleMod"): void;
  /**
   * Removes all listeners for vehicleRespray
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleRespray] - Event name
   */
  static removeAllListeners(eventName: "vehicleRespray"): void;
  /**
   * Removes all listeners for enterExitModShop
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=enterExitModShop] - Event name
   */
  static removeAllListeners(eventName: "enterExitModShop"): void;
  /**
   * Removes all listeners for vehicleSpawn
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleSpawn] - Event name
   */
  static removeAllListeners(eventName: "vehicleSpawn"): void;
  /**
   * Removes all listeners for unoccupiedVehicleUpdate
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=unoccupiedVehicleUpdate] - Event name
   */
  static removeAllListeners(eventName: "unoccupiedVehicleUpdate"): void;
  /**
   * Removes all listeners for trailerUpdate
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=trailerUpdate] - Event name
   */
  static removeAllListeners(eventName: "trailerUpdate"): void;
  /**
   * Removes all listeners for vehicleSirenStateChange
   *
   * @name omp.removeAllListeners
   * @param {string} [eventName=vehicleSirenStateChange] - Event name
   */
  static removeAllListeners(eventName: "vehicleSirenStateChange"): void;

  /**
   * open.mp log function, works like console.log except it writes to your server log file as well
   *
   * @name omp.log
   * @param message any
   * @param optionalParams any[]
   */
  static log(message?: any, ...optionalParams: any[]): void;

  /**
   * Players
   */
  static players: PlayerPool;

  /**
   * Vehicles
   */
  static vehicles: VehiclePool;

  /**
   * Objects
   */
  static objects: ObjectPool;

  /**
   * TextDraws
   */
  static textdraws: TextDrawPool;

  /**
   * Pickups
   */
  static pickups: PickupPool;

  /**
   * GangZones
   */
  static gangzones: GangZonePool;

  /**
   * TextLabels
   */
  static textlabels: TextLabelPool;

  /**
   * Actors
   */
  static actors: ActorPool;

  /**
   * Menus
   */
  static menus: MenuPool;

  /**
   * Player Objects
   */
  static playerObjects: PerPlayerEntityPool<PlayerObjectPool>;

  /**
   * Player TextLabels
   */
  static playerTextLabels: PerPlayerEntityPool<PlayerTextLabelPool>;

  /**
   * Player TextDraws
   */
  static playerTextDraws: PerPlayerEntityPool<PlayerTextDrawPool>;

  static resource: { name: string; path: string; entryFile: string };
}
