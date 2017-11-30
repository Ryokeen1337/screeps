class creepFactory{
	private numCreeps : number;

	constructor(){
		this.numCreeps = 1;
	}

	public getNumCreeps() : number{
		return this.numCreeps;
	}
}

export { creepFactory };