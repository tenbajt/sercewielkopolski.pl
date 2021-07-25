import React from "react"
import styled from "styled-components"
import facebook_logo from "../images/facebook.png"
import instagram_logo from "../images/instagram.png"

const List = styled.ul`
    gap: 0.25rem;
    margin: 0.25rem 0 0;
    padding: 0;
    display: grid;
    list-style: none;
    @media (min-width: 768px) {
        justify-content: center;
        grid-template-columns: repeat(3, 1fr);
    }
`
const Item = styled.li`
    overflow: hidden;
    &:last-child {
        border-bottom-left-radius: 0.75rem;
        border-bottom-right-radius: 0.75rem;
    }
    @media (min-width: 768px) { 
        &:first-child {
            border-bottom-left-radius: 0.75rem;
        }
        &:last-child {
            border-bottom-left-radius: 0;
        }
    }
`
const Link = styled.a`
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
const Icon = styled.i`
    margin: 0 0.25rem 0 0;
`
const Logo = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.625rem 0 0;
    display: inline-block;
    object-fit: contain;
`

function ContactButtons () {
    return (
        <List>
            <Item>
                <Link href="tel:+48536296895">
                    <Icon className="material-icons">
                        phone_iphone
                    </Icon>
                    536 296 895
                </Link>
            </Item>
            <Item>
                <Link href="https://www.facebook.com/mlekooodkrowy/">
                    <Logo src={facebook_logo} alt="Facebook"/>
                    @mlekoodkrowy
                </Link>
            </Item>
            <Item>
                <Link href="https://www.instagram.com/mleko_od_krowy/">
                    <Logo src={instagram_logo} alt="Instagram"/>
                    @mleko_od_krowy
                </Link>
            </Item>
        </List>
    )
}

export default ContactButtons;