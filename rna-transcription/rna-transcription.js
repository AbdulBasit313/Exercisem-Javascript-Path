


export const toRna = (word) => {
  const lookupTable = {
    C: 'G',
    G: 'C',
    T: 'A',
    A: 'U'
  }

  return word.replace(/[CGTA]/g, w => lookupTable[w])
};
