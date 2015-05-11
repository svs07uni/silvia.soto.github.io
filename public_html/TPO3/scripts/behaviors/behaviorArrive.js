function BehaviorArrive(boid) {
	Behavior.call(this, boid); // call super constructor.
}


// subclass extends superclass
BehaviorArrive.prototype = Object.create(Behavior.prototype);
BehaviorArrive.prototype.constructor = BehaviorArrive;

BehaviorArrive.prototype = {

	update:function(){
		var arrive = this.calcArrival();
		this.boid.sprite.body.acceleration.add(arrive.x,arrive.y);
		Behavior.prototype.update.call(this);
		MovementUtils.loopWalls(this.boid.sprite.body.position,this.boid.game.world);
	},

	calcArrival:function(){

		var seek = MovementUtils.seek(this.boid.arrivalTarget.sprite.position,this.boid.sprite.position).normalize();
		var distance = Phaser.Math.distance(this.boid.sprite.position.x, this.boid.sprite.position.y, this.boid.arrivalTarget.sprite.position.x, this.boid.arrivalTarget.sprite.position.y);
                var desired;
		if(distance <= this.boid.arrivalTarget.arrivalZone)
		{
			desired = new Phaser.Point(seek.x*this.boid.maxSpeed*(distance/this.boid.arrivalTarget.arrivalZone), seek.y*this.boid.maxSpeed*(distance/this.boid.arrivalTarget.arrivalZone));
                       
		}
		else
		{
			desired = new Phaser.Point(seek.x*this.boid.maxSpeed, seek.y*this.boid.maxSpeed);
		}

		return MovementUtils.limit(Phaser.Point.subtract(desired, this.boid.sprite.body.velocity),this.boid.maxForce);
	}
}
