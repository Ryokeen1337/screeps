import { creepFactory } from "./creeps/creepFactory";
import { creepManager } from "./creeps/creepManager";

export const loop = function() 
{
	let _creepManager : creepManager = new creepManager();
	let _creepFact : creepFactory = new creepFactory(_creepManager);
	_creepFact.processQueue();
    console.log("running!!");
}
