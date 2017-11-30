import { creepFactory } from "./creeps/creepFactory";

export const loop = function() 
{

	let creepFact : creepFactory = new creepFactory();
	creepFact.processQueue();
    console.log("running!!");
}
