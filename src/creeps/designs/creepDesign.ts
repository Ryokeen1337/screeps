export class creepDesign
{
	private parts : Array<string>;

	constructor(){
		this.parts = new Array();
	}

	public getDesignParts() : Array<string>{
		return this.parts;
	}
}