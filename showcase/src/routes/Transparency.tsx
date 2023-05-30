import {useEffect} from "react";
import trianglify from "adan-trianglify";

export default function Transparency() {
    useEffect(() => {

        const pattern = trianglify({
            height: window.innerHeight,
            width: window.innerWidth,
            xColors: ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 1)'],
            yColors: 'match',
            cellSize: Math.ceil(window.innerWidth / 8)
        })
        var svg = pattern.toSVG()
        svg.id = 'trianglify-overlay'
        document.body.appendChild(svg)
    }, [])

    return (
        <svg id="gradient-rotate" preserveAspectRatio="none" viewBox="0 0 500 500">
            <defs>
                <linearGradient x1="0%" y1="0%" y2="100%" id="a">
                    <stop id="color-stop-1" stopColor="#22C8F6" offset="0%"></stop>
                    <stop id="color-stop-2" stopColor="#20C498" offset="65%"></stop>
                    <stop id="color-stop-3" stopColor="#189932" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path fill="url(#a)" d="M0 0h500v500H0z"></path>
        </svg>
    )
}