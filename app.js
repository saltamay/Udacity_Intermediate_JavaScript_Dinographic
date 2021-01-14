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
    grid: '#grid',
    dinoCompare: '#dino-compare',
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
    clearForm: function () {
      document.querySelector(UISelectors.name).value = ''
      document.querySelector(UISelectors.feet).value = ''
      document.querySelector(UISelectors.inches).value = ''
      document.querySelector(UISelectors.weight).value = ''
      document.querySelector(UISelectors.diet).value = ''
    },
    removeForm: function () {
      document.querySelector(UISelectors.dinoCompare).style.display = 'none'
    },
    createDinoItem: function (dino, human = null) {
      const species = dino.getSpecies()
      const image = species.toLowerCase()
      let fact = ''

      if (species === 'Pigeon') {
        fact = dino.getFact()
      } else {
        const getRandomFact = dino.getRandomInfo()
        fact = getRandomFact.length // returns number of arguments
          ? getRandomFact.call(dino, human)
          : getRandomFact.call(dino)
      }

      return `<div class="grid-item"><h3>${species}</h3><img src="./images/${image}.png" alt="Dino" /><p>${fact}</p></div>`
    },
    createHumanItem: function (human) {
      const name = human.getName()
      const image = 'human.png'

      return `<div class="grid-item"><h3>${name}</h3><img src="./images/${image}" alt="Human" /></div>`
    },
    showResults: function (dinosList, human) {
      // Add human into the dino list
      dinosList.splice(4, 0, human)
      // Loop through list and create the html to be inserted
      let html = ''
      dinosList.forEach(function (dino, idx) {
        idx === Math.floor(dinosList.length / 2)
          ? (html += UICtrl.createHumanItem(dino))
          : (html += UICtrl.createDinoItem(dino, human))
      })
      // Insert the results to DOM
      document.querySelector(UISelectors.grid).innerHTML += html
    },
  }
})()

const App = (function (DinoCtrl, HumanCtrl, UICtrl) {
  // Load event listeners
  let appData = {
    dinos: null,
    user: null,
  }

  const loadEventListeners = function () {
    document.querySelector('#btn').addEventListener('click', getUserInput)
  }

  const getUserInput = function (e) {
    // Get form user input
    const formData = UICtrl.getFormData()

    // Create human class instance
    const [name, feet, inches, weight, diet] = Object.values(formData)
    const height = feetToInchConvertor(feet) + inches
    appData.user = HumanCtrl.createHuman(name, weight, height, diet)

    // Clear  and remove form
    // UICtrl.clearForm()
    UICtrl.removeForm()
    UICtrl.showResults(lib.shuffle(appData.dinos), appData.user)
    e.preventDefault()
  }

  const feetToInchConvertor = function (feet) {
    return feet * 12
  }

  // Reference: https://flaviocopes.com/how-to-shuffle-array-javascript/
  const shuffle = function (list) {
    return list.sort(() => Math.random() - 0.5)
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

const lib = {
  heightInFeetAndInches(height) {
    const feet = Math.floor(height / 12)
    const inches = height % 12

    let str = feet
      ? inches
        ? `${feet} feet and ${inches} inches`
        : `${feet} feet`
      : `${inches} inches`

    return str
  },

  // Reference: https://flaviocopes.com/how-to-shuffle-array-javascript/
  shuffle(list) {
    return list.sort(() => Math.random() - 0.5)
  },
}

App.init()
