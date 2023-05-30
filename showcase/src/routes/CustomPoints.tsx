import {useEffect} from "react";
import trianglify from "adan-trianglify";

export default function CustomPoints() {
    useEffect(() => {
        const width = 700
        const height = 700


        // generate a spiral using polar coordinates
        const points = []
        const NUM_POINTS = 150
        let r = 0
        const rStep = width / 2 / NUM_POINTS
        let theta = 0
        const thetaStep = Math.PI / NUM_POINTS * 18
        for (let i = 0; i < NUM_POINTS; i++) {
            const x = width / 2 + r * Math.cos(theta)
            const y = height / 2 + r * Math.sin(theta)
            const point = [x, y]
            points.push(point)
            r += rStep
            theta = (theta + thetaStep) % (2 * Math.PI)
        }


        // apply trianglify to convert the points to polygons and apply the color
        // gradient
        var pattern = trianglify({height, width, points})

        // use the toCanvas function to render the generated geometry to an HTML5
        // canvas element
        document.body.appendChild(pattern.toCanvas())
    }, [])

    return (
        <div></div>
    )
}