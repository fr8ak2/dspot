import 'cypress-each'

import { findMax, hasPairWithSum } from './algorithms'

describe('findMax', () => {
    const testCases = [
        { input: [1, 2, 3, 4, 5], expected: 5 },
        { input: [-10, -5, 0, 5, 10], expected: 10 },
        { input: [99, 99, 99], expected: 99 },
        { input: [1], expected: 1 },
        { input: [], expected: null },
    ]

    it.each(testCases)(
        'should return $expected for input $input',
        ({ input, expected }) => {
            const result = findMax(input)
            expect(result).toBe(expected)
        },
    )
})

describe('hasPairWithSum', () => {
    const testCases = [
        { input: { numbers: [1, 2, 3, 4], target: 5 }, expected: true },
        { input: { numbers: [1, 2, 3, 4], target: 8 }, expected: false },
        { input: { numbers: [-1, -2, -3, -4], target: -5 }, expected: true },
        { input: { numbers: [1, 2, 3, 4], target: 10 }, expected: false },
        { input: { numbers: [0, 0, 0, 0], target: 0 }, expected: true },
    ]

    it.each(testCases)(
        'should return $expected for input $input.numbers with target $input.target',
        ({ input, expected }) => {
            const result = hasPairWithSum(input.numbers, input.target)
            expect(result).toBe(expected)
        },
    )
})
