import type {Options} from "../types/Options.js";
import type {Point} from "../types/Point.js";

export const useDebugRender = (opts: Options, points: Point[]) => {
  const doc = window.document
  const svg = window.document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', (opts.width + 400).toString())
  svg.setAttribute('height', (opts.height + 400).toString())

  points.forEach(p => {
    const circle = doc.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('cx', p[0].toString())
    circle.setAttribute('cy', p[1].toString())
    circle.setAttribute('r', "2")
    svg.appendChild(circle)
  })

  const bounds = doc.createElementNS('http://www.w3.org/2000/svg', 'rect')
  bounds.setAttribute('x', "0")
  bounds.setAttribute('y', "0")
  bounds.setAttribute('width', opts.width.toString())
  bounds.setAttribute('height', opts.height.toString())
  bounds.setAttribute('stroke-width', "1")
  bounds.setAttribute('stroke', 'blue')
  bounds.setAttribute('fill', 'none')
  svg.appendChild(bounds)

  svg.setAttribute('viewBox', `-100 -100 ${opts.width + 200} ${opts.height + 200}`)
  return svg
}
