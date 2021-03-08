//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    sideOne = this.sideOne
    sideTwo = this.sideTwo
    sideThree = this.sideThree
  }

  isEquilateral() {
    if (this.sideOne === this.sideTwo === sideThree) {
      return true
    }
  }

  isIsosceles() {
    if (this.sideOne === this.sideTwo === sideThree) {
      return true
    }
  }

  isScalene() {
    if (this.sideOne !== this.sideTwo !== sideThree) {
      return true
    }
  }
}
