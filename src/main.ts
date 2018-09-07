import { creepFactory } from "./creeps/creepFactory";
import { creepManager } from "./creeps/creepManager";
import { gameServices } from "./gameServices";
//import { serviceNames } from "./common/serviceNames";


export const initialize = function() 
{
	if(Memory.isInitialized === true)
		return;

	Memory.isInitialized = true;

	console.log("Initialize!!");

	let _creepManager : creepManager = new creepManager();
	let _creepFact : creepFactory = new creepFactory(_creepManager);

	var _gameServices = new gameServices();
	_gameServices.registerService(_creepManager.getServiceName(),_creepManager);
	_gameServices.registerService(_creepFact.getServiceName(),_creepFact);

	Memory.Services = _gameServices;

	let _test : Array<Array<string>> = new Array<Array<string>>();
	_test.push(new Array<string>());
	_test.push(new Array<string>());

	_test[0].push("test01");
	_test[0].push("test02");
	_test[1].push("test11");
	_test[1].push("test12");
	Memory.testMap = _test;
}

export const loop = function() 
{
	initialize();

	if(Memory.isInitialized !== true)
		return;

	//let _test : Map<string,any> = Memory.testMap;
	//console.log(_test.get("lulu"));

	/*var _gameServices = Memory.Services;

	let _creepFact : creepFactory = _gameServices.getService(serviceNames.creepFactoryServ);
	let _creepManager : creepManager = _gameServices.getService(serviceNames.creepManagerServ);

	_creepFact.processQueue();
	_creepManager.processCreeps();*/

    console.log("running!!");
}
