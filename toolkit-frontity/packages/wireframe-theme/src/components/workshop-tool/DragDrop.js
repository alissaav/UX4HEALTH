import React, { useState } from "react";
import { connect, styled } from "frontity";
import WorkshopElement from "./element";
import { COLORS } from "./colors";
import { Posts } from "../posts.js";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DragDrop(props) {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "method",
    //herausfinden welches Element man zu Board hinzufügt
    drop: (item) => {
      addMethodToBoard(item.id)},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addMethodToBoard = (id) => {
    Object.keys(props.methoden).map(function (key) {
      if (id == key) {
        console.log(props.methoden[key]);
        props.methoden[key].isInPlan = true;
        console.log(props.methoden[key]);
        board.push(props.methoden[key]);
      }
      console.log(props.methoden);
    });
  };

  return (
    <PlanningToolContainer>
      <ElementsContainer>
        <h3>Elemente</h3>
        {Object.keys(props.methoden).map(function (key) {
          if(!props.methoden[key].isInPlan) {return(
            <WorkshopElement
              title={props.methoden[key].title}
              color={props.methoden[key].color}
              isInPlan={props.methoden[key].isInPlan}
              duration={props.methoden[key].duration}
              id={key}
            ></WorkshopElement>
          );}
        })}
      </ElementsContainer>
      <PlanContainer ref={drop}>
        {board.map((key) => {
          return (
            <WorkshopElement
              title={key.title}
              color={key.color}
              isInPlan={key.isInPlan}
              duration={key.duration}
              id={key}
            ></WorkshopElement>
          );
        })}
      </PlanContainer>
      <TipContainer>
        <h3>Tipps</h3>
      </TipContainer>
    </PlanningToolContainer>
  );
}

const PlanningToolContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 20%;
  justify-content: center;
  background-color: whitesmoke;
  padding: 8px;
  box-shadow: 0 0 1em grey;
`;
const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: whitesmoke;
  padding: 4px;
`;

const TipContainer = styled.div`
  display: flex;
  width: 20%;
  background-color: whitesmoke;
  justify-content: center;

  padding: 8px;
  box-shadow: 0 0 1em grey;
`;
