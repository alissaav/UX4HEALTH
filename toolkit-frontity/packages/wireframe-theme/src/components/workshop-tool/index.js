import { connect, styled } from "frontity";
import React from "react";
import Question from "./question";
import startup from "../../images/workshopTool/startup3.png";
import book from "../../images/workshopTool/book2.png";

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
    //this.handlerQuestion1State = this.handlerQuestion1State.bind(this);
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
                <h2>Das Workshop-Toolkit</h2> <br></br>
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
              <button
                onClick={() => {
                  this.handleStateChange(1);
                }}
              >
                Ja!
              </button>
              <button
                onClick={() => {
                  this.handleStateChange(2);
                }}
              >
                Direkt zum Tool
              </button>
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
                  <label class="label-title">
                    Titel des Workshops <br />
                    <input
                      name="title"
                      class="input-title"
                      type="text"
                      value={this.state.title}
                      onChange={this.onInputChange}
                    ></input>{" "}
                    <br />
                  </label>

                  <label class="label-location">
                    Ort <br />
                    <input
                      name="location"
                      class="input-location"
                      type="text"
                      value={this.state.location}
                      onChange={this.onInputChange}
                    ></input>{" "}
                    <br />
                  </label>

                  <h3 class="h3-question">Wann findet der Workshop statt?</h3>
                  <label class="label-date">
                    Datum <br />
                    <input
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.onInputChange}
                    ></input>{" "}
                    <br />
                  </label>

                  <label class="label-time">
                    Uhrzeit <br />
                    <input
                      type="time"
                      name="time"
                      value={this.state.time}
                      onChange={this.onInputChange}
                    ></input>{" "}
                    <br />
                  </label>

                  <label class="label-days-count">
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
                      class="backButton"
                      onClick={() => {
                        this.handleStateChange(0);
                      }}
                    >
                      Zurück
                    </button>
                    <button
                      class="nextButton"
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
                      id="goalOption1"
                      onClick={this.handlerQuestion1State0}
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
                      id="goalOption2"
                      onClick={this.handlerQuestion1State1}
                    >
                      <div className="goalPic2"></div>
                      <h2>Produkt-Testen</h2>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </div>
                    <div
                      className="goalOption3"
                      id="goalOption3"
                      onClick={this.handlerQuestion1State2}
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
                    class="backButton"
                    onClick={() => {
                      this.handleQuestionStateChange(0);
                    }}
                  >
                    Zurück
                  </button>
                  <button
                    class="nextButton"
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
              <div className="numberBackground">
                <div className="numberWhitebox">
                  <h1>Anzahl der Teilnehmer</h1>
                  <div className="numberOptionsbox">
                    <div
                      className="numberOption1"
                      id="numberOption1"
                      onClick={this.handlerQuestion1State0}
                    >
                      <div className="numberPic1"></div>
                      <h3>5-10</h3>
                    </div>
                    <div
                      className="numberOption2"
                      id="numberOption2"
                      onClick={this.handlerQuestion1State1}
                    >
                      <div className="numberPic2"></div>
                      <h3>10-15</h3>
                    </div>
                    <div
                      className="numberOption3"
                      id="numberOption3"
                      onClick={this.handlerQuestion1State2}
                    >
                      <div className="numberPic3"></div>
                      <h3>15-25</h3>
                    </div>
                    <div
                      className="numberOption3"
                      id="numberOption3"
                      onClick={this.handlerQuestion1State2}
                    >
                      <div className="numberPic3"></div>
                      <h3> Über 25</h3>
                    </div>
                  </div>
                  <button
                    class="backButton"
                    onClick={() => {
                      this.handleQuestionStateChange(1);
                    }}
                  >
                    Zurück
                  </button>
                  <button
                    class="nextButton"
                    onClick={() => {
                      this.handleQuestionStateChange(3);
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
                      class="backButton"
                      onClick={() => {
                        this.handleQuestionStateChange(2);
                      }}
                    >
                      Zurück
                    </button>
                    <button
                      class="nextButton"
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
      //return (
      // <div>
      //   <Question
      //     question="Was ist das Ziel Ihres Workshops?"
      //     answers={[
      //       "Produktentwicklung",
      //       "Produkt testen",
      //       "Ideensammlung",
      //     ]}
      //     answerHandler={this.handlerQuestion1State.bind(this)}
      //   />
      //   {this.state.question1 != 0 && (
      //     <div>
      //       <Question
      //         question="Was ist die Anzahl der Teilnehmer?"
      //         answers={["5-10", "10-15", "15-25", ">25"]}
      //         answerHandler={this.handlerQuestion2State.bind(this)}
      //       />
      //     </div>
      //   )}
      //   {this.state.question2 != 0 && (
      //     <div>
      //       <Question
      //         question="Soll der Workshop online oder in Präsenz stattfinden?"
      //         answers={["Online", "Präsenz"]}
      //         answerHandler={this.handlerQuestion3State.bind(this)}
      //       />
      //     </div>
      //   )}
      //   {this.state.question3 != 0 && (
      //     <div>
      //       <Question
      //         question="Was ist die Anzahl der Teilnehmer?"
      //         answers={["5-10", "10-15", "15-25", ">25"]}
      //         answerHandler={this.handlerQuestion4State.bind(this)}
      //       />
      //     </div>
      //   )}
      //   {this.state.question4 != 0 && (
      //     <div>
      //       <Question
      //         question="Wie lange soll Ihr Workshop gehen?"
      //         answers={["3-4 Stunden", "6-8 Stunden", "2 Tage"]}
      //         answerHandler={this.handlerFinalQuestion.bind(this)}
      //       />
      //     </div>
      //   )}
      // </div>
      //);
      case 2:
        return (
          <div className="toolBackground">
            <div className="toolWhitebox">
              Herzlich Wilkommen auf dem Planungstool! <br></br>
              <button
                class="backButton"
                onClick={() => {
                  this.handleStateChange(1);
                  this.handleQuestionStateChange(3);
                }}
              >
                Zurück
              </button>
            </div>
          </div>
        );
    }
  }

  /*
  setColor() {
    //alert(this.question1);
    if (this.state.question1 == 0) {
      alert("q1=0");
      document.getElementById("goalOption1").id = "goalOption1Clicked";
      document.getElementsByClassName("goalOption2").id = "goalOption2";
      document.getElementsByClassName("goalOption3").id = "goalOption3";
    }

    if (this.state.question1 == 1) {
      alert("q1=1");
      document.getElementById("goalOption2").id = "goalOption2Clicked";
      document.getElementsByClassName("goalOption1").id = "goalOption1";
      document.getElementsByClassName("goalOption3").id = "goalOption3";
    }

    if (this.state.question1 == 2) {
      alert("q1=2");
      document.getElementById("goalOption3").id = "goalOption3Clicked";
      document.getElementsByClassName("goalOption1").id = "goalOption1";
      document.getElementsByClassName("goalOption2").id = "goalOption2";
    }
  }
  */

  handleStateChange(number) {
    this.setState({ currentScreen: number });
  }

  handleQuestionStateChange(number) {
    this.setState({ currentQuestionScreen: number });
  }

  /******* Fragenhandler *******/
  handlerQuestion1State0() {
    document.getElementById("goalOption1").id = "goalOption1Clicked";
    document.getElementsById("goalOption2Clicked").id = "goalOption2";
    document.getElementsById("goalOption3Clicked").id = "goalOption3";
    this.setState({ question1: 0 });
    //this.setColor();
  }
  handlerQuestion1State1() {
    document.getElementById("goalOption2").id = "goalOption2Clicked";
    document.getElementById("goalOption1Clicked").id = "goalOption1";
    document.getElementById("goalOption3Clicked").id = "goalOption3";
    this.setState({ question1: 1 });
    //this.setColor();
  }
  handlerQuestion1State2() {
    document.getElementById("goalOption3").id = "goalOption3Clicked";
    document.getElementById("goalOption1Clicked").id = "goalOption1";
    document.getElementsById("goalOption2Clicked").id = "goalOption2";
    this.setState({ question1: 2 });
    //this.setColor();
  }

  //
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
    return <WorkshopContainer>{this.renderSwitch()}</WorkshopContainer>;
  }
}
export default connect(WorkshopTool);

