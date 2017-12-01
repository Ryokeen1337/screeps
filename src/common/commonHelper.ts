export abstract class commonHelper{

	public static getRandomInt(_max :  number, _min: number = 0) : number
	{
		return Math.floor(Math.random()*_max)+_min;
	}
}