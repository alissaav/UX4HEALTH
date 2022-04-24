
import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "./featured-media";

//Listendarstellung in der Methodenübersicht
const Method = ({ state, post }) => {
  const data = state.source.get(state.router.link);

  let tag = "";
  post.tags.forEach(element => {
    tag += "#" + state.source.tag[element].name + "   ";
  });

  return (
    <Item> 
      <Link link={post.link} className="container">
        <FeaturedMedia id={post.featured_media} />

        <div className="text_information">
            {/* Titel der Methode */}
            <h5>{post.title.rendered}</h5>

            {/* Schlagwörter */}
            <h6 className="tags">{tag}</h6>

            {/* kurze Einleitung */}
            <div dangerouslySetInnerHTML={{ __html:post.excerpt.rendered}} className="introduction"/>
          </div>

          {/* Kategorie Phase */}
          <div className={state.source.category[post.categories].name.toLowerCase()} >
            <p>{state.source.category[post.categories].name}</p>
          </div>           
      </Link>        
    </Item>  
  )
}

const Item = styled.div`

  img {
    height: 100px;
    width: 100px;
    border-radius:50px;
    margin-right: 15px;
  }

  div *{
    text-decoration:none;
  }

  .container{
    display:flex;
    color:black;
    border:1px solid rgba(0, 0, 0, 0.5);
    border-radius:10px;
    padding:15px 15px 15px 15px;
  }

  .text_information{
    justify-content: space-around;
    min-width:700px;
  }

  .tags{
    margin-top:15px;
    margin-bottom:15px;
  }

  .introduction{
    font-size:0.8rem;
  }



  .define{
    min-width:85px;
    text-align:right;
  }

  .define p{
    background-color:#2C2378;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline-block;
    margin-top:80px;
    text-transform: uppercase;
  }

  .test{
    min-width:85px;
    text-align:right;
  }

  .test p{
    background-color:#6FB051;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline-block;
    margin-top:80px;
    text-transform: uppercase;
  }

  .empathise{
    min-width:85px;
    text-align:right;
  }

  .empathise p{
    background-color:#A9CDD7;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline-block;
    margin-top:80px;
    text-transform: uppercase;
  }

  .ideate{
    min-width:85px;
    text-align:right;
  }

  .ideate p{
    background-color:#CE1E1E;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline-block;
    margin-top:80px;
    text-transform: uppercase;
  }
  .prototype{
    min-width:85px;
    text-align:right;
  }

  .prototype p{
    background-color:#584242;
    padding:5px;
    color:white;
    max-height:25px;
    border-radius:5px;
    font-weight:bold;
    font-size:0.7rem;
    display:inline-block;
    margin-top:80px;
    text-transform: uppercase;
  }


  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none; 
  }
`

export default connect(Method)