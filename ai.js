class BasicAI
	{
		
	constructor()
	{
		
	}
	/*
	AI agent 2 times per second calls the function makeMovementDecision
	The world builds the visible situation around the agent. 
	ownPosChange - object {dx, dy} with own change of coordinates from the previous AI call
	situationOb.items - array of objects {dx, dy} with relative positions of visible coins
	situationOb.units - array of objects {isAlly, dx, dy} with relative positions of visible units and bool is they are from the same team as myself
	output: object {dx, dy} of a relative position defining where to move
	*/ 
	makeMovementDecision(situationOb){
		return{dx:0, dy:0};
	}
	
}

//does not look at coins, just moves in a random direction every time
class RandomMoverAI extends BasicAI
	{
		
	constructor()
	{
		super();
		
	}
	makeMovementDecision(situationOb/*:Object*/)/*:Object*/{
		var dx/*:Number*/ = Math.random()* 1000 - 500
		var dy/*:Number*/ = Math.random()* 1000 - 500

		return{dx:dx, dy:dy};
	}
}

//simplest coins gatherer - tries to go towards the first visible coin from the list (not necessarily the closes one)
//if no coins visible, moves in a random direction
class CoinsChaserAI extends BasicAI
	{
		
	constructor()
	{
		super();
		
	}

	makeMovementDecision(situationOb/*:Object*/)/*:Object*/{
		var dx/*:Number*/ = Math.random()* 100 - 50
		var dy/*:Number*/ = Math.random()* 100 - 50
		
		if(situationOb.items.length > 0){
			dx = situationOb.items[0].dx
			dy = situationOb.items[0].dy
		}
		
		return{dx:dx, dy:dy};
	}
}