import * as creepRoleConst from "./constants/creepRoleConst";
import { creepBuildJob } from "./creepBuildJob";

class creepFactory
{
	private creepCounter : Array<number>;
	private buildQueue : Array<creepBuildJob>;
	private freeCreepNames : Array<Array<string>>;

	constructor()
	{
		this.buildQueue =  new Array();
		this.creepCounter = new Array();
		this.freeCreepNames = new Array();

		//initialize freeNames array
		for( let idx = 0; idx < creepRoleConst.eCreepRoles.invalid; idx++){
			this.freeCreepNames.push(new Array());
		}
	}

	private genCreepName(_creepBuildJob : creepBuildJob) : string
	{
		let creepRole :  creepRoleConst.eCreepRoles = _creepBuildJob.getRole();
		//no free names for this role
		if(this.freeCreepNames[creepRole].length < 1)
			return _creepBuildJob.getRoleString()+this.creepCounter[creepRole];
		else
			return this.freeCreepNames[creepRole].pop();
	}

	/*
	add creep to buildQueue
	*/
	public buildCreep(_creepBuildJob : creepBuildJob) : any
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