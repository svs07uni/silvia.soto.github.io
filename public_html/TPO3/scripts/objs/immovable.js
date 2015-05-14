function Immovable(game) {
  Entity.call(this, game); // call super constructor.
}

// subclass extends superclass
Immovable.prototype = Object.create(Entity.prototype);
Immovable.prototype.constructor = Immovable;


Immovable.prototype.initialize = function(index, asset){

	Entity.prototype.initialize.call(this,index, asset);
	return this;
}

Immovable.prototype.create = function(pos,vel,angle, debug){
	Entity.prototype.create.call(this, pos,vel,angle, debug);
	return this;
}

//-------------------DEBUG------------------------------------------

Immovable.prototype.debugUpdate = function(){
	Entity.prototype.debugUpdate.call(this);
}

Immovable.prototype.debugRender = function(){
	Entity.prototype.debugRender.call(this);
}

