/**
 * Player class
 */
class Player {
  /**
   * @var ptr
   * @description Player pointer
   * @type {number|null}
   * @private
   */
  #ptr = null;

  /**
   * @var id
   * @description Player ID
   * @type {number|null}
   * @private
   */
  #id = null;

  /**
   * @constructor
   * @param {number} id
   * @throws Will throw an error if the player retrieval fails
   */
  constructor(id) {
    const result = __internal_omp.Player.FromID(id);
    if (result.ret === 0) {
      throw new Error("Failed to retireve player");
    }

    this.#ptr = result.ret;
    this.#id = id;
  }

  /**
   * @method getPtr
   * @description get player pointer
   * @returns {number|null} player pointer
   */
  getPtr() {
    return this.#ptr;
  }

  /**
   * @method getID
   * @description get player id
   * @returns {number|null} player id
   */
  getID() {
    return this.#id;
  }

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
    team,
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
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetSpawnInfo(
      this.#ptr,
      team,
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

  /**
   * @method getSpawnInfo
   * @returns {{ret: boolean, team: number,skin: number,x: number,y: number,z: number,angle: number,weapon1: number,ammo1: number,weapon2: number,ammo2: number,weapon3: number,ammo3: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getSpawnInfo() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSpawnInfo(this.#ptr);
    return result;
  }

  /**
   * @method getNetworkStats
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getNetworkStats() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetNetworkStats(this.#ptr);
    return result;
  }

  /**
   * @method netStatsBytesReceived
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsBytesReceived() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsBytesReceived(this.#ptr);
    return result.ret;
  }

  /**
   * @method netStatsBytesSent
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsBytesSent() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsBytesSent(this.#ptr);
    return result.ret;
  }

  /**
   * @method netStatsConnectionStatus
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsConnectionStatus() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsConnectionStatus(this.#ptr);
    return result.ret;
  }

  /**
   * @method netStatsGetConnectedTime
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsGetConnectedTime() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsGetConnectedTime(this.#ptr);
    return result.ret;
  }

  /**
   * @method netStatsGetIpPort
   * @returns {{ret: boolean, output: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  netStatsGetIpPort() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsGetIpPort(this.#ptr);
    return result;
  }

  /**
   * @method netStatsMessagesReceived
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsMessagesReceived() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsMessagesReceived(this.#ptr);
    return result.ret;
  }

  /**
   * @method netStatsMessagesRecvPerSecond
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsMessagesRecvPerSecond() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsMessagesRecvPerSecond(
      this.#ptr
    );
    return result.ret;
  }

  /**
   * @method netStatsMessagesSent
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsMessagesSent() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsMessagesSent(this.#ptr);
    return result.ret;
  }

  /**
   * @method netStatsPacketLossPercent
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  netStatsPacketLossPercent() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.NetStatsPacketLossPercent(this.#ptr);
    return result.ret;
  }

  /**
   * @method getCustomSkin
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getCustomSkin() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCustomSkin(this.#ptr);
    return result.ret;
  }

  /**
   * @method getDialog
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getDialog() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetDialog(this.#ptr);
    return result.ret;
  }

  /**
   * @method getDialogData
   * @returns {{ret: boolean, dialogid: number,style: number,title: string,body: string,button1: string,button2: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getDialogData() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetDialogData(this.#ptr);
    return result;
  }

  /**
   * @method getMenu
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getMenu() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetMenu(this.#ptr);
    return result.ret;
  }

  /**
   * @method getSurfingPlayerObject
   * @returns {PlayerObject}
   * @throws Will throw an error if the player is invalid
   */
  getSurfingPlayerObject() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSurfingPlayerObject(this.#ptr);
    return result.ret;
  }

  /**
   * @method getCameraTargetPlayerObject
   * @returns {PlayerObject}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetPlayerObject() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraTargetPlayerObject(this.#ptr);
    return result.ret;
  }

  /**
   * @method sendClientMessage
   * @param {number} color
   * @param {string} text
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  sendClientMessage(color, text) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SendClientMessage(
      this.#ptr,
      color,
      text
    );
    return result.ret;
  }

  /**
   * @method setCameraPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setCameraPos(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetCameraPos(this.#ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method setDrunkLevel
   * @param {number} level
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setDrunkLevel(level) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetDrunkLevel(this.#ptr, level);
    return result.ret;
  }

  /**
   * @method setInterior
   * @param {number} interior
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setInterior(interior) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetInterior(this.#ptr, interior);
    return result.ret;
  }

  /**
   * @method setWantedLevel
   * @param {number} level
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setWantedLevel(level) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetWantedLevel(this.#ptr, level);
    return result.ret;
  }

  /**
   * @method setWeather
   * @param {number} weather
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setWeather(weather) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetWeather(this.#ptr, weather);
    return result.ret;
  }

  /**
   * @method getWeather
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getWeather() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetWeather(this.#ptr);
    return result.ret;
  }

  /**
   * @method setSkin
   * @param {number} skin
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setSkin(skin) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetSkin(this.#ptr, skin);
    return result.ret;
  }

  /**
   * @method setShopName
   * @param {string} name
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setShopName(name) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetShopName(this.#ptr, name);
    return result.ret;
  }

  /**
   * @method giveMoney
   * @param {number} amount
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  giveMoney(amount) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GiveMoney(this.#ptr, amount);
    return result.ret;
  }

  /**
   * @method setCameraLookAt
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} cutType
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setCameraLookAt(x, y, z, cutType) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetCameraLookAt(
      this.#ptr,
      x,
      y,
      z,
      cutType
    );
    return result.ret;
  }

  /**
   * @method setCameraBehind
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setCameraBehind() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetCameraBehind(this.#ptr);
    return result.ret;
  }

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
  createExplosion(x, y, z, type, radius) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.CreateExplosion(
      this.#ptr,
      x,
      y,
      z,
      type,
      radius
    );
    return result.ret;
  }

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
  playAudioStream(url, x, y, z, distance, usePos) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.PlayAudioStream(
      this.#ptr,
      url,
      x,
      y,
      z,
      distance,
      usePos
    );
    return result.ret;
  }

  /**
   * @method stopAudioStream
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  stopAudioStream() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.StopAudioStream(this.#ptr);
    return result.ret;
  }

  /**
   * @method toggleWidescreen
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleWidescreen(enable) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ToggleWidescreen(this.#ptr, enable);
    return result.ret;
  }

  /**
   * @method isWidescreenToggled
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isWidescreenToggled() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsWidescreenToggled(this.#ptr);
    return result.ret;
  }

  /**
   * @method setHealth
   * @param {number} health
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setHealth(health) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetHealth(this.#ptr, health);
    return result.ret;
  }

  /**
   * @method getHealth
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getHealth() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetHealth(this.#ptr);
    return result.ret;
  }

  /**
   * @method setArmor
   * @param {number} armor
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setArmor(armor) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetArmor(this.#ptr, armor);
    return result.ret;
  }

  /**
   * @method getArmor
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getArmor() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetArmor(this.#ptr);
    return result.ret;
  }

  /**
   * @method setTeam
   * @param {number} team
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setTeam(team) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetTeam(this.#ptr, team);
    return result.ret;
  }

  /**
   * @method getTeam
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getTeam() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetTeam(this.#ptr);
    return result.ret;
  }

  /**
   * @method setScore
   * @param {number} score
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setScore(score) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetScore(this.#ptr, score);
    return result.ret;
  }

  /**
   * @method getScore
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getScore() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetScore(this.#ptr);
    return result.ret;
  }

  /**
   * @method getSkin
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSkin() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSkin(this.#ptr);
    return result.ret;
  }

  /**
   * @method setColor
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setColor(color) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetColor(this.#ptr, color);
    return result.ret;
  }

  /**
   * @method getColor
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getColor() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetColor(this.#ptr);
    return result.ret;
  }

  /**
   * @method getDefaultColor
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getDefaultColor() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetDefaultColor(this.#ptr);
    return result.ret;
  }

  /**
   * @method getDrunkLevel
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getDrunkLevel() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetDrunkLevel(this.#ptr);
    return result.ret;
  }

  /**
   * @method giveWeapon
   * @param {number} weapon
   * @param {number} ammo
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  giveWeapon(weapon, ammo) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GiveWeapon(this.#ptr, weapon, ammo);
    return result.ret;
  }

  /**
   * @method removeWeapon
   * @param {number} weapon
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeWeapon(weapon) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.RemoveWeapon(this.#ptr, weapon);
    return result.ret;
  }

  /**
   * @method getMoney
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getMoney() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetMoney(this.#ptr);
    return result.ret;
  }

  /**
   * @method resetMoney
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  resetMoney() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ResetMoney(this.#ptr);
    return result.ret;
  }

  /**
   * @method setName
   * @param {string} name
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  setName(name) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetName(this.#ptr, name);
    return result.ret;
  }

  /**
   * @method getName
   * @returns {{ret: boolean, name: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getName() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetName(this.#ptr);
    return result;
  }

  /**
   * @method getState
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getState() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetState(this.#ptr);
    return result.ret;
  }

  /**
   * @method getPing
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getPing() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetPing(this.#ptr);
    return result.ret;
  }

  /**
   * @method getWeapon
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getWeapon() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetWeapon(this.#ptr);
    return result.ret;
  }

  /**
   * @method setTime
   * @param {number} hour
   * @param {number} minute
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setTime(hour, minute) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetTime(this.#ptr, hour, minute);
    return result.ret;
  }

  /**
   * @method getTime
   * @returns {{ret: boolean, hour: number,minute: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getTime() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetTime(this.#ptr);
    return result;
  }

  /**
   * @method toggleClock
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleClock(enable) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ToggleClock(this.#ptr, enable);
    return result.ret;
  }

  /**
   * @method hasClock
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  hasClock() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.HasClock(this.#ptr);
    return result.ret;
  }

  /**
   * @method forceClassSelection
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  forceClassSelection() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ForceClassSelection(this.#ptr);
    return result.ret;
  }

  /**
   * @method getWantedLevel
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getWantedLevel() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetWantedLevel(this.#ptr);
    return result.ret;
  }

  /**
   * @method setFightingStyle
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setFightingStyle(style) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetFightingStyle(this.#ptr, style);
    return result.ret;
  }

  /**
   * @method getFightingStyle
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getFightingStyle() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetFightingStyle(this.#ptr);
    return result.ret;
  }

  /**
   * @method setVelocity
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setVelocity(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetVelocity(this.#ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method getVelocity
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getVelocity() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetVelocity(this.#ptr);
    return result;
  }

  /**
   * @method getCameraPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getCameraPos() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraPos(this.#ptr);
    return result;
  }

  /**
   * @method getDistanceFromPoint
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getDistanceFromPoint(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetDistanceFromPoint(
      this.#ptr,
      x,
      y,
      z
    );
    return result.ret;
  }

  /**
   * @method getInterior
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getInterior() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetInterior(this.#ptr);
    return result.ret;
  }

  /**
   * @method setPos
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setPos(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetPos(this.#ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method getPos
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getPos() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetPos(this.#ptr);
    return result;
  }

  /**
   * @method getVirtualWorld
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getVirtualWorld() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetVirtualWorld(this.#ptr);
    return result.ret;
  }

  /**
   * @method isNPC
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isNPC() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsNPC(this.#ptr);
    return result.ret;
  }

  /**
   * @method isStreamedIn
   * @param {Player} other
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isStreamedIn(other) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsStreamedIn(
      this.#ptr,
      other.getPtr()
    );
    return result.ret;
  }

  /**
   * @method playGameSound
   * @param {number} sound
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  playGameSound(sound, x, y, z) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.PlayGameSound(
      this.#ptr,
      sound,
      x,
      y,
      z
    );
    return result.ret;
  }

  /**
   * @method spectatePlayer
   * @param {Player} target
   * @param {number} mode
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  spectatePlayer(target, mode) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SpectatePlayer(
      this.#ptr,
      target.getPtr(),
      mode
    );
    return result.ret;
  }

  /**
   * @method spectateVehicle
   * @param {Player} target
   * @param {number} mode
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  spectateVehicle(target, mode) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SpectateVehicle(
      this.#ptr,
      target.getPtr(),
      mode
    );
    return result.ret;
  }

  /**
   * @method setVirtualWorld
   * @param {number} vw
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setVirtualWorld(vw) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetVirtualWorld(this.#ptr, vw);
    return result.ret;
  }

  /**
   * @method setWorldBounds
   * @param {number} xMax
   * @param {number} xMin
   * @param {number} yMax
   * @param {number} yMin
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setWorldBounds(xMax, xMin, yMax, yMin) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetWorldBounds(
      this.#ptr,
      xMax,
      xMin,
      yMax,
      yMin
    );
    return result.ret;
  }

  /**
   * @method clearWorldBounds
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  clearWorldBounds() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ClearWorldBounds(this.#ptr);
    return result.ret;
  }

  /**
   * @method getWorldBounds
   * @returns {{ret: boolean, xmax: number,xmin: number,ymax: number,ymin: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getWorldBounds() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetWorldBounds(this.#ptr);
    return result;
  }

  /**
   * @method clearAnimations
   * @param {number} syncType
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  clearAnimations(syncType) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ClearAnimations(this.#ptr, syncType);
    return result.ret;
  }

  /**
   * @method getLastShotVectors
   * @returns {{ret: boolean, origin_x: number,origin_y: number,origin_z: number,hit_x: number,hit_y: number,hit_z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getLastShotVectors() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetLastShotVectors(this.#ptr);
    return result;
  }

  /**
   * @method getCameraTargetPlayer
   * @returns {Player}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetPlayer() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraTargetPlayer(this.#ptr);
    return result.ret;
  }

  /**
   * @method getCameraTargetActor
   * @returns {Actor}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetActor() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraTargetActor(this.#ptr);
    return result.ret;
  }

  /**
   * @method getCameraTargetObject
   * @returns {Object}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetObject() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraTargetObject(this.#ptr);
    return result.ret;
  }

  /**
   * @method getCameraTargetVehicle
   * @returns {Vehicle}
   * @throws Will throw an error if the player is invalid
   */
  getCameraTargetVehicle() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraTargetVehicle(this.#ptr);
    return result.ret;
  }

  /**
   * @method putInVehicle
   * @param {Vehicle} vehicle
   * @param {number} seat
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  putInVehicle(vehicle, seat) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.PutInVehicle(
      this.#ptr,
      vehicle.getPtr(),
      seat
    );
    return result.ret;
  }

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
  removeBuilding(model, x, y, z, radius) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.RemoveBuilding(
      this.#ptr,
      model,
      x,
      y,
      z,
      radius
    );
    return result.ret;
  }

  /**
   * @method getBuildingsRemoved
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  getBuildingsRemoved() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetBuildingsRemoved(this.#ptr);
    return result.ret;
  }

  /**
   * @method removeFromVehicle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeFromVehicle() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.RemoveFromVehicle(this.#ptr);
    return result.ret;
  }

  /**
   * @method removeMapIcon
   * @param {number} icon
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeMapIcon(icon) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.RemoveMapIcon(this.#ptr, icon);
    return result.ret;
  }

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
  setMapIcon(iconID, x, y, z, type, color, style) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetMapIcon(
      this.#ptr,
      iconID,
      x,
      y,
      z,
      type,
      color,
      style
    );
    return result.ret;
  }

  /**
   * @method resetWeapons
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  resetWeapons() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ResetWeapons(this.#ptr);
    return result.ret;
  }

  /**
   * @method setAmmo
   * @param {number} id
   * @param {number} ammo
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setAmmo(id, ammo) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetAmmo(this.#ptr, id, ammo);
    return result.ret;
  }

  /**
   * @method setArmedWeapon
   * @param {number} weapon
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setArmedWeapon(weapon) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetArmedWeapon(this.#ptr, weapon);
    return result.ret;
  }

  /**
   * @method setChatBubble
   * @param {string} text
   * @param {number} color
   * @param {number} drawdistance
   * @param {number} expiretime
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setChatBubble(text, color, drawdistance, expiretime) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetChatBubble(
      this.#ptr,
      text,
      color,
      drawdistance,
      expiretime
    );
    return result.ret;
  }

  /**
   * @method setPosFindZ
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setPosFindZ(x, y, z) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetPosFindZ(this.#ptr, x, y, z);
    return result.ret;
  }

  /**
   * @method setSkillLevel
   * @param {number} weapon
   * @param {number} level
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setSkillLevel(weapon, level) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetSkillLevel(
      this.#ptr,
      weapon,
      level
    );
    return result.ret;
  }

  /**
   * @method setSpecialAction
   * @param {number} action
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setSpecialAction(action) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetSpecialAction(this.#ptr, action);
    return result.ret;
  }

  /**
   * @method showNameTagForPlayer
   * @param {Player} other
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  showNameTagForPlayer(other, enable) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ShowNameTagForPlayer(
      this.#ptr,
      other.getPtr(),
      enable
    );
    return result.ret;
  }

  /**
   * @method toggleControllable
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleControllable(enable) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ToggleControllable(this.#ptr, enable);
    return result.ret;
  }

  /**
   * @method toggleSpectating
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleSpectating(enable) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ToggleSpectating(this.#ptr, enable);
    return result.ret;
  }

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
    animlib,
    animname,
    delta,
    loop,
    lockX,
    lockY,
    freeze,
    time,
    sync
  ) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ApplyAnimation(
      this.#ptr,
      animlib,
      animname,
      delta,
      loop,
      lockX,
      lockY,
      freeze,
      time,
      sync
    );
    return result.ret;
  }

  /**
   * @method getAnimationName
   * @param {number} index
   * @returns {{ret: boolean, lib: string,name: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getAnimationName(index) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetAnimationName(this.#ptr, index);
    return result;
  }

  /**
   * @method editAttachedObject
   * @param {number} index
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  editAttachedObject(index) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.EditAttachedObject(this.#ptr, index);
    return result.ret;
  }

  /**
   * @method enableCameraTarget
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  enableCameraTarget(enable) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.EnableCameraTarget(this.#ptr, enable);
    return result.ret;
  }

  /**
   * @method enableStuntBonus
   * @param {boolean} enable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  enableStuntBonus(enable) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.EnableStuntBonus(this.#ptr, enable);
    return result.ret;
  }

  /**
   * @method getPlayerAmmo
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getPlayerAmmo() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetPlayerAmmo(this.#ptr);
    return result.ret;
  }

  /**
   * @method getAnimationIndex
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getAnimationIndex() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetAnimationIndex(this.#ptr);
    return result.ret;
  }

  /**
   * @method getFacingAngle
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getFacingAngle() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetFacingAngle(this.#ptr);
    return result.ret;
  }

  /**
   * @method getIp
   * @returns {{ret: boolean, ip: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getIp() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetIp(this.#ptr);
    return result;
  }

  /**
   * @method getSpecialAction
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSpecialAction() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSpecialAction(this.#ptr);
    return result.ret;
  }

  /**
   * @method getVehicleID
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getVehicleID() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetVehicleID(this.#ptr);
    return result.ret;
  }

  /**
   * @method getVehicleSeat
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getVehicleSeat() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetVehicleSeat(this.#ptr);
    return result.ret;
  }

  /**
   * @method getWeaponData
   * @param {number} slot
   * @returns {{ret: boolean, weaponid: number,ammo: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getWeaponData(slot) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetWeaponData(this.#ptr, slot);
    return result;
  }

  /**
   * @method getWeaponState
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getWeaponState() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetWeaponState(this.#ptr);
    return result.ret;
  }

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
  interpolateCameraPos(from_x, from_y, from_z, to_x, to_y, to_z, time, cut) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.InterpolateCameraPos(
      this.#ptr,
      from_x,
      from_y,
      from_z,
      to_x,
      to_y,
      to_z,
      time,
      cut
    );
    return result.ret;
  }

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
  interpolateCameraLookAt(from_x, from_y, from_z, to_x, to_y, to_z, time, cut) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.InterpolateCameraLookAt(
      this.#ptr,
      from_x,
      from_y,
      from_z,
      to_x,
      to_y,
      to_z,
      time,
      cut
    );
    return result.ret;
  }

  /**
   * @method isPlayerAttachedObjectSlotUsed
   * @param {number} index
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  isPlayerAttachedObjectSlotUsed(index) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsPlayerAttachedObjectSlotUsed(
      this.#ptr,
      index
    );
    return result.ret;
  }

  /**
   * @method attachCameraToObject
   * @param {Object} object
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  attachCameraToObject(object) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.AttachCameraToObject(
      this.#ptr,
      object.getPtr()
    );
    return result.ret;
  }

  /**
   * @method attachCameraToPlayerObject
   * @param {Object} object
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  attachCameraToPlayerObject(object) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.AttachCameraToPlayerObject(
      this.#ptr,
      object.getPtr()
    );
    return result.ret;
  }

  /**
   * @method getCameraAspectRatio
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getCameraAspectRatio() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraAspectRatio(this.#ptr);
    return result.ret;
  }

  /**
   * @method getCameraFrontVector
   * @returns {{ret: boolean, x: number,y: number,z: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getCameraFrontVector() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraFrontVector(this.#ptr);
    return result;
  }

  /**
   * @method getCameraMode
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getCameraMode() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraMode(this.#ptr);
    return result.ret;
  }

  /**
   * @method getKeys
   * @returns {{ret: boolean, keys: number,updown: number,leftright: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getKeys() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetKeys(this.#ptr);
    return result;
  }

  /**
   * @method getSurfingVehicle
   * @returns {Vehicle}
   * @throws Will throw an error if the player is invalid
   */
  getSurfingVehicle() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSurfingVehicle(this.#ptr);
    return result.ret;
  }

  /**
   * @method getSurfingObject
   * @returns {Object}
   * @throws Will throw an error if the player is invalid
   */
  getSurfingObject() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSurfingObject(this.#ptr);
    return result.ret;
  }

  /**
   * @method getTargetPlayer
   * @returns {Player}
   * @throws Will throw an error if the player is invalid
   */
  getTargetPlayer() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetTargetPlayer(this.#ptr);
    return result.ret;
  }

  /**
   * @method getTargetActor
   * @returns {Actor}
   * @throws Will throw an error if the player is invalid
   */
  getTargetActor() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetTargetActor(this.#ptr);
    return result.ret;
  }

  /**
   * @method isInVehicle
   * @param {Vehicle} targetVehicle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInVehicle(targetVehicle) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsInVehicle(
      this.#ptr,
      targetVehicle.getPtr()
    );
    return result.ret;
  }

  /**
   * @method isInAnyVehicle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInAnyVehicle() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsInAnyVehicle(this.#ptr);
    return result.ret;
  }

  /**
   * @method isInRangeOfPoint
   * @param {number} range
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInRangeOfPoint(range, x, y, z) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsInRangeOfPoint(
      this.#ptr,
      range,
      x,
      y,
      z
    );
    return result.ret;
  }

  /**
   * @method playCrimeReport
   * @param {Player} suspect
   * @param {number} crime
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  playCrimeReport(suspect, crime) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.PlayCrimeReport(
      this.#ptr,
      suspect.getPtr(),
      crime
    );
    return result.ret;
  }

  /**
   * @method removeAttachedObject
   * @param {number} index
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  removeAttachedObject(index) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.RemoveAttachedObject(this.#ptr, index);
    return result.ret;
  }

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
    index,
    modelid,
    bone,
    offsetX,
    offsetY,
    offsetZ,
    rotationX,
    rotationY,
    rotationZ,
    scaleX,
    scaleY,
    scaleZ,
    materialcolor1,
    materialcolor2
  ) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetAttachedObject(
      this.#ptr,
      index,
      modelid,
      bone,
      offsetX,
      offsetY,
      offsetZ,
      rotationX,
      rotationY,
      rotationZ,
      scaleX,
      scaleY,
      scaleZ,
      materialcolor1,
      materialcolor2
    );
    return result.ret;
  }

  /**
   * @method getAttachedObject
   * @param {number} index
   * @returns {{ret: boolean, modelid: number,bone: number,offsetX: number,offsetY: number,offsetZ: number,rotationX: number,rotationY: number,rotationZ: number,scaleX: number,scaleY: number,scaleZ: number,materialcolor1: number,materialcolor2: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getAttachedObject(index) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetAttachedObject(this.#ptr, index);
    return result;
  }

  /**
   * @method setFacingAngle
   * @param {number} angle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setFacingAngle(angle) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetFacingAngle(this.#ptr, angle);
    return result.ret;
  }

  /**
   * @method setMarkerForPlayer
   * @param {Player} other
   * @param {number} color
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setMarkerForPlayer(other, color) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetMarkerForPlayer(
      this.#ptr,
      other.getPtr(),
      color
    );
    return result.ret;
  }

  /**
   * @method getMarkerForPlayer
   * @param {Player} other
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getMarkerForPlayer(other) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetMarkerForPlayer(
      this.#ptr,
      other.getPtr()
    );
    return result.ret;
  }

  /**
   * @method allowTeleport
   * @param {boolean} allow
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  allowTeleport(allow) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.AllowTeleport(this.#ptr, allow);
    return result.ret;
  }

  /**
   * @method isTeleportAllowed
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isTeleportAllowed() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsTeleportAllowed(this.#ptr);
    return result.ret;
  }

  /**
   * @method disableRemoteVehicleCollisions
   * @param {boolean} disable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  disableRemoteVehicleCollisions(disable) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.DisableRemoteVehicleCollisions(
      this.#ptr,
      disable
    );
    return result.ret;
  }

  /**
   * @method getCameraZoom
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getCameraZoom() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetCameraZoom(this.#ptr);
    return result.ret;
  }

  /**
   * @method selectTextDraw
   * @param {number} hoverColour
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  selectTextDraw(hoverColour) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SelectTextDraw(this.#ptr, hoverColour);
    return result.ret;
  }

  /**
   * @method cancelSelectTextDraw
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  cancelSelectTextDraw() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.CancelSelectTextDraw(this.#ptr);
    return result.ret;
  }

  /**
   * @method sendClientCheck
   * @param {number} actionType
   * @param {number} address
   * @param {number} offset
   * @param {number} count
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  sendClientCheck(actionType, address, offset, count) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SendClientCheck(
      this.#ptr,
      actionType,
      address,
      offset,
      count
    );
    return result.ret;
  }

  /**
   * @method spawn
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  spawn() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.Spawn(this.#ptr);
    return result.ret;
  }

  /**
   * @method gPCI
   * @returns {{ret: boolean, gpci: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  gPCI() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GPCI(this.#ptr);
    return result;
  }

  /**
   * @method isAdmin
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isAdmin() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsAdmin(this.#ptr);
    return result.ret;
  }

  /**
   * @method kick
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  kick() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.Kick(this.#ptr);
    return result.ret;
  }

  /**
   * @method showGameText
   * @param {string} text
   * @param {number} time
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  showGameText(text, time, style) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ShowGameText(
      this.#ptr,
      text,
      time,
      style
    );
    return result.ret;
  }

  /**
   * @method hideGameText
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  hideGameText(style) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.HideGameText(this.#ptr, style);
    return result.ret;
  }

  /**
   * @method hasGameText
   * @param {number} style
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  hasGameText(style) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.HasGameText(this.#ptr, style);
    return result.ret;
  }

  /**
   * @method getGameText
   * @param {number} style
   * @returns {{ret: boolean, message: string,time: number,remaining: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getGameText(style) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetGameText(this.#ptr, style);
    return result;
  }

  /**
   * @method ban
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  ban() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.Ban(this.#ptr);
    return result.ret;
  }

  /**
   * @method banEx
   * @param {string} reason
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  banEx(reason) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.BanEx(this.#ptr, reason);
    return result.ret;
  }

  /**
   * @method sendDeathMessage
   * @param {Player} killer
   * @param {Player} killee
   * @param {number} weapon
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  sendDeathMessage(killer, killee, weapon) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SendDeathMessage(
      this.#ptr,
      killer.getPtr(),
      killee.getPtr(),
      weapon
    );
    return result.ret;
  }

  /**
   * @method sendMessageToPlayer
   * @param {Player} sender
   * @param {string} message
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  sendMessageToPlayer(sender, message) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SendMessageToPlayer(
      this.#ptr,
      sender.getPtr(),
      message
    );
    return result.ret;
  }

  /**
   * @method getVersion
   * @returns {{ret: boolean, version: string}} return object
   * @throws Will throw an error if the player is invalid
   */
  getVersion() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetVersion(this.#ptr);
    return result;
  }

  /**
   * @method getSkillLevel
   * @param {number} skill
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSkillLevel(skill) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSkillLevel(this.#ptr, skill);
    return result.ret;
  }

  /**
   * @method getZAim
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getZAim() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetZAim(this.#ptr);
    return result.ret;
  }

  /**
   * @method getSurfingOffsets
   * @returns {{ret: boolean, offsetX: number,offsetY: number,offsetZ: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getSurfingOffsets() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSurfingOffsets(this.#ptr);
    return result;
  }

  /**
   * @method getRotationQuat
   * @returns {{ret: boolean, x: number,y: number,z: number,w: number}} return object
   * @throws Will throw an error if the player is invalid
   */
  getRotationQuat() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetRotationQuat(this.#ptr);
    return result;
  }

  /**
   * @method getPlayerSpectateID
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getPlayerSpectateID() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetPlayerSpectateID(this.#ptr);
    return result.ret;
  }

  /**
   * @method getSpectateType
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSpectateType() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSpectateType(this.#ptr);
    return result.ret;
  }

  /**
   * @method getRawIp
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getRawIp() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetRawIp(this.#ptr);
    return result.ret;
  }

  /**
   * @method setGravity
   * @param {number} gravity
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setGravity(gravity) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetGravity(this.#ptr, gravity);
    return result.ret;
  }

  /**
   * @method getGravity
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getGravity() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetGravity(this.#ptr);
    return result.ret;
  }

  /**
   * @method setAdmin
   * @param {boolean} set
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  setAdmin(set) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.SetAdmin(this.#ptr, set);
    return result.ret;
  }

  /**
   * @method isSpawned
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isSpawned() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsSpawned(this.#ptr);
    return result.ret;
  }

  /**
   * @method isControllable
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isControllable() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsControllable(this.#ptr);
    return result.ret;
  }

  /**
   * @method isCameraTargetEnabled
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isCameraTargetEnabled() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsCameraTargetEnabled(this.#ptr);
    return result.ret;
  }

  /**
   * @method toggleGhostMode
   * @param {boolean} toggle
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  toggleGhostMode(toggle) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.ToggleGhostMode(this.#ptr, toggle);
    return result.ret;
  }

  /**
   * @method getGhostMode
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  getGhostMode() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetGhostMode(this.#ptr);
    return result.ret;
  }

  /**
   * @method allowWeapons
   * @param {boolean} allow
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  allowWeapons(allow) {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.AllowWeapons(this.#ptr, allow);
    return result.ret;
  }

  /**
   * @method areWeaponsAllowed
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  areWeaponsAllowed() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.AreWeaponsAllowed(this.#ptr);
    return result.ret;
  }

  /**
   * @method isPlayerUsingOfficialClient
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isPlayerUsingOfficialClient() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsPlayerUsingOfficialClient(this.#ptr);
    return result.ret;
  }

  /**
   * @method getAnimationFlags
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getAnimationFlags() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetAnimationFlags(this.#ptr);
    return result.ret;
  }

  /**
   * @method isInDriveByMode
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInDriveByMode() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsInDriveByMode(this.#ptr);
    return result.ret;
  }

  /**
   * @method isCuffed
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isCuffed() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsCuffed(this.#ptr);
    return result.ret;
  }

  /**
   * @method isInModShop
   * @returns {boolean}
   * @throws Will throw an error if the player is invalid
   */
  isInModShop() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.IsInModShop(this.#ptr);
    return result.ret;
  }

  /**
   * @method getSirenState
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getSirenState() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetSirenState(this.#ptr);
    return result.ret;
  }

  /**
   * @method getLandingGearState
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getLandingGearState() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetLandingGearState(this.#ptr);
    return result.ret;
  }

  /**
   * @method getHydraReactorAngle
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getHydraReactorAngle() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetHydraReactorAngle(this.#ptr);
    return result.ret;
  }

  /**
   * @method getTrainSpeed
   * @returns {number}
   * @throws Will throw an error if the player is invalid
   */
  getTrainSpeed() {
    if (!this.#ptr) {
      throw new Error("Player instance is not valid");
    }

    const result = __internal_omp.Player.GetTrainSpeed(this.#ptr);
    return result.ret;
  }
}

export default Player;
