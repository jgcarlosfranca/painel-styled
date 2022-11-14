// async function for ForEach
export async function asyncForEach(arr, callback) {
    for (let i = 0, t = arr.length; i < t; i++) {
        await callback(arr[i], i, arr)
    }
}