import trianglify from "adan-trianglify";
import {useEffect, useRef} from "react";

export default function Home() {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const pattern = trianglify({
                cellSize: 50,
                width: 400,
                height: 400
            });

            // Used for avoid added two children in the node
            if (!canvasRef.current.hasChildNodes()) {
                canvasRef.current.append(pattern.toCanvas());
            }
        }
    }, [])

    return (
        <div className={"min-h:100vh flex flex:col bg:white"}>
            <div className={"flex flex:row justify-content:space-between px:1em px:3em@sm py:1em"}>
                <div className={"flex flex:row gap:1em"}>
                    <p className={"font:semibold font-size:1.1em"}>Github</p>
                    <p className={"font:semibold font-size:1.1em"}>NPM</p>
                    <p className={"font:semibold font-size:1.1em"}>For Designers</p>
                </div>
                
                <div className={"flex flex:row gap:1em"}>
                    <p className={"font:semibold font-size:1.1em"}>License Information</p>
                </div>
            </div>

            <div className={"flex justify-content:center align-items:center flex:col flex:row@sm px:2.5em px:13em@sm gap:1.5em pt:1em pt:4em@sm pb:3em"}>
                <h1 className={"text-align:center text-align:start@sm font:semibold font-size:2.5em line-height:1.1em"}>
                    <span className={"font:bold"}>Trianglify</span> is a Javascript library for creating unique, aesthetically pleasing triangle patterns.
                </h1>

                <div ref={canvasRef}/>
            </div>

            <div className={"flex flex:col flex:row@sm justify-content:center gap:1em px:2.5em px:10em@sm pb:3em"}>
                <div className={"text-align:start"}>
                    <h2 className={"font:semibold"}>Try It Out</h2>
                    <p>You can generate Trianglify patterns without writing a single line of code at Trianglify.io</p>
                </div>

                <div className={"text-align:start"}>
                    <h2 className={"font:semibold"}>Getting Started</h2>
                    <p>Developer documentation and a getting started guide is available on GitHub</p>
                </div>

                <div className={"text-align:start"}>
                    <h2 className={"font:semibold"}>Examples</h2>
                    <p>There are a variety of examples you can download and run here</p>
                </div>
            </div>

            <div className={"flex flex:col text-align:start px:2.5em px:10em@sm"}>
                <h3 className={"font:semibold font-size:1.5em"}>About</h3>

                <p>
                    My name is Quinn Rohlf, and I'm a roaming engineer/designer based in the western United States.
                    Trianglify is an open-source library I wrote to generate low-poly style patterns by combining a
                    Delaunay triangulation with some nice colors. It was originally released in April of 2014. It has a
                    sibling project, Trianglify.io, that provides a user-friendly GUI for the library and helps fund
                    library development and bugfixes via paid downloads.
                </p>

                <p>
                    Trianglify v4.0.0, released May 2020, was a ground-up modernized rewrite of the original source. You
                    can read about the changes in v4 here.
                </p>

                <p>Trianglify was originally inspired by @jasonlong's GeoPattern library for Ruby.</p>

                <h3 className={"font:semibold font-size:1.5em"}>Licensing</h3>

                <p>The source code of Trianglify is licensed under version 3 of the GNU General Public License (GPLv3).
                    If you are interested in purchasing a commercial license for Trianglify, please email qr@qrohlf.com
                    for details.</p>

                <h3 className={"font:semibold font-size:1.5em"}>Contact</h3>

                <p>If you have a feature suggestion or question about Trianglify, please file an issue on GitHub.</p>
            </div>
            
            <div className={"flex flex:col justify-content:center align-items:center bt:1px|solid|#CCC mt:5em py:1em"}>
                <p>Copyright © Quinn Rohlf</p>
            </div>
        </div>
    )
}