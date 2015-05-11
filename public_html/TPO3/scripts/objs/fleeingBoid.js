function FleeingBoid(game, target) {
	Boid.call(this, game); // call super constructor.
	this.avoidanceTarget = target;
	this.runRadius = 400;
	this.maxFleeSpeed = 100;
	this.maxFleeForce = 50;
	this.minFleeForce = 10;

}

// subclass extends superclass
FleeingBoid.prototype = Object.create(Boid.prototype);
FleeingBoid.prototype.constructor = Boid;

FleeingBoid.prototype.create = function(pos,vel,angle, debug){
	Boid.prototype.create.call(this, pos,vel,angle, debug);
}

FleeingBoid.prototype.updateAvoidance = function(target){
	this.avoidanceTarget = target;
}

//----------------DEBUG-----------------------

FleeingBoid.prototype.debugUpdate = function(){
	Boid.prototype.debugUpdate.call(this);
}

FleeingBoid.prototype.debugRender = function(){
	Boid.prototype.debugRender.call(this);

}

