import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { connect, styled } from "frontity";
import WorkshopElement from "./element";
import { COLORS } from "./colors";
import { Posts } from "../posts.js";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import moment from "Moment";

export default function DragDrop(props) {
  const [board, setBoard] = useState([]);
  const [lastItemId, setLastItemId] = useState(-1);
  const [initial, setInitial] = useState(true);
  var time = moment(props.date + " " + props.time, "YYYY-MM-DD HH:mm");

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
        time.add(props.methoden[key].duration + 5, "m");
      }
    });

    //Pause
    if (id == 99) {
      board.push({
        id: 99,
        title: "Pause",
        duration: "20",
        isInPlan: true,
        color: { dark: "#82827d", light: "#e3e3e1", main: "#c7c7c7" },
      });
      console.log(time);

      time.add(20, "m");
      console.log(time);
    }

    //Größe des Zeitcontainers anpassen aufgrund der Lücken zwischen den Methoden
    let timeContainer = document.getElementById("containerTime");
    if (timeContainer != null) {
      let grTime = timeContainer.clientHeight + 5;
      timeContainer.style.height = grTime + "px";
    }
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

  if (initial) {
    //Methoden des Ziels hinzufügen
    if (props.goal != 10) {
      setInitial(false);
      if (props.goal == 0) {
        addMethodToBoard(0);
        addMethodToBoard(7);
        addMethodToBoard(13);
      } else if (props.goal == 1) {
        addMethodToBoard(0);
        addMethodToBoard(7);
        addMethodToBoard(13);
        addMethodToBoard(5);
        addMethodToBoard(9);
      } else {
        addMethodToBoard(0);
        addMethodToBoard(12);
        addMethodToBoard(7);
        addMethodToBoard(5);
        addMethodToBoard(9);
        addMethodToBoard(6);
        addMethodToBoard(1);
      }
    }
  }

  //Eingegebene Daten in Datumsobjekt umwandeln
  const date = moment(props.date + " " + props.time, "YYYY-MM-DD HH:mm");

  var displayContainer = "";
  if (date.isValid()) {
    displayContainer = (
      <div className="displayContainer">
        <div className="stunde1viertel1">{date.format("HH:mm")}</div>
        <div className="stunde1viertel2">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde1viertel3">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde1viertel4">
          {date.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde2viertel1">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde2viertel2">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde2viertel3">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde2viertel4">
          {date.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde3viertel1">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde3viertel2">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde3viertel3">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde3viertel4">
          {date.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde4viertel1">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde4viertel2">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde4viertel3">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde4viertel4">
          {date.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde5viertel1">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde5viertel2">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde5viertel3">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde5viertel4">
          {date.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde6viertel1">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde6viertel2">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde6viertel3">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde6viertel4">
          {date.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde7viertel1">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde7viertel2">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde7viertel3">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde7viertel4">
          {date.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde8viertel1">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde8viertel2">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde8viertel3">
          {date.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde8viertel4">
          {date.add(15, "m").format("HH:mm")}
        </div>
      </div>
    );
  }

  return (
    <PlanningToolContainer>
      <ElementsContainer>
        <h3>Elemente</h3>
        <WorkshopElement
          title="Pause"
          color={{ dark: "#c7c7c7", light: "#c7c7c7", main: "#c7c7c7" }}
          isInPlan={false}
          duration="20"
          id={99}
        ></WorkshopElement>
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
        <div className="containerTime" id="containerTime">
          {displayContainer}
        </div>
        <div className="containerPlan">
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
        </div>
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
  gap: 10px;
  width: 20%;
  justify-content: center;
  background-color: whitesmoke;
  padding: 8px;
  box-shadow: 0 0 1em grey;
`;
const PlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 48%;

  .containerTime {
    width: 7%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 !important;
    padding: 0 !important;
    height: 965px;
    color: lightgrey;
  }

  .containerTime div {
    width: 90%;
    height: 30px;
  }

  .displayContainer div:nth-child(odd) {
    color: darkgrey;
  }

  .containerPlan {
    display: flex;
    flex-direction: column;
    width: 93%;
    background-color: whitesmoke;
    padding: 4px;
  }
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
