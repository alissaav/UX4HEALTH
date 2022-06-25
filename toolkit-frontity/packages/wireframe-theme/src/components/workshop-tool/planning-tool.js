import React from "react";
import { connect, styled } from "frontity";
import WorkshopElement from "./element";

class PlanningTool extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <PlanningToolContainer>
                <ElementsContainer>
                    <h3>Elemente</h3>
                    <WorkshopElement title="Pause" color="lightgreen" isInPlan={false} duration={45}></WorkshopElement>
                    <WorkshopElement title="Icebreaker" color="lightblue" isInPlan={false} duration={15}></WorkshopElement>
                </ElementsContainer>
                <PlanContainer>
                    <WorkshopElement title="Icebreaker" color="lightblue" isInPlan={true} duration={15}></WorkshopElement>
                    <WorkshopElement title="Pause" color="lightgreen" isInPlan={true} duration={45}></WorkshopElement>
                </PlanContainer>
                <TipContainer>
                bye
                </TipContainer>
            </PlanningToolContainer>
        );
    }
}
export default connect(PlanningTool);

const PlanningToolContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    `

const ElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 20%;
    justify-content: center;
    background-color: whitesmoke;
    padding: 8px;
    box-shadow: 0 0 1em grey;
`
const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    background-color: whitesmoke;
`

const TipContainer = styled.div`
    display: flex;
    width: 20%;
    background-color: whitesmoke;
`
