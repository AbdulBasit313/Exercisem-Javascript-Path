
export const isPangram = (sentence) => {
  sentence = [...sentence.toLowerCase()]

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

  return ALPHABET.every((char) => sentence.includes(char))
}
