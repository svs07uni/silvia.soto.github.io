function Ave(game) {
    Boid.call(this,game);
    this.colTarget = null;
    this.un_target = null;
}

// subclass extends superclass
Ave.prototype = Object.create(Boid.prototype);
Ave.prototype.constructor = Boid;

Ave.prototype.crear = function (target) {
    this.colTarget = target;
    var pos = new Phaser.Point(game.world.width *0.5, game.world.height *0.5);
    var vel = new Phaser.Point(0, 0);
    Boid.prototype.create.call(this,pos, vel, 0, false);
    this.un_target = target.length-1;
    this.behavior = new BehaviorFind(this,this.colTarget[this.un_target]);
    
    return this;
}

Ave.prototype.update = function () {
    this.behavior.update();
    
    game.physics.arcade.overlap(this.sprite, this.colTarget[this.un_target].sprite, cambiarTarget, null, this);
    
}

function cambiarTarget(ave, boid){
    boid.kill();
    this.un_target--;
    if(this.un_target > 0){
        target = this.colTarget[this.un_target];
        this.behavior.cambiarTarget(target);
    }
    else{//Mato todas las mariposas
        
    }
}