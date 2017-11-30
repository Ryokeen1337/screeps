import * as creepRoleConst from "./constants/creepRoleConst";

class creepManager{
	private numCreeps : number;
	private numCreepsByRole : Array<number>;
	private creepList : Array<Array<Creep>>;
	private freeCreepNames : Array<Array<string>>;

	constructor()
	{
		this.numCreeps = 0;
		this.creepList = new Array<Array<Creep>>(creepRoleConst.eCreepRoles.endRoles);
		this.freeCreepNames = new Array<Array<string>>(creepRoleConst.eCreepRoles.endRoles);
		this.numCreepsByRole = new Array<number>(creepRoleConst.eCreepRoles.endRoles);

		//initialize freeNames array
		for( let idx = 0; idx < creepRoleConst.eCreepRoles.endRoles; idx++){
			this.freeCreepNames[idx] = new Array<string>();
			this.creepList[idx] = new Array<Creep>()
		}
	}

	public getNumCreeps() : number
	{
		return this.numCreeps;
	}

	public getFreeCreepNameForRole(_creepRole : creepRoleConst.eCreepRoles) : string | number{
		if(this.freeCreepNames[_creepRole].length < 1)
			return this.numCreepsByRole[_creepRole] + 1;
		else
			return this.freeCreepNames[_creepRole].pop();
	}

	public registerCreep(_newCreep : Creep, _creepRole : creepRoleConst.eCreepRoles) : void 
	{
		if(_newCreep == null){
			console.log("Error at registering Creep => null");
		}

		this.creepList[_creepRole].push(_newCreep);
		this.numCreepsByRole[_creepRole]++;
		this.numCreeps++;
	}
}

export { creepManager };