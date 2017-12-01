import { creepFactory } from "./creeps/creepFactory";
import { creepManager } from "./creeps/creepManager";
import { gameServices } from "./gameServices";
import { serviceNames } from "./common/serviceNames";

let _isInitialized : boolean = false;
let _gameService : gameServices = null;

function initialize(){
	if(_isInitialized)
		return;

	let _creepManager : creepManager = new creepManager();
	let _creepFact : creepFactory = new creepFactory(_creepManager);

	if(_gameService == null)
		_gameService = new gameServices();

	_gameService.registerService(_creepManager.getServiceName(),_creepManager);
	_gameService.registerService(_creepFact.getServiceName(),_creepFact);

	_isInitialized = true;
}

export const loop = function() 
{
	initialize();

	let _creepFact : creepFactory = _gameService.getService(serviceNames.creepFactoryServ);
	let _creepManager : creepManager = _gameService.getService(serviceNames.creepManagerServ);
	
	_creepFact.processQueue();
	_creepManager.processCreeps();

    console.log("running!!");
}
