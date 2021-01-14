const lib = (function () {
  return {
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

    feetToInchConvertor(feet) {
      return feet * 12
    },

    // Reference: https://flaviocopes.com/how-to-shuffle-array-javascript/
    shuffle(list) {
      return list.sort(() => Math.random() - 0.5)
    },
  }
})()
