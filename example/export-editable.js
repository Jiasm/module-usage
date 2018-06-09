let name = 'Niko'
let packs = [1, 2]

export { name as firstName }
export { packs }
export let letVal = 1
export const constVal = 2

console.log(letVal)

letVal = 2
