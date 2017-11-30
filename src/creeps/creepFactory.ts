import { creepBuildJob } from "./creepBuildJob";
import { creepManager } from "./creepManager";

class creepFactory
{
	private buildQueue : Array<creepBuildJob>;
	private creepManager : creepManager;

	constructor(_creepManager : creepManager)
	{
		this.creepManager = _creepManager;
		this.buildQueue =  new Array<creepBuildJob>();
	
	}

	private genCreepName(_creepBuildJob : creepBuildJob) : string
	{
		let newFullName : string;
	
		let cachedName : string | number = this.creepManager.getFreeCreepNameForRole(_creepBuildJob.getRole());
		if(typeof cachedName ==="number"){
			newFullName = _creepBuildJob.getRoleString() + cachedName;
		}else{
			newFullName = cachedName;
		}
		
		return newFullName;
	}

	/*
	add creep to buildQueue
	*/
	public buildCreep(_creepBuildJob : creepBuildJob) : boolean
	{
		this.buildQueue.push(_creepBuildJob);
		return true;
		//var rc = Game.spawns['Spawn1'].spawnCreep(drone_designs['emergency'], role + '_' + Game.time, {memory: {'role': role}});
	}

	public processQueue() : void
	{
		for(let entry of this.buildQueue){
			let creepName : string = this.genCreepName(entry);
			let rc = Game.spawns[entry.getSpawnLocation()].spawnCreep(entry.getDesignParts(), creepName, {memory: {'role': entry.getRoleString()}});
			console.log("Spawing creep => "+creepName+"=> "+rc.toString());
		}
	}
}

export { creepFactory };