import { connect, styled } from "frontity";
import React, { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const Item = ({ props, item, index, moveItem, status }) => {
    const ref = useRef(null);

    const [isInPlan, setIsInPlan] = useState(item.isInPlan);
    const [duration, setDuration] = useState(item.duration);
    const [notes, setNotes] = useState("");

    status = item.status;

    const [, drop] = useDrop ({
        accept: "method",
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }   

            const dragIndex = item.index;
            const hoverIndex = index;
            console.log(hoverIndex);

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    }, );

    const [{ isDragging }, drag] = useDrag({
        type: "method",
        item: () => { 
            return { ...item, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
        
    },);


    drag(drop(ref));


    if (item.status == "not-in-plan") {
        return (
            <ElementContainer
            ref={ref}
            style={{
                backgroundColor: item.color.main,
                opacity: isDragging ? 0.5 : 1,
            }}
            isDragDisabled={false}
            >
            {item.title}
            </ElementContainer>
        );
        } else {
        return (
            <ElementInPlanContainer
            ref={ref}
            style={{
                backgroundColor: item.color.light,
                height: duration * 2 + "px",
                borderColor: item.color.main,
                opacity: isDragging ? 0.5 : 1,
            }}
            isDragDisabled={false}
            >
            <ColorAccent
                style={{
                backgroundColor: item.color.dark,
                boxShadow:
                    "1px 1px " +
                    item.color.dark +
                    ", -1px -1px " +
                    item.color.dark +
                    ", 1px -1px " +
                    item.color.dark +
                    ", -1px 1px " +
                    item.color.dark,
                }}
            ></ColorAccent>
            <TimeDiv style={{ borderColor: item.color.main }}>
                <p style={{ color: item.color.dark, marginTop: "0.8em" }}>
                Dauer: {duration} Minuten
                </p>
            </TimeDiv>
            <h4 style={{ color: item.color.dark }}>{item.title} </h4>
            <NotesDiv>
                Notizen:
                <textarea
                style={{
                    height: duration * 2 - 10 + "px",
                    borderColor: item.color.dark,
                }}
                ></textarea>
            </NotesDiv>
            </ElementInPlanContainer>
        );
        }
}

export default connect(Item);

const ElementContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 40px;
border-radius: 8px;
color: #333333;
`;

const ElementInPlanContainer = styled.div`
display: grid;
grid-template-columns: 12px 1fr 1.5fr 1.5fr;
color: #666;
margin-bottom: 4px;
column-gap: 2px;
border-style: dashed;
border-width: 1px;
min-width: 420px;

h4 {
    margin: 4px;
}
`;

const ColorAccent = styled.div`
background: grey;
height: 100%;
`;
const TimeDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
grid-column-start: 2;
font-size: 10px;
border-style: none dashed none none;
border-width: 1px;
height: 100%;

p {
    margin-bottom: 0;
    margin-top: 0;
}
`;
const NotesDiv = styled.div`
display: flex;
padding: 4px;
gap: 4px;
font-size: 10px;
grid-column-start: 4;

textarea {
    padding: 1px;
}
`;