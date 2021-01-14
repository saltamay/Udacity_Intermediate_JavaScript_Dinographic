'use strict'

const DinosCtrl = (function () {
  // Dinos Data
  // Create Dino Object Instances
  const dinos = data.map(function (dino) {
    const { species, weight, height, diet, where, when, fact } = dino
    return new Dino(species, weight, height, diet, where, when, fact)
  })

  return {
    getAllDinos: function () {
      return dinos
    },
  }
})()
