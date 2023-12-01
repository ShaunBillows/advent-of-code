import path from 'path'
import fs from 'fs'
import solution from './day-1/solution'

const input = fs.readFileSync(path.join(__dirname, './day-1/data/input.txt'), 'utf-8')
const answer = solution(input)

console.log(`Advent of Code - Day 1, Part 1 Answer: ${answer}`)
