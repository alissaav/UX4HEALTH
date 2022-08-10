import React from "react";
import { connect, styled } from "frontity";
import PlanningTool from "./planning-tool";

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      date: null,
      time: null,
      daysCount: 1,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderSwitch() {
    console.log("ERSTES datum:" + this.state.date);
    console.log("ERSTES zeit" + this.state.time);

    switch (this.props.displayType) {
      case "startQuestions":
        return (
          <StartQuestion>
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

              <h3 className="h3-question">Wann findet der Workshop statt?</h3>
              <label className="label-date">
                Datum <br />
                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.onInputChange}
                ></input>
                <br />
              </label>

              <label className="label-time">
                Uhrzeit <br />
                <input
                  type="time"
                  name="time"
                  value={this.state.time}
                  onChange={this.onInputChange}
                ></input>
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
                    this.props.handleStateCh(0);
                  }}
                >
                  Zurück
                </button>
                <button
                  className="nextButton"
                  onClick={() => {
                    this.props.handleQuestionStateCh(1);
                  }}
                >
                  Weiter
                </button>
              </div>
            </div>
          </StartQuestion>
        );

      case "planning-tool":
        console.log("ZWEITES datum:" + this.state.date);
        console.log("ZWEITES zeit" + this.state.time);
        return (
          <PlanningTool
            goal={this.props.question1}
            time={this.state.time}
            date={this.state.date}
          ></PlanningTool>
        );
    }
  }

  render() {
    return <>{this.renderSwitch()}</>;
  }
}

export default connect(Inputs);

const StartQuestion = styled.div`
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

  .input-title,
  .input-location {
    width: 200px;
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
`;
