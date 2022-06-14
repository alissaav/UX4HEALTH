import { connect, styled } from "frontity";
import React from "react";
import Question from "./question";

class WorkshopTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 0,
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handlerQuestion1State = this.handlerQuestion1State.bind(this);
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
        return (
          <div>
            <Question
              question="Was ist das Ziel Ihres Workshops?"
              answers={[
                "Produktentwicklung",
                "Produkt testen",
                "Ideensammlung",
              ]}
              answerHandler={this.handlerQuestion1State.bind(this)}
            />
            {this.state.question1 != 0 && (
              <div>
                <Question
                  question="Was ist die Anzahl der Teilnehmer?"
                  answers={["5-10", "10-15", "15-25", ">25"]}
                  answerHandler={this.handlerQuestion2State.bind(this)}
                />
              </div>
            )}
            {this.state.question2 != 0 && (
              <div>
                <Question
                  question="Soll der Workshop online oder in Präsenz stattfinden?"
                  answers={["Online", "Präsenz"]}
                  answerHandler={this.handlerQuestion3State.bind(this)}
                />
              </div>
            )}
            {this.state.question3 != 0 && (
              <div>
                <Question
                  question="Was ist die Anzahl der Teilnehmer?"
                  answers={["5-10", "10-15", "15-25", ">25"]}
                  answerHandler={this.handlerQuestion4State.bind(this)}
                />
              </div>
            )}
            {this.state.question4 != 0 && (
              <div>
                <Question
                  question="Wie lange soll Ihr Workshop gehen?"
                  answers={["3-4 Stunden", "6-8 Stunden", "2 Tage"]}
                  answerHandler={this.handlerFinalQuestion.bind(this)}
                />
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="pt">Herzlich Wilkommen auf dem Planungstool!</div>
        );
    }
  }

  handleStateChange(number) {
    this.setState({ currentScreen: number });
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

  render() {
    return <WorkshopContainer>{this.renderSwitch()}</WorkshopContainer>;
  }
}
export default connect(WorkshopTool);

const WorkshopContainer = styled.div`
  margin-top: 140px;

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
`;
