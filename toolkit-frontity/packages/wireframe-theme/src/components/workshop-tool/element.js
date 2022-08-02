import React from "react";
import { connect, styled } from "frontity";
import { Draggable } from "react-beautiful-dnd";

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
    if (this.state.isInPlan == false) {
      return (
        <Draggable
          key={this.props.index}
          draggableId={this.props.title}
          index={this.props.index}
        >
          {(provided) => (
            <ElementContainer
              style={{ backgroundColor: this.props.color.main }}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {this.props.title}
            </ElementContainer>
          )}
        </Draggable>
      );
    } else {
      return (
        <Draggable
          key={this.props.index}
          draggableId={this.props.title}
          index={this.props.index}
        >
          {(provided) => (
            <ElementInPlanContainer
              style={{
                backgroundColor: this.props.color.light,
                height: this.state.duration * 3 + "px",
                "border-color": this.props.color.main,
              }}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <ColorAccent
                style={{
                  backgroundColor: this.props.color.dark,
                  boxShadow:
                    "1px 1px " +
                    this.props.color.dark +
                    ", -1px -1px " +
                    this.props.color.dark +
                    ", 1px -1px " +
                    this.props.color.dark +
                    ", -1px 1px " +
                    this.props.color.dark,
                }}
              ></ColorAccent>
              <TimeDiv style={{ "border-color": this.props.color.main }}>
                <p>uhrzeit</p>
                <p style={{ color: this.props.color.dark }}>
                  {this.props.duration} Minuten
                </p>
              </TimeDiv>
              <h4 style={{ color: this.props.color.dark }}>
                {this.props.title}{" "}
              </h4>
              <NotesDiv>
                Notizen:
                <textarea
                  style={{ height: this.state.duration * 3 - 10 + "px" }}
                ></textarea>
              </NotesDiv>
            </ElementInPlanContainer>
          )}
          ;
        </Draggable>
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
  color: #333333;
`;

const ElementInPlanContainer = styled.div`
  display: grid;
  grid-template-columns: 12px 1fr 1.5fr 1.5fr;
  color: #666;
  margin-bottom: 4px;
  column-gap: 2px;
  border-style: dashed;
  border-width: 1px;
  min-width: 420px;

  h4 {
    margin: 4px;
  }
`;

const ColorAccent = styled.div`
  background: grey;
  height: 100%;
`;
const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-start: 2;
  font-size: 10px;
  border-style: none dashed none none;
  border-width: 1px;
  height: 100%;

  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`;
const NotesDiv = styled.div`
  display: flex;
  padding: 4px;
  gap: 4px;
  font-size: 10px;
  grid-column-start: 4;

  textarea {
    padding: 1px;
  }
`;