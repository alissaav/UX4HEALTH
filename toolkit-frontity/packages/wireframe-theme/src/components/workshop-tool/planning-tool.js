import React from "react";
import { connect, styled } from "frontity";
import WorkshopElement from "./element";
import { COLORS } from "./colors";
import { Posts } from "../posts.js";

class PlanningTool extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        const posts = this.props.state.source["post"];
        let myTarget = JSON.parse(JSON.stringify(posts));
        console.log(myTarget);

        return(
            <PlanningToolContainer>
                <ElementsContainer>
                    <h3>Elemente</h3>
                    { 
                        Object.keys(myTarget).map(function(key, index) {
                            return (
                                <WorkshopElement title={myTarget[key].title.rendered} color={COLORS.blue} isInPlan={false} duration={30}></WorkshopElement>
                            )
                        })
                    } 
                    <WorkshopElement title="Pause" color={COLORS.green} isInPlan={false} duration={45}></WorkshopElement>
                    <WorkshopElement title="Icebreaker" color={COLORS.pink} isInPlan={false} duration={15}></WorkshopElement>
                </ElementsContainer>
                <PlanContainer>
                    <WorkshopElement title="Icebreaker" color={COLORS.pink} isInPlan={true} duration={15}></WorkshopElement>
                    <WorkshopElement title="Pause" color={COLORS.green} isInPlan={true} duration={45}></WorkshopElement>
                </PlanContainer>
                <TipContainer>
                <h3>Tipps</h3>
                <p>{this.props.state.source["post"][34].description}</p>
                </TipContainer>
            </PlanningToolContainer>
        );
    }
}
export default connect(PlanningTool);

const PlanningToolContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50vh;
`;

const ElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 20%;
  justify-content: center;
  background-color: whitesmoke;
  padding: 8px;
  box-shadow: 0 0 1em grey;
`;
const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: red;
  padding: 4px;
`;

const TipContainer = styled.div`
  display: flex;
  width: 20%;
  background-color: whitesmoke;
  justify-content: center;

  padding: 8px;
  box-shadow: 0 0 1em grey;
`;
