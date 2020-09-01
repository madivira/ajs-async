import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const promise = new Promise((resolve, reject) => {
      const data = read();
      data.then((result) => {
        const value = json(result);
        resolve(value);
      }).catch((err) => {
        reject(err);
      });
    });
    return new Promise((resolve, reject) => {
      promise.then((result) => {
        resolve(JSON.parse(result));
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
