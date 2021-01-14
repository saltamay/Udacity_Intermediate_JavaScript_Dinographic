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
  return `${this._species} lived in ${this._location}.`
}

Dino.prototype.getTimelineFact = function () {
  return `${this._species} lived in ${this._era} era.`
}

Dino.prototype.heightComparisonFact = function (human) {
  let str
  let heightIndex
  if (this._height > human.getHeight()) {
    heightIndex = Math.round(this._height - human.getHeight())
    str = `${this._species} was ${lib.heightInFeetAndInches(
      this._height,
    )} tall! `
    str += `${lib.heightInFeetAndInches(heightIndex)} taller than you!`
  } else if (this._height < human.getHeight()) {
    heightIndex = Math.round(human.getHeight() - this._height)
    str = `Woow! You are taller than ${
      this._species
    } by ${lib.heightInFeetAndInches(heightIndex)}!`
  } else {
    str = `You are as tall as ${
      this._species
    }! You both are ${lib.heightInFeetAndInches(this._height)} tall.`
  }
  return str
}

Dino.prototype.weigtComparisonFact = function (human) {
  let str
  let weightIndex
  if (this._weight > human.getWeight()) {
    weightIndex = Math.round(this._weight / human.getWeight())
    str = `${this._species} weighed ${this._weight.toLocaleString()} pounds! `
    str += `Almost ${weightIndex} times bigger than you!`
  } else if (this._weight < human.getWeight()) {
    weightIndex = Math.round(human.getWeight() - this._weight)
    str = `Woow! You are heavier than ${
      this._species
    } by ${weightIndex.toLocaleString()} pounds!`
  } else {
    str = `${
      this._species
    } also weighed ${this._weight.toLocaleString()} pounds!`
  }
  return str
}

Dino.prototype.methodsCollection = []

Dino.prototype.populateMethodsCollection = function () {
  for (const key in Dino.prototype) {
    if (
      Object.hasOwnProperty.call(Dino.prototype, key) &&
      key.toLocaleLowerCase().includes('fact')
    ) {
      this.methodsCollection.push(this[key])
    }
  }
}

Dino.prototype.getRandomInfo = function () {
  this.populateMethodsCollection()
  const randIndex = Math.floor(Math.random() * this.methodsCollection.length)
  return this.methodsCollection[randIndex]
}
