import React from "react"
import styled from "styled-components"
import SocialMedia from "./SocialMedia"

const Container = styled.div`
    top: -8rem;
    height: 100%;
    display: grid;
    padding: 1rem 0;
    position: relative;
    align-content: center;
    justify-content: center;
`
const Title = styled.h1`
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
const Highlight = styled.span`
    color: #16A34A;
`

function Hero () {
    return (
        <Container>
            <Title>
                Zmieniamy&nbsp;
                <Highlight>
                    się&nbsp;
                </Highlight>
                na lepsze
            </Title>
            <SocialMedia/>
        </Container>
    )
}

export default Hero;