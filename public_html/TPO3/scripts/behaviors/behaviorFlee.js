function BehaviorFlee(boid) {
    Behavior.call(this, boid); // call super constructor.
}

// subclass extends superclass
BehaviorFlee.prototype = Object.create(Behavior.prototype);
BehaviorFlee.prototype.constructor = BehaviorFlee;

BehaviorFlee.prototype = {
    update: function () {
        
        var fleeVec = this.calcFlee();
        this.boid.sprite.body.acceleration.add(fleeVec.x, fleeVec.y);
        Behavior.prototype.update.call(this);
        MovementUtils.loopWalls(this.boid.getPosition(), this.boid.game.world);
    },
    calcFlee: function () {

        var distance = Phaser.Math.distance(this.boid.sprite.position.x, this.boid.sprite.position.y, this.boid.avoidanceTarget.sprite.position.x, this.boid.avoidanceTarget.sprite.position.y);
        if (distance <= this.boid.runRadius)
        {
            var desired = MovementUtils.seek(this.boid.getPosition(), this.boid.avoidanceTarget.getPosition()).normalize().setMagnitude(this.boid.maxFleeSpeed * this.boid.runRadius / distance);
            var flee = MovementUtils.limit(Phaser.Point.subtract(desired, this.boid.getVelocity()),this.boid.maxForce);
            return flee;
        }
        else
            return new Phaser.Point(0, 0)

    },
    fueraDeRadio: function () {
        var distance = Phaser.Math.distance(this.boid.sprite.position.x, this.boid.sprite.position.y, this.boid.avoidanceTarget.sprite.position.x, this.boid.avoidanceTarget.sprite.position.y);
        if (distance > this.boid.runRadius)
            return true;
        else
            return false;
    }
}
