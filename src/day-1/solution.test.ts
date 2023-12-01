import solution from "./solution"

describe('Day 1 - Trebuchet', () => {
    test('can find sum of calibration values', () => {
        const input = `1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet`
        expect(solution(input)).toBe(142)
    })
})
