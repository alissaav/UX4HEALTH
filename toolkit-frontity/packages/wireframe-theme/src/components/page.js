import React from "react";
import { connect, styled } from "frontity";
import FeaturedMedia from "./featured-media";
import Link from "@frontity/components/link";
import Templates from "../images/templates.png";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  return (
    <Wrapper>
      <HeadContent>
        <div class="head">
          <img class="headImage" src={Templates} />
          <div class="headContent">
            <h1>Templates</h1>
            <p>
              Hier findest du vorgefertige Templates zu unterschiedlichen
              Methoden.
            </p>
          </div>
        </div>
      </HeadContent>
      <MainContentPage>
        <div class="mainContent">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </MainContentPage>
    </Wrapper>
  );
};

export default connect(Page);

const Wrapper = styled.div`
  max-width: 950px;
  margin: auto;
`;

const HeadContent = styled.div`
  .head {
    top: 40px;
    height: 500px;
    overflow: hidden;
    position: relative;
    content: left;
  }

  .headImage {
    filter: brightness(30%);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }

  .headContent {
    margin-top: 60px;
    position: absolute;
  }

  @media only screen and (max-width: 600px) {
    .headContent h1 {
      font-size: 8vw;
    }

    .headContent p {
      font-size: 3vw;
      margin: 20px 20px !important;
    }

    .head {
      height: 80vw;
    }
  }

  h1 {
    margin-left: 64px;
    font-size: 54px;
    color: white;
  }

  p {
    margin: 40px 0 20px 64px;
    font-size: 18px;
    color: white;
    opacity: 1;
  }
`;

const MainContentPage = styled.div`
  .mainContent {
    margin-top: 6em;
  }

  h2 {
    margin-left: 64px;
    margin-top: 1.5em;
  }

  p {
    margin-left: 64px;
    margin-top: 2em;
    font-size: 18px;
  }

  pre {
    margin-left: 64px;
  }

  a {
    text-decoration: none;
    color: #5a48f3;
  }
  pre a:hover {
    font-weight: 700;
  }

  p a:hover {
    font-size: 17.5px;
    font-weight: 500;
  }
`;
