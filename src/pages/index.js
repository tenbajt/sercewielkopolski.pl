import React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"
import favicon_32x32 from "../images/logo-32x32.jpg"
import favicon_192x129 from "../images/logo-192x192.jpg"
import favicon_180x180 from "../images/logo-180x180.jpg"
import favicon_270x270 from "../images/logo-270x270.jpg"
import Hero from "../components/Hero"

const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
    }
    html, body, main, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
    }
    body {
        margin: 0;
        font-family: Inter, sans-serif;
    }
`

const Layout = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Mleko prosto od krowy - 100% naturalne | Zamów z dostawą do domu</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
                <link rel="icon" href={favicon_32x32} size="32x32"/>
                <link rel="icon" href={favicon_192x129} sizes="192x192"/>
                <link rel="apple-touch-icon" href={favicon_180x180}/>
                <meta name="msapplication-TileImage" content={favicon_270x270}/>
            </Helmet>
            <GlobalStyle/>
            <main>
                <Hero/>
            </main>
        </React.Fragment>
    )
}

export default Layout;