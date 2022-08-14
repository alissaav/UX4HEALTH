import React, { useState, useEffect } from "react";
import Item from "./item";
import ColumnWrapper from "./column-wrapper";
import Col from "./column";
import { statuses } from "./status";
import { connect, styled } from "frontity";
import { COLORS } from "./colors";
import { Posts } from "../posts.js";
import moment from "Moment";

const NewPlanningTool = props => {

    const rawPosts = props.state.source["post"];
    let parsedPosts = JSON.parse(JSON.stringify(rawPosts));
    let postArray = Posts(parsedPosts);
    const [posts, setPosts] = useState(postArray);
    useEffect(() => {
        console.log(posts);
    })
    const [lastItemId, setLastItemId] = useState(-1);
    const [initial, setInitial] = useState(true);

    const [changingOrder, setChangingOrder] = useState(false);

    const [data, setData] = useState({
        currentDate: props.date,
        currentTime: props.time,
        currentTitle: props.title,
        currentLocation: props.location,
        currentDaysCount: props.daysCount,
    });
    var time = moment(
        data.currentDate + " " + data.currentTime,
        "YYYY-MM-DD HH:mm"
    );
    var timeAbbild = moment(
        data.currentDate + " " + data.currentTime,
        "YYYY-MM-DD HH:mm"
    );

    if (initial) {
        //Methoden des Ziels hinzufügen
        if (props.goal != 10) {
        setInitial(false);
        if (props.goal == 0) {
            addMethodToBoard(0);
            addMethodToBoard(7);
            addMethodToBoard(13);
        } else if (props.goal == 1) {
            addMethodToBoard(0);
            addMethodToBoard(7);
            addMethodToBoard(13);
            addMethodToBoard(5);
            addMethodToBoard(9);
        } else {
            addMethodToBoard(0);
            addMethodToBoard(12);
            addMethodToBoard(7);
            addMethodToBoard(5);
            addMethodToBoard(9);
            addMethodToBoard(6);
            addMethodToBoard(1);
        }
        }
    }
    

    var displayContainer = "";
    if (timeAbbild.isValid()) {
        displayContainer = (
        <div className="displayContainer">
            <div className="stunde1viertel1">{timeAbbild.format("HH:mm")}</div>
            <div className="stunde1viertel2">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde1viertel3">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde1viertel4">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>

            <div className="stunde2viertel1">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde2viertel2">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde2viertel3">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde2viertel4">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>

            <div className="stunde3viertel1">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde3viertel2">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde3viertel3">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde3viertel4">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>

            <div className="stunde4viertel1">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde4viertel2">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde4viertel3">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde4viertel4">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>

            <div className="stunde5viertel1">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde5viertel2">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde5viertel3">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde5viertel4">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>

            <div className="stunde6viertel1">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde6viertel2">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde6viertel3">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde6viertel4">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>

            <div className="stunde7viertel1">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde7viertel2">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde7viertel3">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde7viertel4">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>

            <div className="stunde8viertel1">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde8viertel2">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde8viertel3">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
            <div className="stunde8viertel4">
            {timeAbbild.add(15, "m").format("HH:mm")}
            </div>
        </div>
        );
    }

    const onDrop = (item, monitor, status) => {
        // console.log(posts);
        // if(!changingOrder){
            const newItems = posts
            .filter(i => i.id !== item.id);
            // console.log(newItems);
            const newItem = item;
            newItem.status = status;
            setPosts(newItems.concat(newItem));
            
            // console.log(newItems);
            // console.log(posts);
        // }
        // setChangingOrder(false);
        
        
    };

    const moveItem = (dragIndex, hoverIndex) => {
        setChangingOrder(true);
        const item = posts[dragIndex];
        item.index = hoverIndex;
        console.log(posts);

        const newItems = posts.filter((i, idx) => idx !== dragIndex);
        console.log(newItems);
        newItems.splice(hoverIndex, 0, item);
        console.log(newItems);
        setPosts([...newItems]);
        console.log(posts);
    };
        
        function updateLastItem(key) {
            if (key.isInPlan == true) {
            setLastItemId(key.id);
            //console.log(key.id);
            } else {
            setLastItemId(key);
            //console.log(key);
            }
        }

    return (

            <PlanningToolContainer>
                <ElementsContainer key="not-in-plan" className="col-wrapper">
                    <h3>Elemente</h3>
                    <ColumnWrapper onDrop={onDrop} status="not-in-plan" >
                        <Col>
                            {/* <WorkshopElement
                                title="Pause"
                                color={COLORS.green}
                                isInPlan={false}
                                duration="20"
                                id={99}
                            ></WorkshopElement>
                            <WorkshopElement
                                title="Begrüßung"
                                color={COLORS.green}
                                isInPlan={false}
                                duration="15"
                                id={100}
                            ></WorkshopElement>
                            <WorkshopElement
                                title="Ice-Breaker"
                                color={COLORS.green}
                                isInPlan={false}
                                duration="10"
                                id={101}
                            ></WorkshopElement>
                            <WorkshopElement
                                title="Verabschiedung"
                                color={COLORS.green}
                                isInPlan={false}
                                duration="15"
                                id={102}
                            ></WorkshopElement> */}
                            {
                                posts.map( (post, key) => {
                                    {/* console.log(key);
                                    console.log(posts); */}
                                if (post.status == "not-in-plan") {
                                    return (
                                    <div
                                    onMouseDown={() => {
                                        updateLastItem(key);
                                    }}
                                    >
                                            <Item
                                                key={key}
                                                item={post}
                                                index={key}
                                                moveItem={moveItem}
                                            ></Item>
                                        </div>
                                    );
                                }
                            })}
                        </Col>
                    </ColumnWrapper>

                    
                </ElementsContainer>

            <PlanContainer key="in-plan" className="col-wrapper">
                <div className="containerTime" id="containerTime">
                    {displayContainer}
                </div>
                    <ColumnWrapper onDrop={onDrop} status="in-plan" >
                    <Col>
                        {posts.map( (post, key) => {
                            if (post.status == "in-plan") {
                                return (
                                    
                                    <div onMouseDown={() => {
                                        updateLastItem(key);
                                    }}
                                    >
                                        <Item
                                            key={post.id}
                                            item={post}
                                            index={key}
                                            moveItem={moveItem}
                                        ></Item>
                                    </div>
                                );
                            }
                        })}
                    </Col>
                </ColumnWrapper>
                
                {/* <div className="containerPlan">

                    {board.map(function (key) {
                    return (
                        <div
                        onMouseDown={() => {
                            updateLastItem(key);
                        }}
                        >
                        <WorkshopElement
                            title={key.title}
                            color={key.color}
                            isInPlan={key.isInPlan}
                            duration={key.duration}
                            id={key}
                        ></WorkshopElement>
                        </div>
                    );
                    })} 
                </div> */}
            </PlanContainer>
            <TipContainer>
            <h3>Tipps</h3>
            <br />
            <div
                dangerouslySetInnerHTML={{
                __html:
                    posts[lastItemId] === undefined
                    ? "Bitte wählen Sie eine Methode aus."
                    : posts[lastItemId].tip,
                }}
            />
            </TipContainer>
        </PlanningToolContainer>
        
    );
}

export default connect(NewPlanningTool);


    const PlanningToolContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    `;

    const ElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 20%;
    justify-content: center;
    background-color: whitesmoke;
    padding: 8px;
    box-shadow: 0 0 1em grey;
    `;
    const PlanContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 48%;

    .containerTime {
        width: 7%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 !important;
        padding: 0 !important;
        height: 965px;
        color: lightgrey;
    }

    .containerTime div {
        width: 90%;
        height: 30px;
    }

    .displayContainer div:nth-child(odd) {
        color: darkgrey;
    }

    .containerPlan {
        display: flex;
        flex-direction: column;
        width: 93%;
        background-color: whitesmoke;
        padding: 4px;
    }
    `;

    const TipContainer = styled.div`
    width: 20%;
    background-color: whitesmoke;
    justify-content: center;
    padding: 8px;
    box-shadow: 0 0 1em grey;
    text-align: center;

    .tippHinweis {
        margin-top: 60vh;
        margin-bottom: 4vh;
    }
    `;