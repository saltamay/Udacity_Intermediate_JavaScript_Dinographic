'use strict'

// Create Animal Constructor
function Animal(weight, height, diet) {
  this._weight = weight
  this._height = height
  this._diet = diet
}
Animal.prototype.getWeight = function () {
  return this._weight
}
Animal.prototype.getHeight = function () {
  return this._height
}
Animal.prototype.getDiet = function () {
  return this._diet
}
