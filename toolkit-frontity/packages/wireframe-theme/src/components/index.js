import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Header from "./header/header";
import Main from "./main";
import Footer from "./footer";

const Root = ({ state }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            //margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />

      <Header></Header>
      {/* <Welcome></Welcome> */}
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default connect(Root);
