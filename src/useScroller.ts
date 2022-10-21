// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useScroller ({ x, y, isSmooth = false }: {
  x: number
  y: number
  isSmooth?: boolean
}) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!window) { return }

  return function scroller () {
    window.scrollTo({
      left: x,
      top: y,
      behavior: isSmooth ? 'smooth' : 'auto'
    })
  }
}
