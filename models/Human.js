'use strict'

// Create Huma constractor function that also inherits from Animal
function Human(name, weight, height, diet) {
  Animal.call(this, weight, height, diet)
  this._name = name
}

Human.prototype.getName = function () {
  return this._name
}
Human.prototype.getHeight = function () {
  return this._height
}
Human.prototype.getWeight = function () {
  return this._weight
}
Human.prototype.getDiet = function () {
  return this._diet
}
