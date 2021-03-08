const soundRules = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong',
}

const isFactor = (num, key) => {
  return num % key === 0
}

export const convert = (num) => {

  let sound = ''

  for (let key in soundRules) {
    if (isFactor(num, key)) {
      sound += soundRules[key]
    }
  }

  return sound || num.toString()
};
