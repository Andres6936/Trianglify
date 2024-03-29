import trianglify from 'adan-trianglify'
import {useEffect} from "react";

export default function ColorFunction() {
    useEffect(() => {
        const JITTER_FACTOR = 0.2


        // utility for building up HTML trees
        const h = (tagName, attrs = {}, children = []) => {
            const elem = document.createElement(tagName)
            attrs && Object.keys(attrs).forEach(
                k => attrs[k] !== undefined && elem.setAttribute(k, attrs[k])
                )
            children && children.forEach(c => elem.appendChild(c))
            return elem
        }

        const addToPage = (pattern, description) => {
            document.body.appendChild(h('div', {'class': 'demo'}, [
                pattern.toCanvas(),
                h('h1', null, [document.createTextNode(description)])
            ]
            ))
        }

        // use the same seed for everything, to allow for easier comparisons
        const seed = 'pears'

        // Example 1: you can use the built-in color functions to customize the
        // color rendering of Trianglify. Here, we use the 'sparkle' color
        // function to apply a 10% jitter to the normal color gradients, which
        // will yield a glitter-like effect.
        const sparkle = trianglify({
            seed,
            width: 400,
            height: 300,
            cellSize: 15,
            colorFunction: trianglify.colorFunctions.sparkle(0.2)
        })
        addToPage(sparkle, 'trianglify.colorFunctions.sparkle(0.2)')

        // Example 2: you can use the interpolateLinear color function to
        // customize how much the x or y gradient dominates the image.
        // Higher values for the bias will result in a more pronounced x-gradient,
        // while lower values will results in a more pronounced y-gradient
        const interpolate = trianglify({
            seed,
            width: 400,
            height: 300,
            cellSize: 15,
            colorFunction: trianglify.colorFunctions.interpolateLinear(0.1)
        })
        addToPage(interpolate, 'trianglify.colorFunctions.interpolateLinear(0.1)')


        // Example 2: the shadows color function applies a faux-3d effect to the
        // pattern. This works best with subtle gradients and solid colors.
        const shadows = trianglify({
            seed,
            width: 400,
            height: 300,
            cellSize: 15,
            colorFunction: trianglify.colorFunctions.shadows()
        })
        addToPage(shadows, 'trianglify.colorFunctions.shadows()')

        // Example 4: you can write your own custom color function to have
        // total control over how the polygons are given color values.
        //
        // Here, we apply the xScale colors as a radial gradient:

        // define a custom color function that applies a radial gradient:
        const radialGradient = (radius) => ({centroid, xScale}) => {
            const distanceFromCenter = Math.sqrt(
                Math.pow(200 - centroid.x, 2) + Math.pow(150 - centroid.y, 2)
                )
            return(xScale(distanceFromCenter / radius))
        }
        // figure out the gradient radius required to cover the image dimensions:
        const gradientRadius = Math.sqrt(
            Math.pow(400 / 2, 2) + Math.pow(300 / 2, 2)
            )
        const radial = trianglify({
            seed,
            width: 400,
            height: 300,
            cellSize: 15,
            colorFunction: radialGradient(gradientRadius)
        })
        addToPage(radial, 'custom radial gradient')
    }, [])

    return (
        <div></div>
    )
}