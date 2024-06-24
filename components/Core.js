/**
 * Core class
 */
class Core {
  /**
   * @method tickCount
   * @returns {number}
   */
  static tickCount() {
    const result = __internal_omp.Core.TickCount();
    return result.ret;
  }

  /**
   * @method maxPlayers
   * @returns {number}
   */
  static maxPlayers() {
    const result = __internal_omp.Core.MaxPlayers();
    return result.ret;
  }

  /**
   * @method log
   * @param {string} text
   * @returns {boolean}
   */
  static log(text) {
    const result = __internal_omp.Core.Log(text);
    return result.ret;
  }

  /**
   * @method isAdminTeleportAllowed
   * @returns {boolean}
   */
  static isAdminTeleportAllowed() {
    const result = __internal_omp.Core.IsAdminTeleportAllowed();
    return result.ret;
  }

  /**
   * @method allowAdminTeleport
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowAdminTeleport(allow) {
    const result = __internal_omp.Core.AllowAdminTeleport(allow);
    return result.ret;
  }

  /**
   * @method areAllAnimationsEnabled
   * @returns {boolean}
   */
  static areAllAnimationsEnabled() {
    const result = __internal_omp.Core.AreAllAnimationsEnabled();
    return result.ret;
  }

  /**
   * @method enableAllAnimations
   * @param {boolean} allow
   * @returns {boolean}
   */
  static enableAllAnimations(allow) {
    const result = __internal_omp.Core.EnableAllAnimations(allow);
    return result.ret;
  }

  /**
   * @method isAnimationLibraryValid
   * @param {string} name
   * @returns {boolean}
   */
  static isAnimationLibraryValid(name) {
    const result = __internal_omp.Core.IsAnimationLibraryValid(name);
    return result.ret;
  }

  /**
   * @method areInteriorWeaponsAllowed
   * @returns {boolean}
   */
  static areInteriorWeaponsAllowed() {
    const result = __internal_omp.Core.AreInteriorWeaponsAllowed();
    return result.ret;
  }

  /**
   * @method allowInteriorWeapons
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowInteriorWeapons(allow) {
    const result = __internal_omp.Core.AllowInteriorWeapons(allow);
    return result.ret;
  }

  /**
   * @method blockIpAddress
   * @param {string} ipAddress
   * @param {number} timeMS
   * @returns {boolean}
   */
  static blockIpAddress(ipAddress, timeMS) {
    const result = __internal_omp.Core.BlockIpAddress(ipAddress, timeMS);
    return result.ret;
  }

  /**
   * @method unBlockIpAddress
   * @param {string} ipAddress
   * @returns {boolean}
   */
  static unBlockIpAddress(ipAddress) {
    const result = __internal_omp.Core.UnBlockIpAddress(ipAddress);
    return result.ret;
  }

  /**
   * @method disableEntryExitMarkers
   * @returns {boolean}
   */
  static disableEntryExitMarkers() {
    const result = __internal_omp.Core.DisableEntryExitMarkers();
    return result.ret;
  }

  /**
   * @method disableNameTagsLOS
   * @returns {boolean}
   */
  static disableNameTagsLOS() {
    const result = __internal_omp.Core.DisableNameTagsLOS();
    return result.ret;
  }

  /**
   * @method enableZoneNames
   * @param {boolean} enable
   * @returns {boolean}
   */
  static enableZoneNames(enable) {
    const result = __internal_omp.Core.EnableZoneNames(enable);
    return result.ret;
  }

  /**
   * @method showGameTextForAll
   * @param {string} msg
   * @param {number} time
   * @param {number} style
   * @returns {boolean}
   */
  static showGameTextForAll(msg, time, style) {
    const result = __internal_omp.Core.ShowGameTextForAll(msg, time, style);
    return result.ret;
  }

  /**
   * @method hideGameTextForAll
   * @param {number} style
   * @returns {boolean}
   */
  static hideGameTextForAll(style) {
    const result = __internal_omp.Core.HideGameTextForAll(style);
    return result.ret;
  }

  /**
   * @method networkStats
   * @returns {{ret: boolean, output: string}} return object
   */
  static networkStats() {
    const result = __internal_omp.Core.NetworkStats();
    return result;
  }

  /**
   * @method serverTickRate
   * @returns {number}
   */
  static serverTickRate() {
    const result = __internal_omp.Core.ServerTickRate();
    return result.ret;
  }

  /**
   * @method setChatRadius
   * @param {number} globalChatRadius
   * @returns {boolean}
   */
  static setChatRadius(globalChatRadius) {
    const result = __internal_omp.Core.SetChatRadius(globalChatRadius);
    return result.ret;
  }

  /**
   * @method setMarkerRadius
   * @param {number} playerMarkerRadius
   * @returns {boolean}
   */
  static setMarkerRadius(playerMarkerRadius) {
    const result = __internal_omp.Core.SetMarkerRadius(playerMarkerRadius);
    return result.ret;
  }

  /**
   * @method sendRconCommand
   * @param {string} command
   * @returns {boolean}
   */
  static sendRconCommand(command) {
    const result = __internal_omp.Core.SendRconCommand(command);
    return result.ret;
  }

