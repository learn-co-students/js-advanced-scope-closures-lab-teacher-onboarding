const produceDrivingRange = (n) => {
  return function inRange(blockOne, blockTwo) {
    const regex = new RegExp(/[^\d]/)
    const split = (x) => Number.parseInt(x.replace(regex, ""))
    const range = split(blockTwo) - split(blockOne)
    if (range < n) {
      return `within range by ${n - range}`;
    }
    return `${range - n} blocks out of range`;
  }
}

const produceTipCalculator = (n) => {
  return function newFunction(fare) {
    return fare * n;
  }
}

const createDriver = () => {
  return class Driver {
    constructor(name) {
      this.id = Driver.incrementId()
      this.name = name
    }

    static incrementId() {
      if (!this.id) this.id = 1 
      else this.id++
      return this.id
    }
  }
}
