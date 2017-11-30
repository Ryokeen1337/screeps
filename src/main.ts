import { creepFactory } from "./creeps/creepFactory";

export const loop = function() {

	let creepFact : creepFactory = new creepFactory();
    console.log("running!!" + creepFact.getNumCreeps());
}