  /**
   * @method setDeathDropAmount
   * @param {number} amount
   * @returns {boolean}
   */
  static setDeathDropAmount(amount) {
    const result = __internal_omp.Core.SetDeathDropAmount(amount);
    return result.ret;
  }

  /**
   * @method gameMode
   * @param {string} string
   * @returns {boolean}
   */
  static gameMode(string) {
    const result = __internal_omp.Core.GameMode(string);
    return result.ret;
  }

  /**
   * @method setGravity
   * @param {number} gravity
   * @returns {boolean}
   */
  static setGravity(gravity) {
    const result = __internal_omp.Core.SetGravity(gravity);
    return result.ret;
  }

  /**
   * @method getGravity
   * @returns {number}
   */
  static getGravity() {
    const result = __internal_omp.Core.GetGravity();
    return result.ret;
  }

  /**
   * @method setNameTagsDrawDistance
   * @param {number} distance
   * @returns {boolean}
   */
  static setNameTagsDrawDistance(distance) {
    const result = __internal_omp.Core.SetNameTagsDrawDistance(distance);
    return result.ret;
  }

  /**
   * @method setWeather
   * @param {number} weatherid
   * @returns {boolean}
   */
  static setWeather(weatherid) {
    const result = __internal_omp.Core.SetWeather(weatherid);
    return result.ret;
  }

  /**
   * @method setWorldTime
   * @param {number} hour
   * @returns {boolean}
   */
  static setWorldTime(hour) {
    const result = __internal_omp.Core.SetWorldTime(hour);
    return result.ret;
  }

  /**
   * @method showNameTags
   * @param {boolean} show
   * @returns {boolean}
   */
  static showNameTags(show) {
    const result = __internal_omp.Core.ShowNameTags(show);
    return result.ret;
  }

  /**
   * @method showPlayerMarkers
   * @param {number} mode
   * @returns {boolean}
   */
  static showPlayerMarkers(mode) {
    const result = __internal_omp.Core.ShowPlayerMarkers(mode);
    return result.ret;
  }

  /**
   * @method usePedAnims
   * @returns {boolean}
   */
  static usePedAnims() {
    const result = __internal_omp.Core.UsePedAnims();
    return result.ret;
  }

  /**
   * @method getWeather
   * @returns {number}
   */
  static getWeather() {
    const result = __internal_omp.Core.GetWeather();
    return result.ret;
  }

  /**
   * @method getWorldTime
   * @returns {number}
   */
  static getWorldTime() {
    const result = __internal_omp.Core.GetWorldTime();
    return result.ret;
  }

  /**
   * @method toggleChatTextReplacement
   * @param {boolean} enable
   * @returns {boolean}
   */
  static toggleChatTextReplacement(enable) {
    const result = __internal_omp.Core.ToggleChatTextReplacement(enable);
    return result.ret;
  }

  /**
   * @method isChatTextReplacementToggled
   * @returns {boolean}
   */
  static isChatTextReplacementToggled() {
    const result = __internal_omp.Core.IsChatTextReplacementToggled();
    return result.ret;
  }

  /**
   * @method isNickNameValid
   * @param {string} name
   * @returns {boolean}
   */
  static isNickNameValid(name) {
    const result = __internal_omp.Core.IsNickNameValid(name);
    return result.ret;
  }

  /**
   * @method allowNickNameCharacter
   * @param {number} character
   * @param {boolean} allow
   * @returns {boolean}
   */
  static allowNickNameCharacter(character, allow) {
    const result = __internal_omp.Core.AllowNickNameCharacter(character, allow);
    return result.ret;
  }

  /**
   * @method isNickNameCharacterAllowed
   * @param {number} character
   * @returns {boolean}
   */
  static isNickNameCharacterAllowed(character) {
    const result = __internal_omp.Core.IsNickNameCharacterAllowed(character);
    return result.ret;
  }

  /**
   * @method clearBanList
   * @returns {boolean}
   */
  static clearBanList() {
    const result = __internal_omp.Core.ClearBanList();
    return result.ret;
  }

  /**
   * @method isIpAddressBanned
   * @param {string} ip
   * @returns {boolean}
   */
  static isIpAddressBanned(ip) {
    const result = __internal_omp.Core.IsIpAddressBanned(ip);
    return result.ret;
  }

  /**
   * @method getWeaponSlot
   * @param {number} weapon
   * @returns {number}
   */
  static getWeaponSlot(weapon) {
    const result = __internal_omp.Core.GetWeaponSlot(weapon);
    return result.ret;
  }

  /**
   * @method addRule
   * @param {string} name
   * @param {string} value
   * @returns {boolean}
   */
  static addRule(name, value) {
    const result = __internal_omp.Core.AddRule(name, value);
    return result.ret;
  }

  /**
   * @method isValidRule
   * @param {string} name
   * @returns {boolean}
   */
  static isValidRule(name) {
    const result = __internal_omp.Core.IsValidRule(name);
    return result.ret;
  }

  /**
   * @method removeRule
   * @param {string} name
   * @returns {boolean}
   */
  static removeRule(name) {
    const result = __internal_omp.Core.RemoveRule(name);
    return result.ret;
  }
}

export default Core;
