import React, { useRef } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDrag, useDrop } from 'react-dnd';
import ITEM_TYPE from "./types";
import { connect, styled } from "frontity";


const DragElement = ({ item, index, moveItem, status, state }) => {

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if(!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex){
                return;
            }

            const hoveredRect = ref.current.getBoundClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY){
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, index},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    drag(drop(ref));

    return (
        <WorkshopElement id={this.props.id} title={this.props.title} duration={this.props.duration} color={this.props.color} isInPlan={this.props.isInPlan} className={this.props.title} style={{opacity: isDragging? 0 : 1}}></WorkshopElement>
    )
}

export default connect(DragElement);