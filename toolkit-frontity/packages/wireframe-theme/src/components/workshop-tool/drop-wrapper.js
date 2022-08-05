import { connect } from "frontity";
import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "./types";

const DropWrapper = ({ onDrop, children, isPlan}) => {
    const [{ isOver}, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            return item.prop.isInPlan === isPlan;
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver:monitor.isOver()
        })

    });

    return (
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children, { isOver })}
        </div>
    )
    
};

export default connect(DropWrapper);
