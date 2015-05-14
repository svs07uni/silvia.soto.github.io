$(document).ready(function() {
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

	var numBoids = 1;
  var Flockable = [];
	var self = this;
	var isDebugging = false;
	
	var ave;

  function preload () {
  	game.load.image('fondo', 'assets/fondo.PNG');
	game.load.image('mariposa', 'assets/mariposa.png');
	game.load.image('serpiente', 'assets/serpiente.png');
    game.load.image('jay', 'assets/un_jay.png');//alias,url,ancho,alto

  }

  function create () {
    var bg = game.add.sprite(0, 0, 'fondo');
	
	
	
    createFleeingTest();
	}

	function createFleeingTest()
	{
    var predador = createAve();
    var victima = createFleeingObject();
    //predador.updateTarget(victima);
    victima.updateAvoidance(predador);
	}

  function createAve()
  {
    ave = new Ship(game);
    ave.initalize(1,'jay');
    var xpos = Math.floor(Math.random()*game.world.bounds.width);
    var ypos = Math.floor(Math.random()*game.world.bounds.height);
    var pos = new Phaser.Point(xpos,ypos);
    var vel = new Phaser.Point(0,0);
    ave.create(pos,vel, 0, isDebugging);//posicion, velocidad, angulo, isDebugging
	
	//ave.category = 1;
    //ave.behavior = new BehaviorPursue(ave);
    //Flockable.push(ave);
    return ave;
  }

  function createFleeingObject()
  {
    var mariposa = new FleeingShip(game,null);
    mariposa.initalize(1,'mariposa');
    var xpos = Math.floor(Math.random()*game.world.bounds.width);
    var ypos = Math.floor(Math.random()*game.world.bounds.height);
    var pos = new Phaser.Point(xpos,ypos);
    var vel = new Phaser.Point(30,20);
    mariposa.create(pos,vel, 0, isDebugging);
    mariposa.category = 1;
    mariposa.behavior = new BehaviorFlee(mariposa);
    Flockable.push(mariposa);
    return mariposa;
  }

   //LOOP
  function update(){
  	

	for (var i = 0; i < Flockable.length; i++)
  	{
      Flockable[i].behavior.update(Flockable);

  		if(isDebugging)
  		{
  		  Flockable[i].debugUpdate();
  		}
  	}
  }

	function cambiarPosicion(){
		var xpos = Math.floor(Math.random()*game.world.bounds.width);
    	var ypos = Math.floor(Math.random()*game.world.bounds.height);
    	var pos = new Phaser.Point(xpos,ypos);
   	 	ave.position.x = xpos;
		ave.position.y = ypos;
		
		//return ave;
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
