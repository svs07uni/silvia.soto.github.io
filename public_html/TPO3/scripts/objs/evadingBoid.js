function EvadingBoid(game, target) {
	Boid.call(this, game); // call super constructor.
	this.evadingTarget = target;
	this.evadingPredict = 3;
	this.maxEvadingSpeed = 110;
	this.maxEvadingForce = 50;
}
// subclass extends superclass
EvadingBoid.prototype = Object.create(Boid.prototype);
EvadingBoid.prototype.constructor = Boid;

EvadingBoid.prototype.create = function(pos,vel,angle, debug){
	Boid.prototype.create.call(this, pos,vel,angle, debug);
}

EvadingBoid.prototype.updateTarget = function(target){
	this.evadingTarget = target;
}

//-------------------------DEBUG-------------------------
EvadingBoid.prototype.debugUpdate = function(){
	Boid.prototype.debugUpdate.call(this);
}

EvadingBoid.prototype.debugRender = function(){
	Boid.prototype.debugRender.call(this);

}

