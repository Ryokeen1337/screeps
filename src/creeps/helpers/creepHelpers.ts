import * as creepRoleConst from ".././constants/creepRoleConst";

export abstract class creepHelpers{

	public static getNameForCreepRole(_creepRole : creepRoleConst.eCreepRoles) : string
	{
		switch(_creepRole){
			case creepRoleConst.eCreepRoles.harvester :{
				return "harvester";
			}
			case creepRoleConst.eCreepRoles.upgrader :{
				return "upgrader";
			}
			default : {
				console.log("getNameForCreepRole => invalid creep role")
				return "invalid";
			}
		}
	}
}