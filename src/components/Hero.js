import React from "react"
import styled from "styled-components"
import background from "../images/bg-img.jpg"
import ContactButtons from "./ContactButtons"

const Container = styled.div`
    height: 100%;
    display: grid;
    padding: 0 1rem;
    background: url(${props => props.background}) no-repeat;
    align-content: center;
    background-size: cover;
    justify-content: center;
`
const Content = styled.div`
    margin: 0 0 8rem;
`
const Title = styled.h1`
    color: rgba(17, 24, 39);
    margin: 0;
    padding: 1.5rem 2rem;
    font-size: 2.25rem;
    text-align: center;
    font-weight: 800;
    line-height: 2.5rem;
    white-space: normal;
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
const Button = styled.button`
    left: 50%;
    color: #111827;
    bottom: 2.25rem;
    border: none;
    margin: 0 auto;
    cursor: pointer;
    display: grid;
    padding: 0.75rem 2rem;
    position: absolute;
    font-size: 1rem;
    transform: translateX(-50%);
    appearance: none;
    transition: background-color 150ms;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
    font-weight: 500;
    line-height: 1.5rem;
    align-items: center;
    white-space: nowrap;
    border-radius: 20rem;
    grid-auto-flow: column;
    background-color: white;
    &:hover {
        background-color: #F9FAFB;
    }
    @media (min-width: 768px) {
        padding: 1rem 2.5rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
`
const ArrowDown = styled.i`
    left: 50%;
    color: white;
    cursor: default;
    bottom: 0.5rem;
    position: absolute;
    font-size: 2rem !important;
    transform: translateX(-50%);
    text-shadow: 0 1px 0 black;
`

function Hero () {
    return (
        <Container background={background}>
            <Content>
                <Title>
                    Zmieniamy{' '}
                    <Highlight>
                        się{' '}
                    </Highlight>
                    na lepsze
                </Title>
                <ContactButtons/>
            </Content>
            <Button>
                Sprawdź szczegóły dostaw
            </Button>
            <ArrowDown className="material-icons">
                expand_more
            </ArrowDown>
        </Container>
    )
}

export default Hero;