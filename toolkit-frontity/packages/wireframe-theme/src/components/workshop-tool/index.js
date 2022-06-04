import { connect, styled } from "frontity";
import React from "react";
import Question from "./question";

class WorkshopTool extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentScreen: 0,
            question1: 0,
            question2: 0,
            question3: 0,
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handlerQuestion1State = this.handlerQuestion1State.bind(this);
    };

    renderSwitch() {
        switch(this.state.currentScreen) {
            case 0: 
                return <div>    
                    <h2>Brauchst du Unterstützung dabei, deinen Workshop zu planen?</h2> 
                    <button onClick={() => {this.handleStateChange(1)}} >Ja!</button>
                    <button onClick={() => {this.handleStateChange(2)}} >Dierekt zum Planungs-Tool</button>
                </div>;
            case 1: 
                return <div>
                            <Question question="Was ist das Ziel Ihres Workshops?" answers={["Produktentwicklung", "Produkt testen", "Ideensammlung"]} answerHandler={this.handlerQuestion1State}/>
                            {   
                                
                                this.state.question1 != 0 && <div> Hi</div>
                            }
                        </div>;
            case 2: 
                return <div>
                    Goodbye!
                </div>;
        }
    }

    handleStateChange(number){
        this.setState({currentScreen: number});
    }

    handlerQuestion1State(value) {
        this.setState({question1: value});
    }

    render() {
        return (
            <WorkshopContainer>
                {
                    this.renderSwitch()
                }
            </WorkshopContainer>
        
        )
        
    }


}
export default connect(WorkshopTool);

const WorkshopContainer = styled.div `
    margin-top: 100px;

    button {
        padding: 20px;
    }
`