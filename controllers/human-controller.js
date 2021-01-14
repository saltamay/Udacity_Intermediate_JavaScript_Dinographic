'use strict'

const HumanCtrl = (function () {
  return {
    createHuman: function (name, weight, height, diet) {
      return new Human(name, weight, height, diet)
    },
  }
})()
