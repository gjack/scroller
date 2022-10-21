import { useScroller } from './useScroller'

describe('Should scroll to a position', () => {
  window.scrollTo = jest.fn()

  const scroll = useScroller({ x: 20, y: 0, isSmooth: false })

  if (scroll == null) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw 'Invalid window object'
  }

  scroll()

  it('scrolls', () => {
    expect(window.scrollTo).toBeCalledWith({
      left: 20,
      top: 0,
      behavior: 'auto'
    })
  })
})
