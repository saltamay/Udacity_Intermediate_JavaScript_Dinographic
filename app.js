// Create Dino Constructor
'use strict'

const App = (function (model = null, view = null, controller = null) {
  // console.log(data)
  // console.log(Model.getDinos())

  return {
    init: function () {
      // Data
      // Create Dino Object Instances
      const dinos = data.map(function (dino) {
        const { species, weight, height, diet, where, when, fact } = dino
        return new Dino(species, weight, height, diet, where, when, fact)
      })
      console.log('Starting...')
      console.log(dinos)
    },
  }
})()

App.init()

// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
