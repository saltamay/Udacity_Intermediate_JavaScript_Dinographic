// Create Dino Constructor
'use strict'

const DinoCtrl = (function () {
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

const HumanCtrl = (function () {
  return {
    createHuman: function (name, weight, height, diet) {
      return new Human(name, weight, height, diet)
    },
  }
})()

const UICtrl = (function () {
  const UISelectors = {
    name: '#name',
    feet: '#feet',
    inches: '#inches',
    weight: '#weight',
    diet: '#diet',
  }

  return {
    getFormData: function () {
      return {
        name: document.querySelector(UISelectors.name).value,
        feet: parseInt(document.querySelector(UISelectors.feet).value),
        inches: parseInt(document.querySelector(UISelectors.inches).value),
        weight: parseInt(document.querySelector(UISelectors.weight).value),
        diet: document.querySelector(UISelectors.diet).value,
      }
    },
  }
})()

const App = (function (dinoController, humanController, uiController) {
  // Load event listeners
  let appData = {
    dinos: null,
    user: null,
  }

  const loadEventListeners = function () {
    document.querySelector('#btn').addEventListener('click', getUserInput)
  }

  const getUserInput = function (e) {
    const formData = UICtrl.getFormData()
    const [name, feet, inches, weight, diet] = Object.values(formData)
    const height = feetToInchConvertor(feet) + inches
    appData.user = HumanCtrl.createHuman(name, weight, height, diet)
    console.log(typeof appData.user)
    e.preventDefault()
  }

  const feetToInchConvertor = function (feet) {
    return feet * 12
  }

  return {
    init: function () {
      console.log('Starting...')
      appData.dinos = DinoCtrl.getAllDinos()
      // Load event listeners
      loadEventListeners()
    },
  }
})(DinoCtrl, HumanCtrl, UICtrl)

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
