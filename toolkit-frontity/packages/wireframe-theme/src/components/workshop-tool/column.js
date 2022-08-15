import React from "react";
import { connect, styled } from "frontity";


const Col = ({ isOver, children }) => {
    const className = isOver ? "highlight.region" : "";

    return (
        <ColElement>
            { children }
        </ColElement>
    )
}

export default connect(Col);

const ColElement = styled.div`
    width: 100%;
    height: 100vh;
`;

