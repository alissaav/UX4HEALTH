import React from "react";
import { connect, styled } from "frontity";
import WorkshopElement from "./element";
import { COLORS } from "./colors";
import { Posts } from "../posts.js";
import DragElement from "./drag-element"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import DropWrapper from "./drop-wrapper";


class PlanningTool extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: []
        }
        
    }
    onDrop(item, monitor) {
        const post = posts[item.id]; 
        this.posts.filter(i => i.id !== post);
        this.posts.concat({ ...item, });
    } 

    onMove(dragIndex, hoverIndex){

    }

    render() {
        const postsData = this.props.state.source["post"];
        let parsedPosts = JSON.parse(JSON.stringify(postsData));
        console.log(parsedPosts);
        this.posts = Posts(parsedPosts);
        console.log(posts);

        return(
            <PlanningToolContainer>
                <DndProvider backend={HTML5Backend}>
                <ElementsContainer>
                    <DropWrapper onDrop isPlan={false}>
                        <h3>Elemente</h3>
                        { 

                            posts.map((post) =>
                            post.isInPlan? "" : <DragElement id={post.id} title={post.title} duration={post.duration} isInPlan={post.isInPlan} color={COLORS.blue}/> 
                            )

                        } 
                    </DropWrapper>
                </ElementsContainer>


                <PlanContainer>
                { 

                posts.map((post) =>
                post.isInPlan? <DragElement id={post.id} title={post.title} duration={post.duration} isInPlan={post.isInPlan} color={COLORS.blue}/> : ""
                )

                } 
                </PlanContainer>


                <TipContainer>
                <h3>Tipps</h3>
                </TipContainer>

                </DndProvider>

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
    padding: 4px;
`

const TipContainer = styled.div`
    display: flex;
    width: 20%;
    background-color: whitesmoke;
    justify-content: center;

    padding: 8px;
    box-shadow: 0 0 1em grey;
`
