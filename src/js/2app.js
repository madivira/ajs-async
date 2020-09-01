import GameSavingLoader from './2GameSaving';

(async () => {
  try {
    const load = await GameSavingLoader.load();
    return load;
  } catch (err) {
    return err;
  }
})();
