import React from "react";
import Styled from "styled-components";
import { color } from "../tenbajt/Utils";


const Header = Styled.div`
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    justify-content: start;
`;

const Label = Styled.span`
    color: ${color.gray(900)};
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: nowrap;
`;

const Indicator = Styled.span`
    width: 1rem;
    height: 1rem;
    display: inline-block;
    margin-left: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${props => props.color};
`;

const List = Styled.p`
    color: ${color.gray(500)};
    font-size: 0.75rem;
    margin-top: 0.75rem;
    line-height: 1.5rem;
`;

const ZoneCities = (props) => (
    <div>
        <Header>
            <Label>
                {props.label}
            </Label>
            <Indicator color={props.indicator}/>
        </Header>
        <List>
            {props.cities}
        </List>
    </div>
);

export default ZoneCities;