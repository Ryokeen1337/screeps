/*
export class gameServices<TgameService>{

	private services : Map<string,TgameService>;

	constructor(){
		this.services = new Map<string,TgameService>();
	}

	public registerService(_key : string, _service : TgameService){
		this.services.set(_key,_service);
	}

	public getService(_key : string) : TgameService{
		if(this.services.has(_key))
			return this.services.get(_key);
		else
			return null;
	}
}*/

export class gameServices{
	private services : Map<string,any>;

	constructor(){
		this.services = new Map<string,any>();
	}

	public registerService(_key : string, _service : any){
		if(this.services.has(_key) == false)
			this.services.set(_key,_service);
		else
			throw new Error("Service allready registered");
	}

	public getService(_key : string) : any{
		if(this.services.has(_key))
			return this.services.get(_key);
		else
			return null;
	}
}