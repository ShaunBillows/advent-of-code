function solution(input: string): number {
  const calibrationValues = input.split('\n')
  let total = 0

  for (let j = 0; j < calibrationValues.length; j++) {
    const calibrationValue = calibrationValues[j]
    let firstNumber, lastNumber

    for (let i = 0; i < calibrationValue.length; i++) {
      if (!firstNumber && isNumber(calibrationValue[i])) {
        firstNumber = calibrationValue[i]
      }
      if (!lastNumber && isNumber(calibrationValue[calibrationValue.length - i - 1])) {
        lastNumber = calibrationValue[calibrationValue.length - i - 1]
      }
      if (firstNumber && lastNumber) {
        total += parseInt(firstNumber + lastNumber)
        break
      }
    }
  }
  return total
}

export default solution

function isNumber(n: string) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => x.toString()).includes(n)
}
