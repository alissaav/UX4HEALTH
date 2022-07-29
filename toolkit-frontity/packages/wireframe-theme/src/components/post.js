import React from "react";
import { connect, styled } from "frontity";
import FeaturedMedia from "./featured-media";
import MethodTile from "./methodTile";

const Post = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  let postContent = post.content.rendered;

  //URL des ersten Posts im Content der Seite ermitteln
  const firstMethodBeginning = postContent.search("<method1>") + 9;
  const firstMethodEnding = postContent.search("</method1>");
  let firstMethod = postContent.slice(firstMethodBeginning, firstMethodEnding);

  //URL des zweiten Posts im Content der Seite ermitteln
  const secondMethodBeginning = postContent.search("<method2>") + 9;
  const secondMethodEnding = postContent.search("</method2>");
  let secondMethod = postContent.slice(
    secondMethodBeginning,
    secondMethodEnding
  );

  //Post Objekte holen
  let firstPost = state.source["post"][state.source.get(firstMethod).id];
  let secondPost = state.source["post"][state.source.get(secondMethod).id];

  const tags = post.tags;
  let tag = [];
  tags.forEach((element) => {
    tag.push(<li>#{state.source.tag[element].name}</li>);
  });

  return (
    <Wrapper>
      <PostContent>
        <h2>{post.title.rendered}</h2>
        <Html2React html={postContent} />
      </PostContent>
      <Complementary>
        {firstPost && <MethodTile key={1} post={firstPost}></MethodTile>}
        {secondPost && <MethodTile key={2} post={secondPost}></MethodTile>}
      </Complementary>
    </Wrapper>
  );
};

export default connect(Post);

const Wrapper = styled.div`
  max-width: 950px;
  margin: auto;
  padding-top: 30px;
`;

const Complementary = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const PostContent = styled.div`
  position: relative;
  left: 0;
  margin: 3%;

  method1,
  method2 {
    display: none;
  }
  p {
    font-size: 1.2em;
    margin-top: 2em;
    line-height: 1.6;
    margin-bottom: 2em;
    width: 90%;
  }

  .tricks ul,
  .advantages ul,
  .vorbereitung ul {
    padding-left: 3%;
    padding-top: 2%;
  }

  .tricks li,
  .advantages li,
  .vorbereitung li {
    font-size: 1.2em;
    line-height: 1.6;
    width: 90%;
  }

  h2 {
    margin-top: 1em;
    font-size: 3em;
  }

  h3 {
    margin-top: 1em;
    font-size: 1.8em;
  }

  img {
    height: 300px;
    width: 100%;
  }

  .wp-block-columns {
    display: flex;
  }

  .steps ol {
    margin-top: 2em;
    list-style: none;
    counter-reset: item;
    width: 80%;
  }

  .steps ol li {
    counter-increment: item;
    margin-bottom: 25px;
    position: relative;
    font-size: 1.2em;
    margin-left: 4em;
    line-height: 1.6;
  }

  .steps li::before {
    margin-right: 10px;
    font-weight: bold;
    font-size: 1.4em;
    position: absolute;
    content: counter(item);
    background: #2c2378;
    color: white;
    line-height: 2em;
    top: 10px;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    text-align: center;
    left: calc(-2.5em - 10px);
  }

  .stats,
  .materials {
    margin-top: 2.5em;
    box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.1),
      4px 4px 10px rgba(0, 0, 0, 0.25);
    width: 250px;
    cursor: text;
    color: white;
    padding-bottom: 10px;
    border-radius: 5%;
    padding: 12px;
  }

  .stats h3,
  .materials h3 {
    margin-top: 10px;
    margin-left: 10px;
    color: black;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .stats a {
    font-size: 1em;
    color: black;
    text-decoration: none;
    display: block;
    pointer-events: none;
    padding-left: 10px;
  }

  .stats a::before {
    content: "#";
  }

  .materials {
    color: black;
    display: block;
  }

  .materials input {
    margin: 20px 10px;
    width: 20px;
    height: 20px;
  }

  .external ul {
    margin-top: 2em;
    list-style: none;
    counter-reset: item;
  }

  .external {
    margin-bottom: 20px;
    width: 80%;
  }

  .external li {
    list-style-position: outside;
    list-style-type: disc;
    margin-left: 25px;
    font-size: 1.2em;
  }

  .external li a {
    color: #5a48f3;
    line-height: 1.6em;
  }

  .download a {
    color: #5a48f3;
    text-decoration: none;
  }

  .advantages {
    border: 3px solid #2c2378;
    padding: 15px;
  }

  h4 {
    font-size: 1.5em;
  }

  .taxonomy-post_tag {
    font-family: monospace;
    padding: 6px;
    padding-bottom: 16px;
  }

  @media only screen and (max-width: 800px) {
    .wp-block-columns {
      flex-direction: column;
    }
    .wp-block-column.right-column {
      display: flex;
      justify-content: space-evenly;
    }
    .steps ol {
      width: 100%;
      padding: 3%;
    }
  }
`;
