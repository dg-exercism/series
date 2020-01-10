//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(numbers) {
    this.numbers = numbers;
  }

  get digits() {
    return this.numbers.split('').map(number => Number(number))
  }

  slices(depth) {
    let results = [];
    if (this.digits.length < depth) {
      throw new Error('Slice size is too big.')
    } else {
      this.digits.forEach((digit, i) => {
        if (i + depth <= this.digits.length) {
          results.push([...this.digits.slice(i, i+depth)])
        }
      })
      return results
    }
  }
}
