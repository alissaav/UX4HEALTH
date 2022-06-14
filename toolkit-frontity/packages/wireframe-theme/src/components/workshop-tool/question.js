import React from "react";
import { connect, styled } from "frontity";

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <h2> {this.props.question} </h2>
        {
          //this.props.answerHandler(this.props.answers[1])
          //this.props.answers[0];
        }
        {this.props.answers.map((item, i) => {
          return (
            <button
              key={i + 1}
              onClick={() => {
                this.handleClick(i + 1);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }

  handleClick(index) {
    this.props.answerHandler(index);
  }
}

export default connect(Question);
