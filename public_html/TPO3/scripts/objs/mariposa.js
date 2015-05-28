function Mariposa(game, colTarget) {
    Boid.call(this, game);
    this.colTarget = colTarget;
}

// subclass extends superclass
Mariposa.prototype = Object.create(Boid.prototype);
Mariposa.prototype.constructor = Boid;

Mariposa.prototype.crear = function (tipo) {
    var pos = new Phaser.Point(game.world.width * 0.5, game.world.height * 0.5);
    var vel = new Phaser.Point(0, 0);
    switch (tipo) {
        case 1://wandering
            this.cargarWandering();
            WanderingBoid.prototype.create.call(this, pos, vel, 0, false);
            this.setVelocity(100);
            this.behavior = new BehaviorWander(this);
            break;
        case 2: //flee
            if (this.colTarget.length > 0) {
                this.cargarFlee(this.colTarget[0]);
                FleeingBoid.prototype.create.call(this, pos, vel, 0, false);
                this.setVelocity(200);
                this.behavior = new BehaviorFlee(this);
            }
            break;
    }


    return this;
}

Mariposa.prototype.update = function () {
    this.behavior.update();
}
