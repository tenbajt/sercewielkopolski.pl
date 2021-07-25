import React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Background from "../components/Background"
import Hero from "../components/Hero"

const GlobalStyle = createGlobalStyle`
    html,
    body,
    main,
    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;
    }
    body {
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
                <link rel="icon" href="../images/logo-32x32.jpg" size="32x32"/>
                <link rel="icon" href="../images/logo-192x192.jpg" sizes="192x192"/>
                <link rel="apple-touch-icon" href="../images/logo-180x180.jpg"/>
                <meta name="msapplication-TileImage" content="../images/zlogo-270x270.jpg"/>
            </Helmet>
            <GlobalStyle/>
            <main>
                <Background/>
                <Hero/>
            </main>
        </React.Fragment>
    )
}

export default Layout;