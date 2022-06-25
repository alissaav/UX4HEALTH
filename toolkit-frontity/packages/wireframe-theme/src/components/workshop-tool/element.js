import React from "react";
import { connect, styled } from "frontity";

class WorkshopElement extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            isInPlan: this.props.isInPlan,
            duration: this.props.duration,
            notes: "",
        };
    }
    

    render() {
        if(this.state.isInPlan == false){
            return (
                <ElementContainer style={{"backgroundColor": this.props.color}}>
                    {this.props.title}
                </ElementContainer>
            );
        } else {
            return (
                <ElementInPlanContainer style={{"backgroundColor": this.props.color, "height": (this.state.duration * 2) + "px"}}>
                    {this.props.duration} Minuten
                    <h4>{this.props.title} </h4>
                    <textarea></textarea>
                </ElementInPlanContainer>
            );
        }
    }

}
export default connect(WorkshopElement);

const ElementContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    color: #333333
`

const ElementInPlanContainer = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    color: #333333;
    justify-content: space-evenly;

`

const DurationContainer = styled.div`
    width: 20%;
`
const TitleContainer = styled.div`
    width: 30%;
`
const NotesContainer = styled.div`
    width: 50%;
`

