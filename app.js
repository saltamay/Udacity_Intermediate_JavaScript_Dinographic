'use strict'

const App = (function (DinosCtrl, HumanCtrl, UICtrl) {
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
    const height = lib.feetToInchConvertor(feet) + inches
    appData.user = HumanCtrl.createHuman(name, weight, height, diet)

    // Clear and remove form
    UICtrl.clearForm()
    UICtrl.removeForm()
    UICtrl.showResults(lib.shuffle(appData.dinos), appData.user)
    e.preventDefault()
  }

  return {
    init: function () {
      console.log('Initializing...')
      appData.dinos = DinosCtrl.getAllDinos()
      // Load event listeners
      loadEventListeners()
    },
  }
})(DinosCtrl, HumanCtrl, UICtrl)

App.init()
