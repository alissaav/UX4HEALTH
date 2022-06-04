import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Home from "./home";
import Sidebar from "./sidebar";
import WorkshopTool from "./workshop-tool";

const Main = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      {(data.isArchive || data.isPost) && <Sidebar />}
      <MainContent>
        <Switch>
          <WorkshopTool when={data.isWorkshopTool}>This is the Workshop-Tool</WorkshopTool>
          <Home when={data.isHome}>This is the home page</Home>
          <List when={data.isArchive}>This is a list</List>
          <Post when={data.isPost}>This is a post</Post>
          <Page when={data.isPage && !data.isWorkshopTool}>This is a page</Page>
          
        </Switch>
      </MainContent>
    </>
  );
};

export default connect(Main);

const MainContent = styled.header`
  max-width: 950px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
    }
    
    @media only screen and (max-width: 800px) {
        padding: 0!important;
    }
`
