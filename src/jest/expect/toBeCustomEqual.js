export default function toBeCustomEqual(a, b) {
  return a === b ? {
    pass: true,
    message: () => `expected ${a} to be equal to ${b}`
  } : {
    pass: false,
    message: () => `expected ${a} to be not equal to ${b}`
  }
}