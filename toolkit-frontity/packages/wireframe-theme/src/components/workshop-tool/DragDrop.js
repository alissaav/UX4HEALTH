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
    drop: (item) => addMethodToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addMethodToBoard = (id) => {
    Object.keys(props.methoden).map(function (key) {
      if (id == key) {
        console.log(key);
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
          return (
            <WorkshopElement
              title={props.methoden[key].title.rendered}
              color={COLORS.blue}
              isInPlan={false}
              duration={30}
              id={key}
            ></WorkshopElement>
          );
        })}
      </ElementsContainer>
      <PlanContainer ref={drop}>
        {board.map((key) => {
          return (
            <WorkshopElement
              title={key.title.rendered}
              color={COLORS.yellow}
              isInPlan={true}
              duration={30}
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
