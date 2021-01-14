'use strict'

// Create Dino Constructor that inherits from Animal
function Dino(species, weight, height, diet, where, when, fact) {
  Animal.call(this, weight, height, diet)
  this._species = species
  this._location = where
  this._era = when
  this._fact = fact
}

Dino.prototype.getSpecies = function () {
  return this._species
}

Dino.prototype.getLocation = function () {
  return this._location
}

Dino.prototype.getFact = function () {
  return `${this._fact}.`
}

Dino.prototype.getLocationFact = function () {
  return `${this._species} lived in ${this.location}.`
}

Dino.prototype.getTimelineFact = function () {
  return `${this._species} lived in ${this.timeline}`
}
