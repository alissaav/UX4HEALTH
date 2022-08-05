import React, { useState } from "react";
import { connect, styled } from "frontity";
import WorkshopElement from "./element";
import { COLORS } from "./colors";
import { Posts } from "../posts.js";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./DragDrop";

    function PlanningTool(props) {
    const posts = props.state.source["post"];
    let parsedPosts = JSON.parse(JSON.stringify(posts));
    console.log(parsedPosts);
    let postArray = Posts(parsedPosts);
    console.log(postArray);

    return (
        <DndProvider backend={HTML5Backend}>
        <DragDrop props={props} methoden={postArray}></DragDrop>
        </DndProvider>
    );
    }

export default connect(PlanningTool);
