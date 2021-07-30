import React from "react";
import Styled from "styled-components";
import { color } from "../tenbajt/Utils";


const Link = Styled.a`
    color: ${color.coolGray(900)};
    display: grid;
    padding: 0.75rem 1rem;
    text-align: center;
    font-weight: 500;
    align-items: center;
    grid-auto-flow: column;
    justify-content: center;
    background-color: ${color.white(0.7)};

    &:hover {
        background-color: ${color.white()};
    }
`;

const Icon = Styled.i`
    margin-right: 0.25rem;
`;

const Logo = Styled.img`
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    margin-right: 0.625rem;
`;

const ContactButton = (props) => {
    let icon;

    if (props.icon) {
        icon = <Icon className="material-icons">{props.icon}</Icon>
    } else if (props.image) {
        icon = <Logo src={props.image} alt={props.alt}/>
    }

    return (
        <Link href={props.url}>
            {icon}
            {props.label}
        </Link>
    );
}

export default ContactButton;