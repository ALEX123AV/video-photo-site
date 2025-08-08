export const simulateLatency = (min=200, max=700) => (req, res, next) => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min
  setTimeout(next, delay)
}
