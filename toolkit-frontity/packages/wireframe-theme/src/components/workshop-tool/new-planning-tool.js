import React, { useState, useEffect, useReducer } from "react";
import Item from "./item";
import ColumnWrapper from "./column-wrapper";
import Col from "./column";
import { statuses } from "./status";
import { connect, styled } from "frontity";
import { COLORS } from "./colors";
import { Posts } from "../posts.js";
import moment from "Moment";
import cubes from "../../images/workshopTool/bgcubes2.png";
// import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const NewPlanningTool = (props) => {
  const rawPosts = props.state.source["post"];
  let parsedPosts = JSON.parse(JSON.stringify(rawPosts));
  let postArray = Posts(parsedPosts);
  const [posts, setPosts] = useState(postArray);
  useEffect(() => {
    console.log(posts);
  });
  const [lastItemId, setLastItemId] = useState(-1);
  const [initial, setInitial] = useState(true);

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const [data, setData] = useState({
    currentDate: props.date,
    currentTime: props.time,
    currentTitle: props.title,
    currentLocation: props.location,
    currentDaysCount: props.days,
    currentNumber: props.number,
    currentOnline: props.online,
  });

  console.log(data.currentTime);

  var time = moment(
    data.currentDate + " " + data.currentTime,
    "YYYY-MM-DD HH:mm"
  );
  var timeAbbild = moment(
    data.currentDate + " " + data.currentTime,
    "YYYY-MM-DD HH:mm"
  );

  const addMethodToBoard = (id) => {
    posts.map((post, key) => {
      if (id == key) {
        post.status = "in-plan";
        // time.add(props.methoden[key].duration + 5, "m");
      }
    });

    //Pause
    // if (id == 99) {
    // board.push({
    //     id: 99,
    //     title: "Pause",
    //     duration: "20",
    //     isInPlan: true,
    //     color: { dark: "#82827d", light: "#e3e3e1", main: "#c7c7c7" },
    // });

    // time.add(20, "m");
    // }
  };

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

  var displayContainer = "";
  if (timeAbbild.isValid()) {
    displayContainer = (
      <div className="displayContainer">
        <div className="stunde1viertel1">{timeAbbild.format("HH:mm")}</div>
        <div className="stunde1viertel2">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde1viertel3">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde1viertel4">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde2viertel1">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde2viertel2">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde2viertel3">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde2viertel4">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde3viertel1">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde3viertel2">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde3viertel3">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde3viertel4">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde4viertel1">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde4viertel2">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde4viertel3">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde4viertel4">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde5viertel1">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde5viertel2">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde5viertel3">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde5viertel4">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde6viertel1">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde6viertel2">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde6viertel3">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde6viertel4">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde7viertel1">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde7viertel2">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde7viertel3">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde7viertel4">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>

        <div className="stunde8viertel1">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde8viertel2">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde8viertel3">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
        <div className="stunde8viertel4">
          {timeAbbild.add(15, "m").format("HH:mm")}
        </div>
      </div>
    );
  }

  const onDrop = (item, monitor, status) => {
    posts.find(i => i.id == item.id).status = status;
    forceUpdate();
  };

  const moveItem = (dragIndex, hoverIndex) => {

    const item = posts[dragIndex];
    item.index = hoverIndex;
    console.log(posts);

    const newItems = posts.filter((i, idx) => idx !== dragIndex);
    console.log(newItems);
    newItems.splice(hoverIndex, 0, item);
    console.log(newItems);
    setPosts([...newItems]);
    console.log(posts);
  };

  function updateLastItem(key) {
    if (key.isInPlan == true) {
      setLastItemId(key.id);
      //console.log(key.id);
    } else {
      setLastItemId(key);
      //console.log(key);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function printDocument() {
    let input = document.getElementById("PlanContainer");

    let titelInhalt = "";
    let titel = document.getElementById("titleInput");
    let locationInhalt = "";
    let location = document.getElementById("locationInput");
    let useWidth = "";
    let useHeight = "";

    if (input != null && input != undefined) {
      useWidth = input.clientHeight;
      useHeight = input.clientWidth;
    }

    if (titel != null && titel != undefined) {
      titelInhalt = titel.value;
    }

    if (location != null && location != undefined) {
      locationInhalt = location.value;
    }

    const pdf = new jsPDF("p", "pt", "a3");

    html2canvas(input, {
      width: useWidth,
      height: useHeight,
    }).then((canvas) => {
      pdf.setTextColor(112, 112, 112);
      pdf.setFontSize(34);
      pdf.text(
        100,
        //1310,
        100,
        titelInhalt,
        { align: "left" }
      );

      pdf.setFontSize(14);
      pdf.text(
        100,
        //1310,
        140,
        "Ort: " + locationInhalt,
        { align: "left" }
      );

      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 145, 180);

      pdf.text(
        100,
        //1310,
        850,
        "... erstellt durch das UX4-Health Workshop-Toolkit: https://ux.codeforhealth.de/workshop-tool/",
        { align: "left" }
      );
      pdf.text(
        100,
        //1310,
        890,
        "Kontakt: alina.huldtgren@hs-duesseldorf.de",
        { align: "left" }
      );

      pdf.save("download.pdf");
    });
  }

  return (
    <WorkShopToolkitContainer id="alltoolkit">
      <img src={cubes} className="imgcubes" />
      <div className="titleBox">
        <div className="l-title">
          <h3 style={{ display: "inline", marginRight: "20px" }}>Titel:</h3>
          <input
            name="currentTitle"
            className="titleInput"
            id="titleInput"
            type="text"
            value={data.currentTitle}
            onChange={handleChange}
          ></input>
        </div>

        <div className="l-location">
          <h3 style={{ display: "inline", marginRight: "20px" }}>Ort:</h3>
          <input
            name="currentLocation"
            className="locationInput"
            id="locationInput"
            type="text"
            value={data.currentLocation}
            onChange={handleChange}
          ></input>
        </div>
        <button
          className="saveButton"
          onClick={() => {
            printDocument();
          }}
        >
          Als PDF herunterladen
        </button>
      </div>
      <PlanningToolContainer>
        <ElementsContainer key="not-in-plan" className="col-wrapper">
          <h3>Elemente</h3>
          <ColumnWrapper onDrop={onDrop} status="not-in-plan">
            <Col>
              {/* <WorkshopElement
                                title="Pause"
                                color={COLORS.green}
                                isInPlan={false}
                                duration="20"
                                id={99}
                            ></WorkshopElement>
                            <WorkshopElement
                                title="Begrüßung"
                                color={COLORS.green}
                                isInPlan={false}
                                duration="15"
                                id={100}
                            ></WorkshopElement>
                            <WorkshopElement
                                title="Ice-Breaker"
                                color={COLORS.green}
                                isInPlan={false}
                                duration="10"
                                id={101}
                            ></WorkshopElement>
                            <WorkshopElement
                                title="Verabschiedung"
                                color={COLORS.green}
                                isInPlan={false}
                                duration="15"
                                id={102}
                            ></WorkshopElement> */}
              {posts.map((post, key) => {
                {
                  /* console.log(key);
                                    console.log(posts); */
                }
                if (post.status == "not-in-plan") {
                  return (
                    <div
                      key={key}
                      onMouseDown={() => {
                        updateLastItem(key);
                      }}
                    >
                      <Item
                        key={key}
                        item={post}
                        index={key}
                        moveItem={moveItem}
                      ></Item>
                    </div>
                  );
                }
              })}
            </Col>
          </ColumnWrapper>
        </ElementsContainer>

        <PlanContainer id="PlanContainer" key="in-plan" className="col-wrapper">
          <div className="dataContainerTool">
            <div className="containerTimeSmall">
              <label className="l-date">
                <h4>Datum:</h4>
                <input
                  name="currentDate"
                  className="dateInput"
                  type="date"
                  value={time.format("yyyy-MM-DD")}
                  onChange={handleChange}
                ></input>
              </label>

              <label className="l-time">
                <h4>Uhrzeit:</h4>
                <input
                  name="currentTime"
                  className="timeInput"
                  type="time"
                  value={time.format("HH:mm")}
                  onChange={handleChange}
                ></input>
              </label>
            </div>
            <div className="containerDays">
              <div className="containerDays1">
                <label className="label-days">
                  <h4>Anzahl Tage:</h4>
                  <select
                    name="currentDaysCount"
                    className="daysInput"
                    value={data.currentDaysCount}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </label>
                <br />
                <label className="label-daysSelection">
                  <h4>Anzeige Tag:</h4>
                  <select
                    name="currentDaysCount"
                    className="daysSelectionInput"
                    value={data.currentDaysCount}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </label>
              </div>
              <div className="containerDays2">
                <label className="l-number">
                  <h4>Anzahl Teilnehmer:</h4>
                  <select
                    name="currentNumber"
                    className="numberInput"
                    value={data.currentNumber}
                    onChange={handleChange}
                  >
                    <option value="0">5-10</option>
                    <option value="1">10-15</option>
                    <option value="2">15-25</option>
                    <option value="3">Über 25</option>
                  </select>
                  <br />
                </label>

                <label className="l-oline">
                  <h4>Online o. Präsenz:</h4>
                  <select
                    name="currentOnline"
                    className="onlineInput"
                    value={data.currentOnline}
                    onChange={handleChange}
                  >
                    <option value="0">Online</option>
                    <option value="1">Präsenz</option>
                  </select>
                  <br />
                </label>
              </div>
            </div>
          </div>
          <div className="timetableWrapper">
            <div className="containerTime" id="containerTime">
              {displayContainer}
            </div>

            <ColumnWrapper onDrop={onDrop} status="in-plan">
              <Col>
                {posts.map((post, key) => {
                  if (post.status == "in-plan") {
                    return (
                      <div
                        key={key}
                        onMouseDown={() => {
                          updateLastItem(key);
                        }}
                      >
                        <Item
                          key={post.id}
                          item={post}
                          index={key}
                          moveItem={moveItem}
                        ></Item>
                      </div>
                    );
                  }
                })}
              </Col>
            </ColumnWrapper>
          </div>
        </PlanContainer>
        <TipContainer>
          <h3>Tipps</h3>
          <br />
          <div className="tippText"
            dangerouslySetInnerHTML={{
              __html:
                posts[lastItemId] === undefined
                  ? "Bitte wählen Sie eine Methode aus."
                  : posts[lastItemId].tip,
            }}
          />
        </TipContainer>
      </PlanningToolContainer>
    </WorkShopToolkitContainer>
  );
};

