class GameConfig{
	constructor(){
	//Add new dagents here
	//color - which color should be it's visibility circle
	//frame - which human character image should be used (0..51)
	//name - which name should be shown on the screen
	//ai - which AI class should be used to control its bbehaviour
		this.botsInTournament = [
			{color:0xff0000, frame:0, name:"PlayerA", ai:BasicAI},
			{color:0x00ff00, frame:1, name:"PlayerB", ai:RandomMoverAI},
			{color:0x0000ff, frame:2, name:"PlayerC", ai:CoinsChaserAI},
		]
	}
}