const WorkshopContainer = styled.div`
  div {
    items-align: center;
    text-align: center;
  }

  button {
    width: 160px;
    padding: 20px;
    margin: 20px;
    height: 50px;
    opacity: 1 !important;
    //margin-bottom: 150px !important;
  }

  label {
    color: #555555;
  }

  //beginning

  .beginningContainer {
  }

  .backgroundPicScreen0 {
    width: 100%;
    height: 70vh;
    position: relative;
  }

  .backgroundPicScreen0 img {
    width: 100vw;
  }

  .backgroundScreen0 {
    background-color: whitesmoke;
    height: 150px;
    position: relative;
  }

  .beginningWhitebox {
    background-color: whitesmoke;
    padding: 30px;
    padding-top: 60px;
    width: 1380px;
    height: 550px;
    position: absolute;
    margin: auto;
    top: 25vh;
    left: 13.5vw;
  }

  .beginningWhiteboxText {
    width: 60%;
    margin: auto;
    border-bottom-width: 2.5px;
    border-bottom-style: solid;
    border-color: lightblue;
    padding-bottom: 45px;
    margin-bottom: 45px;
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
    background-color: whitesmoke;
    display: grid;
    grid-template-columns: 30% 10% 20% 10% 30%;
    grid-template-rows: 30% 20% 30% 20%;
    grid-template-areas:
      "title title . location location"
      "h3-question h3-question h3-question h3-question h3-question"
      "date xtime xtime xtime days-count"
      "buttonBox buttonBox buttonBox buttonBox buttonBox";
    padding: 120px;
    width: 50%;
    opacity: 0.7;
    top: 15vh;
    left: 23vw;
    position: absolute;
  }

  .buttonBox {
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
  }

  .nextButton {
    grid-area: nextButton;
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
    background-color: whitesmoke;
    width: 50%;
    height: 62vh;
    opacity: 0.7;
    top: 15vh;
    left: 23vw;
    position: absolute;
  }

  .goalOptionsbox {
    display: flex;
    gap: 3em;
    flex-direction: row;
    margin: 3em;
    margin-bottom: 20px;
  }

  #goalOption1 {
    padding: 20px;
    border: black 2px solid;
  }

  #goalOption1Clicked {
    padding: 20px;
    border: purple 4px solid;
    background-color: purple;
    color: white;
  }

  #goalOption2 {
    padding: 20px;
    border: black 2px solid;
  }

  #goalOption2Clicked {
    padding: 20px;
    border: purple 4px solid;
    background-color: purple;
    color: white;
  }

  #goalOption3 {
    padding: 20px;
    border: black 2px solid;
  }

  #goalOption3Clicked {
    padding: 20px;
    border: purple 4px solid;
    background-color: purple;
    color: white;
  }

  //number
  .numberBackground {
    //background-color: grey;
    height: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .numberBackground img {
    width: 100vw;
  }

  .numberWhitebox {
    background-color: whitesmoke;
    opacity: 0.7;
    height: 700px;
    width: 950px;
    padding-top: 30px;
    margin: auto;
    margin-top: 100px;
  }

  .numberOptionsbox {
    display: flex;
    gap: 3em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px;
  }

  #numberOption1,
  #numberOption2,
  #numberOption3,
  #numberOption4 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: black 2px solid;
    width: 130px;
    height: 70px;
  }

  //Planungstool
  .toolBackground {
    //background-color: grey;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toolWhitebox {
    background-color: whitesmoke;
    opacity: 0.7;
    width: 950px;
    padding-top: 30px;
    margin: auto;
  }
`;
