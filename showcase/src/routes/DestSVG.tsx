import {useEffect} from "react";
import trianglify from "adan-trianglify";

export default function DestSVG(){
    useEffect(() => {

        const pattern = trianglify({
            cellSize: 50,
            width: window.innerWidth * 0.8,
            height: (window.innerHeight - 4 * 30) / 4
        })

        const existingSVGElement = document.getElementById('svg-element')

        // Render to SVG
        pattern.toSVG(existingSVGElement)
    }, [])

    return (
        <svg id="svg-element"></svg>
    )
}