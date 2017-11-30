import { creepDesign } from "./designs/creepDesign";
import * as creepRoleConst from "./constants/creepRoleConst";
import { creepHelpers } from "./helpers/creepHelpers";

export class creepBuildJob
{
	private spawnLocation : string;
	private design : creepDesign;
	private role : creepRoleConst.eCreepRoles;
	private roleString : string;

	constructor(_spawnLocation : string, _role : creepRoleConst.eCreepRoles){
		this.spawnLocation = _spawnLocation;
		this.design = null;
		this.role = _role;
		this.roleString = creepHelpers.getNameForCreepRole(this.role);
	}

	public setDesign(_design : creepDesign){
		if(_design == null){
			throw new ReferenceError("Null design in creepBuildJob");
		}
		this.design = _design;
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
}