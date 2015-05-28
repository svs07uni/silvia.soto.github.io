function Boid(game) {
  Entity.call(this, game); // call super constructor.

  // Behavior Objects
	this.sepInfluence = 10;
	this.aligInfluence = 40;
	this.cohInfluence = 50;

	this.sepWeight = 1.8;
	this.cohWeight = 0.1;
	this.aligWeight = 0.5;

	this.maxSpeed = 200;
	this.minSpeed = 30;
	this.maxForce = 1;
	this.maxAvoid = 3;
	this.maxSeeAhead = 100;
	this.debugAheadCatch = null;
	this.debugVel = null;
	this.debugLooK = null;
}



// subclass extends superclass
Boid.prototype = Object.create(Entity.prototype);
Boid.prototype.constructor = Boid;


Boid.prototype.create = function(pos,vel,angle, debug) {

	Entity.prototype.create.call(this, pos,vel,angle, debug);
	if(debug)
	{
		this.debugVel = new Phaser.Line(0,0,0,0);
		this.debugLooK = new Phaser.Line(0,0,0,0);
	}

	return this;
}

Boid.prototype.setVelocity = function(vel){
    this.maxSpeed = vel;
}

//----------------DEBUG-------------------------------

Boid.prototype.debugUpdate = function() {

	Entity.prototype.debugUpdate.call(this);
	this.debugVel.start.x = this.sprite.position.x;
	this.debugVel.start.y = this.sprite.position.y;
	this.debugVel.end.x = this.sprite.position.x + this.sprite.body.velocity.x;
	this.debugVel.end.y = this.sprite.position.y + this.sprite.body.velocity.y;

	//this.debugLooK.start.x = this.sprite.position.x;
	//this.debugLooK.start.y = this.sprite.position.y;
	//this.debugLooK.end.x =  this.debugAheadCatch.x;
	//this.debugLooK.end.y = this.debugAheadCatch.y;

}

Boid.prototype.debugRender = function() {

	Entity.prototype.debugRender.call(this);

	this.game.debug.geom(this.debugVel,'red', true);
}


Boid.prototype.cargarWandering = function(){
    this.wanderRadialMag = 20;
	this.distanceExtension = 100;
	this.wanderAngle = 0;
	this.wanderVariance = 180;
	this.wanderDate = new Date();
	this.wanderDelta = 200;

	
}

Boid.prototype.cargarFlee = function(target){
    this.avoidanceTarget = target;
	this.runRadius = 400;
	this.maxFleeSpeed = 100;
	this.maxFleeForce = 50;
	this.minFleeForce = 10;
}