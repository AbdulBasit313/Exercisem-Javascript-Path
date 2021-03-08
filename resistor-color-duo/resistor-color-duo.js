

export const decodedValue = (arr) => {
  const colors = [
    'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'
  ]

  let result = (colors.indexOf(arr[0]) * 10) + (colors.indexOf(arr[1]))

  return result
};
