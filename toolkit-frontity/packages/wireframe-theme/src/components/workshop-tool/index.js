import { connect, styled } from "frontity";
import React from "react";
import Question from "./question";
import WorkshopProgressBar from "./progress";
import PlanningTool from "./planning-tool";
import startup from "../../images/workshopTool/startup3.png";
import book from "../../images/workshopTool/book2.png";
import hands from "../../images/workshopTool/hands2.png";
import block from "../../images/workshopTool/block2.png";
import praesenz from "../../images/workshopTool/praesenz.jpg";
import online from "../../images/workshopTool/online.png";
import bgWild from "../../images/workshopTool/bgWild2.png";

class WorkshopTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 0,
      currentQuestionScreen: 0,
      question1: 10,
      question2: 10,
      question3: 10,
      question4: 10,
      title: "",
      location: "",
      date: null,
      time: null,
      daysCount: 1,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleQuestionStateChange = this.handleQuestionStateChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  renderSwitch() {
    switch (this.state.currentScreen) {
      case 0:
        return (
          <div className="beginningContainer">
            <div className="backgroundPicScreen0">
              <img src={startup} />
            </div>
            <div className="backgroundScreen0"></div>
            <div className="beginningWhitebox">
              <div className="beginningWhiteboxText">
                <div className="beginningText1">
                  <h1>Das Workshop-Toolkit</h1> <br></br>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod.<br></br>
                    <br></br> Tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum.
                  </p>
                </div>
                <div className="beginningText2">
                  <h2>
                    Brauchst du Unterstützung dabei <br /> deinen Workshop zu
                    planen?
                  </h2>
                </div>
              </div>
              <div className="beginningButtonImages">
                <div
                  className="handsButton"
                  onClick={() => {
                    this.handleStateChange(1);
                  }}
                >
                  <div className="spanHands">
                    <span>Toolkit mit Unterstützung starten</span>
                  </div>
                  <img src={hands} className="imgHands" />
                </div>
                <div
                  className="blockButton"
                  onClick={() => {
                    this.handleStateChange(3);
                  }}
                >
                  <div className="spanBlock">
                    <span>Toolkit ohne Unterstützung starten</span>
                  </div>
                  <img src={block} className="imgBlock" />
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        switch (this.state.currentQuestionScreen) {
          case 0: // Formular mit Workshop-Titel, Datum etc.
            return (
              <div className="dataContainer">
                <div className="dataBackground">
                  <img src={book} />
                </div>

                <div id="dataWhitespace">
                  <label className="label-title">
                    Titel des Workshops <br />
                    <input
                      name="title"
                      className="input-title"
                      type="text"
                      value={this.state.title}
                      onChange={this.onInputChange}
                    ></input>{" "}
                    <br />
                  </label>

                  <label className="label-location">
                    Ort <br />
                    <input
                      name="location"
                      className="input-location"
                      type="text"
                      value={this.state.location}
                      onChange={this.onInputChange}
                    ></input>{" "}
                    <br />
                  </label>

                  <h3 className="h3-question">
                    Wann findet der Workshop statt?
                  </h3>
                  <label className="label-date">
                    Datum <br />
                    <input
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.onInputChange}
                    ></input>{" "}
                    <br />
                  </label>

                  <label className="label-time">
                    Uhrzeit <br />
                    <input
                      type="time"
                      name="time"
                      value={this.state.time}
                      onChange={this.onInputChange}
                    ></input>{" "}
                    <br />
                  </label>

                  <label className="label-days-count">
                    Anzahl der Tage <br />
                    <select
                      name="daysCount"
                      value={this.state.daysCount}
                      onChange={this.onInputChange}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>{" "}
                    <br />
                  </label>
                  <div className="buttonBox">
                    <button
                      className="backButton"
                      onClick={() => {
                        this.handleStateChange(0);
                      }}
                    >
                      Zurück
                    </button>
                    <button
                      className="nextButton"
                      onClick={() => {
                        this.handleQuestionStateChange(1);
                      }}
                    >
                      Weiter
                    </button>
                  </div>
                </div>
              </div>
            );

          case 1:
            return (
              <div className="goalContainer">
                <div className="goalBackground">
                  <img src={book} />
                </div>
                <div className="goalWhitebox">
                  <h1>Was ist das Ziel Ihres Workshops?</h1>
                  <div className="goalOptionsbox">
                    <div
                      className="goalOption1"
                      id={
                        this.state.question1 != 0
                          ? "goalOption1"
                          : "goalOption1Clicked"
                      }
                      onClick={() => this.setState({ question1: 0 })}
                    >
                      <div className="goalPic1"></div>
                      <h2>Produktentwicklung</h2>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </div>
                    <div
                      className="goalOption2"
                      id={
                        this.state.question1 != 1
                          ? "goalOption2"
                          : "goalOption2Clicked"
                      }
                      onClick={() => this.setState({ question1: 1 })}
                    >
                      <div className="goalPic2"></div>
                      <h2>Produkt-Testen</h2>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </div>
                    <div
                      className="goalOption3"
                      id={
                        this.state.question1 != 2
                          ? "goalOption3"
                          : "goalOption3Clicked"
                      }
                      onClick={() => this.setState({ question1: 2 })}
                    >
                      <div className="goalPic3"></div>
                      <h2>Ideensammlung</h2>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </div>
                  </div>
                  <button
                    className="backButton"
                    onClick={() => {
                      this.handleQuestionStateChange(0);
                    }}
                  >
                    Zurück
                  </button>
                  <button
                    className="nextButton"
                    onClick={() => {
                      this.handleQuestionStateChange(2);
                    }}
                  >
                    Weiter
                  </button>
                </div>
              </div>
            );

          case 2:
            return (
              <div className="numberContainer">
                <div className="numberBackground">
                  <img src={book} />
                  <div className="numberWhitebox">
                    <h1>Anzahl der Teilnehmer</h1>
                    <div className="numberOptionsbox">
                      <div
                        className="numberOption2"
                        id={
                          this.state.question2 != 0
                            ? "numberOption1"
                            : "numberOption1Clicked"
                        }
                        onClick={() => this.setState({ question2: 0 })}
                      >
                        <div className="numberPic1"></div>
                        <h2>5-10</h2>
                      </div>
                      <div
                        className="numberOption2"
                        id={
                          this.state.question2 != 1
                            ? "numberOption2"
                            : "numberOption2Clicked"
                        }
                        onClick={() => this.setState({ question2: 1 })}
                      >
                        <div className="numberPic2"></div>
                        <h2>10-15</h2>
                      </div>
                      <div
                        className="numberOption3"
                        id={
                          this.state.question2 != 2
                            ? "numberOption3"
                            : "numberOption3Clicked"
                        }
                        onClick={() => this.setState({ question2: 2 })}
                      >
                        <div className="numberPic3"></div>
                        <h2>15-25</h2>
                      </div>
                      <div
                        className="numberOption4"
                        id={
                          this.state.question2 != 3
                            ? "numberOption4"
                            : "numberOption4Clicked"
                        }
                        onClick={() => this.setState({ question2: 3 })}
                      >
                        <div className="numberPic4"></div>
                        <h2>Über 25</h2>
                      </div>
                    </div>
                    <button
                      className="backButton"
                      onClick={() => {
                        this.handleQuestionStateChange(1);
                      }}
                    >
                      Zurück
                    </button>
                    <button
                      className="nextButton"
                      onClick={() => {
                        this.handleQuestionStateChange(3);
                      }}
                    >
                      Weiter
                    </button>
                  </div>
                </div>
              </div>
            );

          case 3:
            return (
              <div className="locationContainer">
                <div className="locationBackground">
                  <img src={book} />
                </div>
                <div className="locationWhitebox">
                  <h1>Soll der Workshop online oder in Präsenz stattfinden?</h1>
                  <div className="locationOptionsbox">
                    <div
                      className="locationOption1"
                      id={
                        this.state.question3 != 0
                          ? "locationOption1"
                          : "locationOption1Clicked"
                      }
                      onClick={() => this.setState({ question3: 0 })}
                    >
                      <div className="locationPic1">
                        <img src={online} />
                      </div>
                      <h2>Online</h2>
                      Lorem ipsum dolor sit amet, consetetur dolor sit
                      sadipscing elitr.
                    </div>
                    <div
                      className="locationOption2"
                      id={
                        this.state.question3 != 1
                          ? "locationOption2"
                          : "locationOption2Clicked"
                      }
                      onClick={() => this.setState({ question3: 1 })}
                    >
                      <div className="locationPic2">
                        <img src={praesenz} />
                      </div>
                      <h2>Präsenz</h2>
                      Lorem ipsum dolor sit amet, consetetur dolor sit
                      sadipscing elitr.
                    </div>
                  </div>
                  <button
                    className="backButton"
                    onClick={() => {
                      this.handleQuestionStateChange(2);
                    }}
                  >
                    Zurück
                  </button>
                  <button
                    className="nextButton"
                    onClick={() => {
                      this.handleStateChange(2);
                    }}
                  >
                    Weiter
                  </button>
                </div>
              </div>
            );

          case 3:
            return (
              <div className="goalContainer">
                <div className="goalBackground">
                  <div className="goalWhitebox">
                    <h1>
                      Soll der Workshop online oder in Präsenz stattfinden?
                    </h1>
                    <div className="goalOptionsbox">
                      <div
                        className="goalOption1"
                        id="goalOption1"
                        onClick={this.handlerQuestion1State0}
                      >
                        <div className="goalPic1"></div>
                        <h2>Online</h2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                      </div>
                      <div
                        className="goalOption2"
                        id="goalOption2"
                        onClick={this.handlerQuestion1State1}
                      >
                        <div className="goalPic2"></div>
                        <h2>Präsenz</h2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                      </div>
                    </div>
                    <button
                      className="backButton"
                      onClick={() => {
                        this.handleQuestionStateChange(2);
                      }}
                    >
                      Zurück
                    </button>
                    <button
                      className="nextButton"
                      onClick={() => {
                        this.handleStateChange(2);
                      }}
                    >
                      Weiter
                    </button>
                  </div>
                </div>
              </div>
            );
        }

      // Wechsel Fragen - Planungstool
      case 2:
        return (
          <div className="suggestionContainer">
            <div className="suggestionsBackground">
              <img src={bgWild} />
            </div>
            <div className="suggestionsWhitebox">
              <h1>Eingegebene Daten:</h1>
              <br />
              <br />
              Titel: {this.state.title}
              <br />
              <br />
              Ort: {this.state.location}
              <br />
              <br />
              Datum: {this.state.date}
              <br />
              <br />
              Uhrzeit: {this.state.time}
              <br />
              <br />
              Tage: {this.state.daysCount}
              <br />
              <br />
              Frage 1: {this.state.question1}
              <br />
              <br />
              Frage 2: {this.state.question2}
              <br />
              <br />
              Frage 3: {this.state.question3}
              <br />
              <br />
              <button
                className="backButton"
                onClick={() => {
                  this.handleStateChange(1);
                  this.handleQuestionStateChange(3);
                }}
              >
                Zurück
              </button>
              <button
                className="nextButton"
                onClick={() => {
                  this.handleStateChange(3);
                }}
              >
                Weiter
              </button>
            </div>
          </div>
        );

      // Wechsel Fragen - Planungstool hi
      case 3:
        return (
          <div className="toolBackground">
            <div className="toolWhitebox">
              <PlanningTool></PlanningTool>
              <button
                className="backButton"
                onClick={() => {
                  this.handleStateChange(2);
                }}
              >
                Zurück
              </button>
            </div>
          </div>
        );
    }
  }

  handleStateChange(number) {
    this.setState({ currentScreen: number });
  }

  handleQuestionStateChange(number) {
    this.setState({ currentQuestionScreen: number });
  }

  handlerQuestion2State(value) {
    this.setState({ question2: value });
  }

  handlerQuestion3State(value) {
    this.setState({ question3: value });
  }

  handlerQuestion4State(value) {
    this.setState({ question4: value });
  }

  handlerFinalQuestion() {
    this.setState({ currentScreen: 2 });
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <WorkshopContainer>
        {this.state.currentScreen == 1 ? (
          <WorkshopProgressBar
            currentQuestion={this.state.currentQuestionScreen}
            numberOfQuestions={5}
          />
        ) : (
          ""
        )}
        {this.renderSwitch()}
      </WorkshopContainer>
    );
  }
}
export default connect(WorkshopTool);

