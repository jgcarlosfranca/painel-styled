export function range(start, end, step = 1) {
    return {
        [Symbol.iterator]() {
            return this
        },
        next() {
            if (start < end) {
                start += end
                return { value: start, done: false }
            }
            return { done: true, value: end }
        }

    }
}

/**
 * usable exemplo:
 * for (const n of range(0,100,5)) console.log(n)
 * 
 */