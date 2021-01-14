'use strict'

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
        inches: document.querySelector(UISelectors.inches).value
          ? parseInt(document.querySelector(UISelectors.inches).value)
          : 0,
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
