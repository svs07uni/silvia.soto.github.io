function ArrivalDestination(game) {
  Immovable.call(this, game); // call super constructor.
  this.arrivalZone = 400;//radio de arribo
}

// subclass extends superclass
ArrivalDestination.prototype = Object.create(Immovable.prototype);
ArrivalDestination.prototype.constructor = ArrivalDestination;
