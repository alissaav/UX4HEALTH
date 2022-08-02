import { connect, styled } from "frontity";
import React from "react";

class WorkshopProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: this.props.currentQuestion,
        }
    }

    componentDidUpdate() {
        if(this.state.currentQuestion != this.props.currentQuestion) {
            this.setState({currentQuestion: this.props.currentQuestion})
        }
    }

    render () {
        return(
            <ProgressBarContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="360" height="50" viewBox="0 0 500 50">
                    <line id="Linie_1-2" data-name="Linie 1-2" x1="50" y1="25" x2="150" y2="25" stroke={this.state.currentQuestion >= 1 ? "#444" : "#ccc"} strokeWidth="6"/>
                    <line id="Linie_2-3" data-name="Linie 2-3" x1="150" y1="25" x2="250" y2="25" stroke={this.state.currentQuestion >= 2 ? "#444" : "#ccc"} strokeWidth="6"/>
                    <line id="Linie_3-4" data-name="Linie 3-4" x1="250" y1="25" x2="350" y2="25" stroke={this.state.currentQuestion >= 3 ? "#444" : "#ccc"} strokeWidth="6"/>
                    <line id="Linie_4-5" data-name="Linie 4-5" x1="350" y1="25" x2="450" y2="25" stroke={this.state.currentQuestion >= 4 ? "#444" : "#ccc"} strokeWidth="6"/>
                    
                    <circle id="circle_1" data-name="circle_1" cx="50" cy="25" r="15" fill={this.state.currentQuestion >= 0 ? "#444" : "#ccc"} onclick="console.log(&quot;Hello&quot;)"/>
                    
                    <circle id="circle_2" data-name="circle_1" cx="150" cy="25" r="15" fill={this.state.currentQuestion >= 1 ? "#444" : "#ccc"}/>
                    <circle id="circle_3" data-name="circle_1" cx="250" cy="25" r="15" fill={this.state.currentQuestion >= 2 ? "#444" : "#ccc"}/>
                    <circle id="circle_4" data-name="circle_1" cx="350" cy="25" r="15" fill={this.state.currentQuestion >= 3 ? "#444" : "#ccc"}/>
                    <circle id="circle_5" data-name="circle_1" cx="450" cy="25" r="15" fill={this.state.currentQuestion >= 4 ? "#444" : "#ccc"}/>
                </svg>
            </ProgressBarContainer>
        )
    }
}
export default connect(WorkshopProgressBar);

const ProgressBarContainer = styled.div`
    svg {
        pointer-events: none;
    }

    circle {
        pointer-events: auto;
    }
`