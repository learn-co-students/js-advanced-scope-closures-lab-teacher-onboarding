const produceDrivingRange = (blockRange) =>
rangeCheck = (rangeFrom, rangeTo) => {
  const rangeCalc = integerify(rangeTo) - integerify(rangeFrom)
  const diff = blockRange - rangeCalc
  return diff <= 0 ? `${Math.abs(diff)} blocks out of range` : `within range by ${diff}`
}

const integerify = (string) =>
parseInt(string, 10)

const produceTipCalculator = (percent) =>
tipCalc = (total) =>
total * percent

const createDriver = () => {
  let DriverId = 0
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
