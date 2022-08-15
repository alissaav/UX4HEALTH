import React, { useState } from "react";
import { connect, styled } from "frontity";
import { useDrag } from "react-dnd";
import moment from "Moment";

function WorkshopElement(props) {
  const [isInPlan, setIsInPlan] = useState(props.isInPlan);
  const [duration, setDuration] = useState(props.duration);
  const [notes, setNotes] = useState("");

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "method",
    item: { id: props.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  function handleChangeDuration(event) {
    setDuration(event.target.value);
  }

  if (isInPlan == false) {
    return (
      <ElementContainer
        ref={drag}
        style={{
          backgroundColor: props.color.main,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        {props.title}
      </ElementContainer>
    );
  } else {
    return (
      <ElementInPlanContainer
        ref={drag}
        style={{
          backgroundColor: props.color.light,
          height: duration * 2 + "px",
          borderColor: props.color.main,
        }}
      >
        <ColorAccent
          style={{
            backgroundColor: props.color.dark,
            boxShadow:
              "1px 1px " +
              props.color.dark +
              ", -1px -1px " +
              props.color.dark +
              ", 1px -1px " +
              props.color.dark +
              ", -1px 1px " +
              props.color.dark,
          }}
        ></ColorAccent>
        <TimeDiv style={{ borderColor: props.color.main }}>
          <p
            style={{
              color: props.color.dark,
              marginTop: "1.15em",
              display: "inline",
            }}
          >
            Dauer:
          </p>
          <input
            name="durationInput"
            className="durationInput"
            id="durationInput"
            type="number"
            min="15"
            max="500"
            value={duration}
            onChange={handleChangeDuration}
            style={{
              color: props.color.dark,
              marginTop: "0.8em",
              display: "inline",
            }}
          ></input>
          <p
            style={{
              color: props.color.dark,
              marginTop: "1.15em",
              display: "inline",
            }}
          >
            Minuten
          </p>
        </TimeDiv>
        <h4 style={{ color: props.color.dark }}>{props.title} </h4>
        <NotesDiv>
          Notizen:
          <textarea
            style={{
              height: duration * 2 - 10 + "px",
              borderColor: props.color.dark,
            }}
          ></textarea>
        </NotesDiv>
      </ElementInPlanContainer>
    );
  }
}

export default connect(WorkshopElement);

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
  margin-bottom: 0px;
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
`;
const TimeDiv = styled.div`
  .durationInput {
    width: 40px;
    height: 15px;
    display: inline;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    border-radius: 3px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  display: flex;
  margin: auto;
  flex-direction: row;
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
