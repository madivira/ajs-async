import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static async load() {
    try{
      const data = await read();
      const value = await json(data);
      return Promise.resolve(JSON.parse(value));
    }catch(err){
      return Promise.reject(err);
    } 
  }
}