export default connect(NewPlanningTool);

const WorkShopToolkitContainer = styled.div`
  h3,
  h4 {
    margin: 0;
  }

  .imgcubes {
    position: absolute;
    z-index: -100;
    margin-top: 0;
  }
  .titleBox {
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    padding-top: 15vh;
    gap: 40px;
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;
  }

  .l-title {
  }

  .titleInput {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: solid;
    background-color: #e8f0fe;

    font-weight: 700;
    font-size: 25px;
  }

  .saveButton {
    margin: 0 !important;
    padding: 17px;
    display: flex;
    width: initial !important;
    border-style: solid;
    background-color: whitesmoke;
    margin: 0 !important;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border-width: medium;
    border-color: rgba(175, 175, 175, 0.55);
    font-size: 12px;
    width: 60%;
    height: 60%;
  }

  .l-location {
  }

  .locationInput {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: solid;
    background-color: #e8f0fe;
    font-weight: 700;
    font-size: 25px;
  }
`;

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
  flex-direction: column;
  width: 40vw;
  background-color: whitesmoke;
  .timetableWrapper {
    display: flex;
  }
  .containerTimeSmall {
    width: 15%;
    margin: 0 !important;
    padding: 0 !important;
    position: relative;
  }

  .containerDays {
    width: 84%;
    padding: 4px;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 6vh;
    align-items: center;
    justify-content: end;
  }

  .timeInput,
  .dateInput,
  .daysInput,
  .daysSelectionInput,
  .numberInput,
  .onlineInput {
    width: 6vw;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    border-radius: 3px;
    background-color: #e8f0fe;
  }

  .dataContainerTool {
    background-color: rgba(175, 175, 175, 0.5);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    height: fit-content;
  }

  .planContainer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    z-index: 100;
    flex-wrap: no-wrap;
  }

  .containerTime {
    width: 15%;
    padding: 0 !important;
    height: 965px;
    color: lightgrey;
    background-color: white-smoke;
  }

  .displayContainer div {
    width: 100%;
    min-height: 30.5px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: dashed;
    border-width: 1px;
  }

  .displayContainer div:nth-child(odd) {
    color: darkgrey;
  }

  .displayContainer {
    display: flex;
    flex-direction: column;
    color: darkgrey;
    height: 965px;
  }

  .containerPlan {
    display: flex;
    flex-direction: column;
    width: 85%;
    background-color: whitesmoke;
    padding: 4px;
  }
`;

const TipContainer = styled.div`
  width: 20%;
  background-color: whitesmoke;
  padding: 8px;
  box-shadow: 0 0 1em grey;
  text-align: center;
  padding: 20px;
  text-align: start;

  .tippHinweis {
    margin-top: 60vh;
    margin-bottom: 4vh;
    text-align: start !important;
  }
  .tippText {
    text-align: start !important;
    line-height:24px;
  }
`;