const WorkshopContainer = styled.div`
  margin-top:120px;
  min-height: 80vh;

  div {
    items-align: center;
    text-align: center;
  }

  button {
    width: 160px;
    padding: 20px;
    margin: 20px;
    height: 50px;
    //margin-bottom: 150px !important;
  }

  label {
    color: #555555;
  }

  //beginning

  .backgroundPicScreen0 {
    width: 100%;
    height: 75vh;
    position: relative;
  }

  .backgroundPicScreen0 img {
    width: 100vw;
  }

  .backgroundScreen0 {
    background-color: white;
    height: 180px;
    position: relative;
  }

  .beginningWhitebox {
    background-color: white;
    padding: 30px;
    padding-top: 33px;
    width: 1280px;
    height: 550px;
    position: absolute;
    margin: auto;
    top: 23vh;
    left: 15.3vw;
  }

  .beginningWhiteboxText {
    width: 60%;
    margin: auto;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .beginningText1 {
    border-bottom-width: 2.5px;
    border-bottom-style: solid;
    border-color: rgba(78, 237, 228, 0.4);
  }

  .beginningText2 {
    margin-top: 45px;
  }

  //beginning button images
  .imgHands {
    height: 170px;
    width: 289px;
  }

  .imgBlock {
    height: 170px;
    width: 289px;
  }

  .spanHands {
    position: absolute;
    display: inline;
    padding: 17px;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.7);
    width: 289px;
    height: 60px;
  }

  .spanBlock {
    position: absolute;
    display: inline;
    padding: 17px;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.7);
    width: 289px;
    height: 60px;
  }

  .handsButton {
    display: inline;
    margin-right: 50px;
    height: 170px;
    width: 289px;
  }

  .blockButton {
    display: inline;
    height: 170px;
    width: 289px;
  }

  //data
  .dataContainer {
    height: 82vh;
    position: relative;
  }

  .dataBackground {
    height: 400px;
  }

  .dataBackground img {
    width: 100%;
    left: 0;
    margin-bottom: 20px;
  }

  #dataWhitespace {
    display: grid;
    grid-template-columns: 30% 10% 20% 10% 30%;
    grid-template-rows: 30% 20% 30% 20%;
    grid-template-areas:
      "title title . location location"
      "h3-question h3-question h3-question h3-question h3-question"
      "date xtime xtime xtime days-count"
      "buttonBox buttonBox buttonBox buttonBox buttonBox";
    height: 64vh;
    width: 50%;
    background: rgba(255, 255, 255, 0.7);
    top: 13vh;
    left: 23vw;
    position: absolute;
  }

  .buttonBox {
    display: flex;
    grid-area: buttonBox;
    width: 100%;
  }

  .label-title {
    grid-area: title;
  }

  .label-location {
    grid-area: location;
  }

  .h3-question {
    margin: 24px;
    grid-area: h3-question;
  }

  .label-date {
    grid-area: date;
  }

  .label-time {
    grid-area: xtime;
  }
  .label-days-count {
    grid-area: days-count;
  }
  .input-title,
  .input-location {
    width: 200px;
  }
  .backButton {
    grid-area: backButton;
    padding: 0 !important
    margin: 0 !important;
    bottom: 0 !important;
  }

  .nextButton {
    margin-left: 42%;
    grid-area: nextButton;
    padding: 0 !important
    margin: 0 !important;
    bottom: 0 !important;
  }

  //goal

  .goalContainer {
    height: 82vh;
    position: relative;
  }

  .goalBackground {
    height: 400px;
  }

  .goalBackground img {
    width: 100%;
    left: 0;
    margin-bottom: 20px;
  }

  .goalWhitebox {
    width: 50%;
    height: 64vh;
    background: rgba(245, 245, 245, 0.7);
    top: 13vh;
    left: 23vw;
    position: absolute;
  }

  .goalOptionsbox {
    width: 90%;
    display: flex;
    gap: 30px;
    margin: auto;

    flex-basis: 33%;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 0;
  }

  #goalOption1,
  #goalOption2,
  #goalOption3 {
    background: rgba(245, 245, 245, 0.7);
    width: 28%;
    height: 40vh;
    padding: 1.5%;
    //border: black 2px solid;
    flex: 1;
  }

  #goalOption1Clicked,
  #goalOption2Clicked,
  #goalOption3Clicked {
    background: rgba(245, 245, 245, 0.7);
    width: 28%;
    height: 40vh;
    padding: 1.5%;
    box-shadow: 0 0 45px rgba(88, 23, 93, 1.0);
    flex: 1;
  }

  //number
  .numberContainer {
    height: 82vh;
    position: relative;
  }

  .numberBackground {
    height: 400px;
  }

  .numberBackground img {
    width: 100%;
    left: 0;
    margin-bottom: 20px;
  }

  .numberWhitebox {
    width: 50%;
    height: 64vh;
    background: rgba(245, 245, 245, 0.7);
    top: 13vh;
    left: 23vw;
    position: absolute;
  }

  .numberOptionsbox {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: auto;

    flex-basis: 33%;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 0;
  }

  #numberOption1,
  #numberOption2,
  #numberOption3,
  #numberOption4 {
    margin: auto;
    background: rgba(245, 245, 245, 0.7);
    width: 30%;
    height: 40vh;
    padding: 1.5%;
    //border: black 2px solid;
    flex: 1;
  }

  #numberOption1Clicked,
  #numberOption2Clicked,
  #numberOption3Clicked,
  #numberOption4Clicked {
    margin: auto;
    background: rgba(245, 245, 245, 0.7);
    width: 30%;
    height: 40vh;
    padding: 1.5%;
    //border: black 2px solid;
    flex: 1;
    box-shadow: 0 0 45px rgba(88, 23, 93, 1.0);

  }

  //location

  .locationContainer {
    height: 82vh;
    position: relative;
  }

  .locationBackground {
    height: 400px;
  }

  .locationBackground img {
    width: 100%;
    left: 0;
    margin-bottom: 20px;
  }

  .locationWhitebox {
    width: 50%;
    height: 64vh;
    background: rgba(245, 245, 245, 0.7);
    top: 13vh;
    left: 23vw;
    position: absolute;
  }

  .locationOptionsbox {
    width: 90%;
    display: flex;
    gap: 30px;
    margin: auto;

    flex-basis: 33%;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 0;
  }

  #locationOption1,
  #locationOption2,
  #locationOption3 {
    background: rgba(245, 245, 245, 0.7);
    width: 28%;
    height: 40vh;
    //border: black 2px solid;
    flex: 1;
  }

  #locationOption1Clicked,
  #locationOption2Clicked,
  #locationOption3Clicked {
    background: rgba(245, 245, 245, 0.7);
    width: 28%;
    height: 40vh;
    flex: 1;

    box-shadow: 0 0 45px rgba(88, 23, 93, 1.0);
  }

  .locationPic1, .locationPic2 {
    margin: auto;
    width: 100%;
    
  }

  //Vorschläge
  .suggestionContainer{
    height: 82vh;
    position: relative;
  }

  .suggestionsBackground {
    z-index:0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .suggestionsWhitebox {
    width: 50%;
    height: 64vh;
    background: rgba(245, 245, 245, 0.92);
    top: 13vh;
    left: 23vw;
    position: absolute;
  }

  //Planungstool
  
  .toolBackground{
        min-height: 80vh;
        position: relative;
  }

  .toolBackground img {
    width: 100%;
    left: 0;
    margin-bottom: 20px;
  }
  
`;
