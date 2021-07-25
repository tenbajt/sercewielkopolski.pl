import React from "react"
import Helmet from "react-helmet"
import fb_logo from "../images/facebook.png"
import ig_logo from "../images/instagram.png"
import background from "../images/bg-img.jpg"
import styled, { createGlobalStyle } from "styled-components"

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
const BackgroundContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
`
const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const SloganContainer = styled.div`
    top: -8rem;
    height: 100%;
    display: grid;
    padding: 1rem 0;
    position: relative;
    align-content: center;
    justify-content: center;
`
const SloganHeading = styled.h1`
    color: rgba(17, 24, 39);
    margin: 0;
    padding: 1.5rem 2rem;
    font-size: 2.25rem;
    text-align: center;
    font-weight: 800;
    line-height: 2.5rem;
    background-color: rgba(255,255,255,0.7);
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    @media (min-width: 768px) { 
        font-size: 3rem;
        line-height: 1;
    }
`
const SloganHeadingHighlight = styled.span`
    color: #16A34A;
`
const ContactOptionsList = styled.ul`
    gap: 0.25rem;
    margin: 0.25rem 0 0;
    padding: 0;
    display: grid;
    list-style: none;
    justify-content: center;
    @media (min-width: 768px) { 
        grid-template-columns: repeat(3, 1fr);
    }
`
const ContactOptionItem = styled.li`
    overflow: hidden;
    @media (min-width: 768px) { 
        &:first-child {
            border-bottom-left-radius: 0.75rem;
        }
        &:last-child {
            border-bottom-right-radius: 0.75rem;
        }
    }
`
const ContactOptionLink = styled.a`
    color: #111827;
    cursor: pointer;
    display: grid;
    padding: 0.75rem 1rem;
    text-align: center;
    transition: background-color 150ms;
    font-weight: 500;
    align-items: center;
    grid-auto-flow: column;
    text-decoration: none;
    justify-content: center;
    background-color: rgba(255,255,255,0.7);
    &:hover {
        background-color: white;
    }
`
const ContactOptionIcon = styled.i`
    margin: 0 0.25rem 0 0;
`
const ContactOptionLogo = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.625rem 0 0;
    display: inline-block;
    object-fit: contain;
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
                <BackgroundContainer>
                    <BackgroundImage src={background} alt="Mleko prosto od krowy - 100% naturalne | Zamów z dostawą do domu"/>
                </BackgroundContainer>
                <SloganContainer>
                    <SloganHeading>
                        Zmieniamy&nbsp;
                        <SloganHeadingHighlight>
                            się&nbsp;
                        </SloganHeadingHighlight>
                        na lepsze
                    </SloganHeading>
                    <ContactOptionsList>
                        <ContactOptionItem>
                            <ContactOptionLink href="tel:+48536296895">
                                <ContactOptionIcon className="material-icons">
                                    phone_iphone
                                </ContactOptionIcon>
                                536 296 895
                            </ContactOptionLink>
                        </ContactOptionItem>
                        <ContactOptionItem>
                            <ContactOptionLink href="https://www.facebook.com/mlekooodkrowy/">
                                <ContactOptionLogo src={fb_logo} alt="Facebook"/>
                                @mlekoodkrowy
                            </ContactOptionLink>
                        </ContactOptionItem>
                        <ContactOptionItem>
                            <ContactOptionLink href="https://www.instagram.com/mleko_od_krowy/">
                                <ContactOptionLogo src={ig_logo} alt="Instagram"/>
                                @mleko_od_krowy
                            </ContactOptionLink>
                        </ContactOptionItem>
                    </ContactOptionsList>
                </SloganContainer>
            </main>
        </React.Fragment>
    )
}

export default Layout;