import { creepDesign } from "./designs/creepDesign";
import * as creepRoleConst from "./constants/creepRoleConst";
import { creepHelpers } from "./helpers/creepHelpers";

export class creepBuildJob
{
	private spawnLocation : string;
	private design : creepDesign;
	private role : creepRoleConst.eCreepRoles;
	private roleString : string;
	private nextSpawnTime : number;
	private creepName : string;

	constructor(_spawnLocation : string, _role : creepRoleConst.eCreepRoles){
		this.spawnLocation = _spawnLocation;
		this.design = null;
		this.role = _role;
		this.roleString = creepHelpers.getNameForCreepRole(this.role);
		this.nextSpawnTime = 0;
	}

	public setDesign(_design : creepDesign){
		if(_design == null){
			throw new ReferenceError("Null design in creepBuildJob");
		}
		this.design = _design;
	}

	public setName(_creepName : string){
		this.creepName = _creepName;
	}

	public setNextSpawnTime(_nextTime : number){
		this.nextSpawnTime = _nextTime;
	}

	public getSpawnLocation():string{
		return this.spawnLocation;
	}

	public getDesign() : creepDesign{
		return this.design;
	}

	public getDesignParts() : Array<string>{
		return this.design.getDesignParts();
	}

	public getRole() : creepRoleConst.eCreepRoles{
		return this.role;
	}

	public getRoleString() : string{
		return this.roleString;
	}

	public getName() : string{
		return this.creepName;
	}

	public getNextSpawnTime() : number{
		return this.nextSpawnTime;
	}

	public decreaseSpawnTime(){
		this.nextSpawnTime--;
	}
}