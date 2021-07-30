import React from "react";
import Styled from "styled-components";
import { color, breakpoint } from "../tenbajt/Utils";


const Value = Styled.div`
    color: ${props => props.color};
    font-size: 3.5rem;
    text-align: center;
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.25rem;

    ${breakpoint.sm} {
        font-size: 3rem;
    }

    ${breakpoint.lg} {
        font-size: 4rem;
    }

    ${breakpoint.xl} {
        font-size: 5rem;
    }
`;

const Label = Styled.div`
    color: ${color.gray(500)};
    font-size: 0.75rem;
    text-align: center;
    line-height: 1rem;
    white-space: pre-line;
`;

const ZoneRate = (props) => (
    <div>
        <Value color={props.color}>
            {props.value}
        </Value>
        <Label>
            {props.label}
        </Label>
    </div>
);

export default ZoneRate;