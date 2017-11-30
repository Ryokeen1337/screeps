class creepManager{
	private numCreeps : number;
	private creepList : Array<Creep>;

	constructor()
	{
		this.numCreeps = 0;
		this.creepList = new Array();
	}

	public getNumCreeps() : number
	{
		return this.numCreeps;
	}

	public registerCreep(_newCreep : Creep) : void 
	{
		if(_newCreep == null)		{
			console.log("Error at registering Creep => null");
		}

		this.creepList.push(_newCreep);
	}
}

export { creepManager };