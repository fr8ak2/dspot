export const concat = <T extends readonly string[]>(arr: T): T[number] =>
    arr.join(' ')
