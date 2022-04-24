
import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "./featured-media";

//Kachelansicht in der Methodenübersicht
const Method = ({ state, post }) => {
    if (!post) return null;
    const data = state.source.get(state.router.link);

    let tag = "";
    post.tags.forEach(element => {
        tag += "#" + state.source.tag[element].name + "   ";
    });

    return (
        <Item> 
        <Link link={post.link} className="container">


            {/* Kategorie Phase */}
            <div className={state.source.category[post.categories].name.toLowerCase()} >
                    <p>{state.source.category[post.categories].name}</p>
            </div>

            <FeaturedMedia id={post.featured_media} />
        
            <div className="text_information">
                {/* Titel der Methode */}
                <h5>{post.title.rendered}</h5>

                {/* Schlagwörter */}
                <h6 className="tags">{tag}</h6>

                {/* kurze Einleitung */}
                <div dangerouslySetInnerHTML={{ __html:post.excerpt.rendered}} className="introduction"/>
            </div>

        </Link>
        </Item>   
    )
}

const Item = styled.div`
max-width: 50%;
flex: 50%;
padding: 10px;

    img {
        height: 100px;
        width: 100px;
        border-radius:50px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: -20px;
    }

div *{
    text-decoration:none;
}

.container{
    display:block;
    color:black;
    border:1px solid rgba(0, 0, 0, 0.5);
    border-radius:10px;
    padding: 15px;
    padding-left: 0;
    width: 100%;
    height: 330px;
    margin: 0px;
    font-size:1rem;
}

.container:hover {
    background-color: rgb(240, 240, 240);
}

    
.text_information{
    justify-content: space-around;
    padding: 15px;
    display: block;
}


.tags{
    margin-top:15px;
    margin-bottom:15px;
}

.introduction{
    font-size:0.8rem;
    }

    
.empathise{
    min-width:85px;
    text-align:left;
    margin-top: 30px;
    display: inline;
}

.empathise p{
    background-color:#A9CDD7;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline;
    padding-left: 5px;
    text-transform: uppercase;
}


.define{
    min-width:85px;
    text-align:left;
    margin-top: 30px;
    display: inline;
}

.define p{
    background-color:#2C2378;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline;
    padding-left: 5px;
    text-transform: uppercase;
}


.ideate{
    min-width:85px;
    text-align:left;
    margin-top: 30px;
    display: inline;
}

.ideate p{
    background-color:#CE1E1E;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline;
    padding-left: 5px;
    text-transform: uppercase;
}
.prototype{
    min-width:85px;
    text-align:left;
    margin-top: 30px;
    display: inline;
}

.prototype p{
    background-color:#584242;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline;
    padding-left: 5px;
    text-transform: uppercase;
}

.test{
    min-width:85px;
    text-align:right;
    margin-top: 30px;
    display: inline;
}

.test p{
    background-color:#6FB051;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline;
    padding-left: 5px;
    text-transform: uppercase;
}


& > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none; 
}

h5 {
    font-size: 1.2em;
}

`

export default connect(Method)