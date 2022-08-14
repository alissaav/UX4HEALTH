import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Sidebar = ({ state }) => {
  let currentPage = 0;
  if (state.router.link.startsWith("/methodology/category/empathise")) {
    currentPage = 1;
  } else if (state.router.link.startsWith("/methodology/category/define")) {
    currentPage = 2;
  } else if (state.router.link.startsWith("/methodology/category/ideate")) {
    currentPage = 3;
  } else if (state.router.link.startsWith("/methodology/category/prototype")) {
    currentPage = 4;
  } else if (state.router.link.startsWith("/methodology/category/test")) {
    currentPage = 5;
  } else {
    currentPage = 0;
  }

  return (
    <>
      <Main>
        <nav>
          <ul>
            <li>
              <Link
                link={"/methodology/"}
                aria-current={currentPage == 0 ? "page" : undefined}
              >
                Methoden Übersicht
              </Link>
            </li>
            <li>
              <Link
                link={"/methodology/category/empathise/"}
                aria-current={currentPage == 1 ? "page" : undefined}
              >
                Phase 1: Empathise
              </Link>
            </li>
            <li>
              <Link
                link={"/methodology/category/define/"}
                aria-current={currentPage == 2 ? "page" : undefined}
              >
                Phase 2: Define
              </Link>
            </li>
            <li>
              <Link
                link={"/methodology/category/ideate/"}
                aria-current={currentPage == 3 ? "page" : undefined}
              >
                Phase 3: Ideate
              </Link>
            </li>
            <li>
              <Link
                link={"/methodology/category/prototype/"}
                aria-current={currentPage == 4 ? "page" : undefined}
              >
                Phase 4: Prototype
              </Link>
            </li>
            <li>
              <Link
                link={"/methodology/category/test/"}
                aria-current={currentPage == 5 ? "page" : undefined}
              >
                Phase 5: Test
              </Link>
            </li>
          </ul>
        </nav>
      </Main>
    </>
  );
};

export default connect(Sidebar);

const Main = styled.div`
  margin: 0;
  padding: 0;

  position: absolute;
  margin-top: 70px;
  margin-left: 20px;
  border-right: 1px solid #c4c4c4;
  height: 700px;
  width: 300px;

  nav {
    padding: 10px;
  }
  ul {
    list-style: none;
  }
  li > a {
    padding: 15px;
    display: block;
    color: black;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    opacity: 0.4;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      color: #5a48f3;
      opacity: 1;
    }
  }
  li > a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 1620px) {
    border-right: none;
  }

  @media only screen and (max-width: 1580px) {
    position: relative;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 30px;
    height: 300px;
    align-items: center;
    text-align: center;
    width: 100%;

    nav {
      padding-bottom: 20px !important;
      border-bottom: 1px solid #c4c4c4 !important;
      width: 80%;
      margin: 0 auto;
    }
  }
`;
