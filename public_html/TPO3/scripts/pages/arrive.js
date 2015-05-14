
$(document).ready(function() {
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

	var numBoids = 5;
  var Flock = [];
  var Flockable = [];
  var destinos = [];
	var self = this;
	var isDebugging = false;
var destino;
var ave;

  function preload () {
  	game.load.image('fondo', 'assets/fondo.PNG');
	game.load.image('mariposa', 'assets/mariposa.png');
	game.load.image('casa', 'assets/home.png');
    game.load.image('jay', 'assets/un_jay.png');//alias,url,ancho,alto
  }

  function create () {
	game.physics.startSystem(Phaser.Physics.ARCADE);    
	var bg = game.add.sprite(0, 0, 'fondo');
    createArrivalTest();
	}

function createArrivalTest()
	{
    destino = new Spaceport(game);
    destino.initalize(1,'casa');
    var pos = new Phaser.Point( game.world.width-50, game.world.height-50);
    var vel = new Phaser.Point(0,0);
    destino.create(pos,vel, 0, isDebugging);
    destino.category = 1;
    destino.behavior = new Behavior(destino);
    
	createArriveGroup(destino);
	}

  function createArriveGroup(destino)
  {
	
   
	 for(var i = 0; i < numBoids; ++i)
    {
      var ave = new ArrivingShip(game, destino);
      ave.initalize(2,'jay');
      var xpos = Math.floor(Math.random()*game.world.bounds.width);
      var ypos = Math.floor(Math.random()*game.world.bounds.height);
      var pos = new Phaser.Point(xpos, ypos);
      var vel = new Phaser.Point(0,0);
      ave.create(pos,vel, 0, isDebugging);
	
      ave.category = 1;
      ave.behavior = new BehaviorArrive(ave);
      Flock.push(ave);
      Flockable.push(ave);
    }
  }

   //LOOP
  function update(){
  	for (var i = 0; i < Flockable.length; i++)
  	{
  		Flockable[i].behavior.update(Flockable);
		game.physics.arcade.overlap(destino, Flockable[i], reunion, null, this);
  		if(isDebugging)
  		{
  		  Flockable[i].debugUpdate();
  		}
  	}
	
	
  }
var cont = 0;

function reunion(){
	cont++;
if(cont == numBoids){
destino.sprite.position.x = Math.floor(Math.random()*game.world.bounds.width);
destino.sprite.position.y = Math.floor(Math.random()*game.world.bounds.height);
}
	
}

  function render(){

		if(isDebugging)
		{
				for (var i = 0; i < Flockable.length; i++)
				{
					Flockable[i].debugRender();
				}
		}
  }


});
