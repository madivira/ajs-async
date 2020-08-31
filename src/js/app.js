import GameSavingLoader from "./GameSaving";

(async ()=> {
    try{
        let load = await GameSavingLoader.load();
        console.log(load);
    }catch(err){
        console.log(error);
    }
})()