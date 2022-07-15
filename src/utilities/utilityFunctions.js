export const generateArray = (start, end) => {
    let counter = -1
    return Array.from(new Array(end - start)).map((_) => {
        counter += 1
        return start + counter
    })
}