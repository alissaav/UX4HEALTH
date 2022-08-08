import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { connect, styled } from "frontity";
import WorkshopElement from "./element";
import { COLORS } from "./colors";
import { Posts } from "../posts.js";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DragDrop(props) {
  const [board, setBoard] = useState([]);
  const [lastItemId, setLastItemId] = useState(-1);
  const ref = useRef(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "method",
    //herausfinden welches Element man zu Board hinzufügt
    drop: (item) => {
      addMethodToBoard(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),

    /*
    hover(item, monitor) {
      if (!ref.current) {
        console.log(item);
      }

      
      const domNode = ReactDOM.findDOMNode(item);

      if (!domNode) {
        return;
      }
      

      
      const dragIndex = item.id;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      
    }, */
  }));

  const addMethodToBoard = (id) => {
    Object.keys(props.methoden).map(function (key) {
      if (id == key) {
        props.methoden[key].isInPlan = true;
        board.push(props.methoden[key]);
      }
    });
  };

  //Indizes der Arrays angleichen
  board.map(function (value, index) {
    board[index].id = index;
  });
  props.methoden.map(function (value, index) {
    props.methoden[index].id = index;
  });

  function updateLastItem(key) {
    if (key.isInPlan == true) {
      setLastItemId(key.id);
      //console.log(key.id);
    } else {
      setLastItemId(key);
      //console.log(key);
    }
  }

  return (
    <PlanningToolContainer>
      <ElementsContainer>
        <h3>Elemente</h3>
        {Object.keys(props.methoden).map(function (key) {
          if (!props.methoden[key].isInPlan) {
            return (
              <div
                onMouseDown={() => {
                  updateLastItem(key);
                }}
              >
                <WorkshopElement
                  title={props.methoden[key].title}
                  color={props.methoden[key].color}
                  isInPlan={props.methoden[key].isInPlan}
                  duration={props.methoden[key].duration}
                  id={key}
                ></WorkshopElement>
              </div>
            );
          }
        })}
      </ElementsContainer>
      <PlanContainer ref={drop}>
        {board.map(function (key) {
          return (
            <div
              onMouseDown={() => {
                updateLastItem(key);
              }}
            >
              <WorkshopElement
                title={key.title}
                color={key.color}
                isInPlan={key.isInPlan}
                duration={key.duration}
                id={key}
              ></WorkshopElement>
            </div>
          );
        })}
      </PlanContainer>
      <TipContainer>
        <h3>Tipps</h3>
        <br />

        {props.methoden[lastItemId] == undefined
          ? ""
          : props.methoden[lastItemId].title}

        <div className="tippHinweis">Bitte wählen Sie eine Methode aus.</div>
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
  width: 20%;
  background-color: whitesmoke;
  justify-content: center;
  padding: 8px;
  box-shadow: 0 0 1em grey;
  text-align: center;

  .tippHinweis {
    margin-top: 60vh;
    margin-bottom: 4vh;
  }
`;
