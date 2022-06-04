import React from "react";
import { connect, styled } from "frontity";


class Question extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    

    render() {
        return (
            <div>
                <h2> {this.props.question} </h2>
                {
                    this.props.answers.map(function(item, i){
                            return <button key={i} onClick={() => {this.handleClick(i)}}>{item}</button>
                        })
                }
            </div>
        );
    }

    handleClick(index) {
        this.props.answerHandler(index);
    }
}

export default connect(Question);