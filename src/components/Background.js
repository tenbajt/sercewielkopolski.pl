import React from "react"
import styled from "styled-components"
import background from "../images/bg-img.jpg"

const Container = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function Background () {
    return (
        <Container>
            <Image src={background} alt="Mleko prosto od krowy - 100% naturalne | Zamów z dostawą do domu"/>
        </Container>
    )
}

export default Background;