import { Player } from "./index";
import { internal_omp } from "../globals";

/**
 * CustomModel class
 */
export default class CustomModel {
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
  ): boolean {
    const result = internal_omp.CustomModel.AddCharModel(
      baseid,
      newid,
      dff,
      textureLibrary
    );
    return result.ret;
  }

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
  ): boolean {
    const result = internal_omp.CustomModel.AddSimpleModel(
      virtualWorld,
      baseid,
      newid,
      dff,
      textureLibrary
    );
    return result.ret;
  }

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
  ): boolean {
    const result = internal_omp.CustomModel.AddSimpleModelTimed(
      virtualWorld,
      baseid,
      newid,
      dff,
      textureLibrary,
      timeOn,
      timeOff
    );
    return result.ret;
  }

  /**
   * @method redirectDownload
   * @param {Player} player
   * @param {string} url
   * @returns {boolean}
   */
  static redirectDownload(player: Player, url: string): boolean {
    const result = internal_omp.CustomModel.RedirectDownload(
      player.getPtr(),
      url
    );
    return result.ret;
  }

  /**
   * @method findModelFileNameFromCRC
   * @param {number} crc
   * @returns {{ret: boolean, output: string}} return object
   */
  static findModelFileNameFromCRC(crc: number): {
    ret: boolean;
    output: string;
  } {
    const result = internal_omp.CustomModel.FindModelFileNameFromCRC(crc);
    return result;
  }

  /**
   * @method isValid
   * @param {number} modelId
   * @returns {boolean}
   */
  static isValid(modelId: number): boolean {
    const result = internal_omp.CustomModel.IsValid(modelId);
    return result.ret;
  }

  /**
   * @method getPath
   * @param {number} modelId
   * @returns {{ret: boolean, dffPath: string,txdPath: string}} return object
   */
  static getPath(modelId: number): {
    ret: boolean;
    dffPath: string;
    txdPath: string;
  } {
    const result = internal_omp.CustomModel.GetPath(modelId);
    return result;
  }
}
