import { connect, styled } from "frontity";
import React from "react";
import { useDrop } from "react-dnd";

const ColumnWrapper = ({ onDrop, children, intoPlan }) => {
    const [{ isOver }, drop ] = useDrop({
        accept: "method",
        drop: (item, monitor) => {
            onDrop(item, monitor);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <WrapElement ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children, { isOver })}

        </WrapElement>
    )
    
};
export default connect(ColumnWrapper);

const WrapElement = styled.div`
    width: 100%;
    height: 100vh;
    background: lightgrey;
`;