export function findMax(numbers: number[]): number | null {
    if (!numbers.length) return null
    return Math.max(...numbers)
}

export function hasPairWithSum(numbers: number[], target: number): boolean {
    const set = new Set<number>()

    for (const number of numbers) {
        if (set.has(target - number)) {
            return true
        }
        set.add(number)
    }
    return false
}
