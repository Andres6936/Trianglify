export default function Home() {
    return (
        <div className={"min-h:100vh flex flex:col bg:white"}>
            <div className={"flex flex:row justify-content:space-between px:3em py:1em"}>
                <div className={"flex flex:row gap:1em"}>
                    <p className={"font:semibold font-size:1.1em"}>Github</p>
                    <p className={"font:semibold font-size:1.1em"}>NPM</p>
                    <p className={"font:semibold font-size:1.1em"}>For Designers</p>
                </div>
                
                <div className={"flex flex:row gap:1em"}>
                    <p className={"font:semibold font-size:1.1em"}>License Information</p>
                </div>
            </div>

            <div className={"flex flex:row"}>
                <h1 className={"font:semibold font-size:3em"}>
                    Trianglify is a Javascript library for creating unique, aesthetically pleasing triangle patterns.
                </h1>
            </div>

            <div className={"flex flex:row justify-content:center gap:1em"}>
                <div>
                    <h2>Try It Out</h2>
                </div>

                <div>
                    <h2>Getting Started</h2>
                </div>

                <div>
                    <h2>Examples</h2>
                </div>
            </div>

            <div>
                <h3>About</h3>

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

                <h3>Licensing</h3>

                <p>The source code of Trianglify is licensed under version 3 of the GNU General Public License (GPLv3).
                    If you are interested in purchasing a commercial license for Trianglify, please email qr@qrohlf.com
                    for details.</p>

                <h3>Contact</h3>

                <p>If you have a feature suggestion or question about Trianglify, please file an issue on GitHub.</p>
            </div>
            
            <div>
                <p>Copyright © Quinn Rohlf</p>
            </div>
        </div>
    )
}