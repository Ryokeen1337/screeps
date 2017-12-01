import { creepBuildJob } from "./creepBuildJob";
import { creepManager } from "./creepManager";
import { commonHelper } from "../common/commonHelper";
import { serviceNames } from "../common/serviceNames";

class creepFactory
{
	private buildQueue : Array<creepBuildJob>;
	private creepManager : creepManager;

	constructor(_creepManager : creepManager)
	{
		if(_creepManager == null)
			throw new ReferenceError("Invalid creepManager");

		this.creepManager = _creepManager;
		this.buildQueue =  new Array<creepBuildJob>();
		console.log("creepFactory=>create");
	}

	public getServiceName() : string{
		return serviceNames.creepFactoryServ;
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
		if(_creepBuildJob == null)
			throw new ReferenceError("Invalid creepBuildJob");

		if(_creepBuildJob.getDesign() == null)
			throw new ReferenceError("Invalid creepBuildJob=>getDesign");

		_creepBuildJob.setName(this.genCreepName(_creepBuildJob));
		this.buildQueue.push(_creepBuildJob);
		return true;
	}

	public processQueue() : void
	{
		//don't start until we have something in our queue
		if(this.buildQueue.length < 1)
			return;

		//go over every buildJob in queue
		for( let jobIdx = 0; jobIdx < this.buildQueue.length;){
			//safety first
			if(this.buildQueue.length < 1)
				return;

			//get current buildJob
			let buildJob : creepBuildJob = this.buildQueue[jobIdx];		
			//decrease time until next Try
			buildJob.decreaseSpawnTime();
			//don't spawn yet
			if(buildJob.getNextSpawnTime() > 0){
				jobIdx++;
				continue;
			}
			//get spawn
			let spawnLoc : StructureSpawn = Game.spawns[buildJob.getSpawnLocation()];
			//null => no spawn in progress
			if(spawnLoc.spawning === null){
				//spawn creep
				let rc = spawnLoc.spawnCreep(buildJob.getDesignParts(), buildJob.getName(), {memory: {'roleString': buildJob.getRoleString(), 'role' : buildJob.getRole()}});
				console.log("Spawing creep => "+buildJob.getName()+"=> "+rc.toString());
				//remove from queue
				this.buildQueue.shift();	
				//register creep
				let newCreep : Creep = Game.creeps[buildJob.getName()];
				this.creepManager.registerCreep(newCreep,buildJob.getRole());	
			}else{
				//set next spawntime
				buildJob.setNextSpawnTime(spawnLoc.spawning.remainingTime+commonHelper.getRandomInt(3));
				jobIdx++;
			}
		}
	}
}

export { creepFactory };