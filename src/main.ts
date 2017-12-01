import { creepFactory } from "./creeps/creepFactory";
import { creepManager } from "./creeps/creepManager";
import { gameServices } from "./gameServices";

let _isInitialized : boolean = false;
let _creepManager : creepManager = null;
let _creepFact : creepFactory = null;
let _gameService : gameServices = null;

function initialize(){
	if(_isInitialized)
		return;

	if(_creepManager == null)
		_creepManager = new creepManager();
	if(_creepFact == null)
		_creepFact = new creepFactory(_creepManager);

	if(_gameService == null)
		_gameService = new gameServices();

	_gameService.registerService(_creepManager.getServiceName(),_creepManager);
	_gameService.registerService(_creepFact.getServiceName(),_creepFact);
}

export const loop = function() 
{
	initialize();

	_creepFact.processQueue();
	_creepManager.processCreeps();

    console.log("running!!");
}
