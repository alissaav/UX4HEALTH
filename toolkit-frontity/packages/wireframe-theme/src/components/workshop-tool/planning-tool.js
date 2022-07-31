import React from "react";
import { connect, styled } from "frontity";
import WorkshopElement from "./element";
import { COLORS } from "./colors";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

class PlanningTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notInPlan: [
        <WorkshopElement
          index={1}
          title="Pause"
          color={COLORS.blue}
          isInPlan={false}
          duration={45}
        ></WorkshopElement>,
        <WorkshopElement
          index={2}
          title="Icebreaker"
          color={COLORS.pink}
          isInPlan={false}
          duration={15}
        ></WorkshopElement>,
        <WorkshopElement
          index={3}
          title="Test"
          color={COLORS.yellow}
          isInPlan={false}
          duration={90}
        ></WorkshopElement>,
      ],
      inPlan: [],
    };
  }

  render() {
    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };

    const onDragEnd = (result) => {
      const { source, destination } = result;

      if (destination == null) {
        return;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      const items = Array.from(this.state.notInPlan);

      console.log(items);

      console.log(result.source.index);
      const [reorderedItem] = items.splice(result.source.index, 1);

      console.log(reorderedItem);
      console.log(result.destination.index);
      items.splice(result.destination.index, 0, reorderedItem);

      //Entfernen der undefined Stellen im Array
      for (var i = items.length - 1; i >= 0; i--) {
        if (items[i] == undefined) {
          items.splice(i, 1);
        }
      }

      console.log(items);

      this.setState({ notInPlan: items });
    };

    const renderNotInPlan = this.state.notInPlan.map((item, index) => (
      <div key={index}>{item}</div>
    ));

    //{this.state.currentScreen == 1 ? <WorkshopProgressBar currentQuestion={this.state.currentQuestionScreen} numberOfQuestions={5}/> : ""}

    const renderInPlan = this.state.inPlan.map((item, index) => (
      <div key={index}>{item}</div>
    ));

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <PlanningToolContainer>
          <Droppable droppableId="elementsNotInPlan">
            {(provided) => (
              <ElementsContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>Elemente</h3>

                {renderNotInPlan}

                {provided.placeholder}
              </ElementsContainer>
            )}
          </Droppable>
          {/**** Im Plan: ****/}
          <Droppable droppableId="elementsInPlan">
            {(provided) => (
              <PlanContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {renderInPlan}

                {provided.placeholder}
              </PlanContainer>
            )}
          </Droppable>

          <TipContainer>
            <h3>Tipps</h3>
          </TipContainer>
        </PlanningToolContainer>
      </DragDropContext>
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
