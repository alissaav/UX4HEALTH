import { connect, styled } from "frontity";
import React from "react";
import Question from "./question";
import WorkshopProgressBar from "./progress";
import PlanningTool from "./planning-tool";

class WorkshopTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 0,
      currentQuestionScreen: 0,
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
      title: "",
      location: "",
      date: null,
      time: null,
      daysCount: 1,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleQuestionStateChange = this.handleQuestionStateChange.bind(this);
    this.handlerQuestion1State = this.handlerQuestion1State.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  renderSwitch() {
    switch (this.state.currentScreen) {
      case 0:
        return (
          <div>
            <h2>Brauchst du Unterstützung dabei, deinen Workshop zu planen?</h2>
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
              Direkt zum Planungs-Tool
            </button>
          </div>
        );
      case 1:
        switch (this.state.currentQuestionScreen) {
          case 0: // Formular mit Workshop-Titel, Datum etc.
            return (
              <div id="grid-container">
                <label className="label-title">
                  Titel des Workshops <br/>
                  <input name="title" className="input-title" type="text" value={this.state.title} onChange={this.onInputChange}></input> <br/>
                </label>

                <label className="label-location">
                  Ort <br/>
                  <input name="location" className="input-location" type="text" value={this.state.location} onChange={this.onInputChange}></input> <br/>
                </label>
                  
                <h3 className="h3-question">Wann findet der Workshop statt?</h3>
                <label className="label-date">
                  Datum <br/>
                  <input type="date" name="date" value={this.state.date} onChange={this.onInputChange}></input> <br/>
                </label>

                <label className="label-time">
                  Uhrzeit <br/>
                  <input type="time" name="time" value={this.state.time} onChange={this.onInputChange}></input> <br/>
                </label>

                <label className="label-days-count">
                  Anzahl der Tage <br/>
                  <select name="daysCount" value={this.state.daysCount} onChange={this.onInputChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select> <br/>
                </label>
              
                <button className="nextButton" onClick={() => {this.handleQuestionStateChange(1)}}>Weiter</button>
              </div>
            );
          case 1:
            return(
              <>
                test
              </>
            )
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
          <PlanningTool></PlanningTool>
        );
    }
  }

  handleStateChange(number) {
    this.setState({ currentScreen: number });
  }

  handleQuestionStateChange(number){
    this.setState({ currentQuestionScreen: number })
  }

  handlerQuestion1State(value) {
    this.setState({ question1: value });
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
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
    <WorkshopContainer>
      {this.state.currentScreen == 1 ? <WorkshopProgressBar currentQuestion={this.state.currentQuestionScreen} numberOfQuestions={5}/> : ""}
      {this.renderSwitch()} 
    </WorkshopContainer>
    );
  }
}
export default connect(WorkshopTool);

const WorkshopContainer = styled.div`
  margin-top:120px;

  div {
    items-align: center;
    text-align: center;
  }

  .pt {
    margin-bottom: 412px;
  }

  button {
    width: 160px;
    padding: 20px;
    margin: 20px;
    margin-bottom: 150px !important;
  }
  label {
    color: #555555;
  }
  #grid-container {
    display: grid;
    grid-template-columns: 30% 10% 20% 10% 30%;
    grid-template-rows: 30% 20% 30% 20%;
    grid-template-areas: "title title . location location"
                         "h3-question h3-question h3-question h3-question h3-question"
                         "date xtime xtime xtime days-count"
                         "button button button button button";
    padding:15%;
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
  .input-title, .input-location {
    width: 200px;
  }
  .nextButton {
    grid-area: button;
  }
`;
