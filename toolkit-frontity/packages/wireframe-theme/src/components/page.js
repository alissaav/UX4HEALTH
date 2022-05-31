import React from "react"
import { connect, styled } from "frontity"
import FeaturedMedia from "./featured-media";
import Link from "@frontity/components/link";
import Templates from "../images/templates.png";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]

  return (
    <>
    <HeadContent>
      <div class="head">
        <img
          class="headImage"
          src={Templates}
        />
        <div class="headContent">
          <h1>Templates</h1>
          <p>Hier findest du vorgefertige Templates zu unterschiedlichen Methoden.</p>
        </div>
      </div>
    </HeadContent>
    <MainContent>
      <div class="mainContent">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </MainContent>
    </>
  )
}

export default connect(Page)

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
`

const MainContent = styled.div`
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
  margin-left: 64px;;
}

a {
  text-decoration: none;
  color: #5A48F3;

}
pre a:hover {
  font-weight: 700;
}

p a:hover {
  font-size: 17.5px;
  font-weight: 500;
}
`
