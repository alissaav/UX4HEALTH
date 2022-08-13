import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Logo from "../../images/logo.svg";
import Nav from "./nav";

const Header = ({ state }) => {
  return (
    <>
      <HeaderElement>
        {/* <p>Current URL: {state.router.link}</p> */}

        <ul>
          <li>
            <img src={Logo} alt="Logo"></img>
          </li>
          <li>
            <Link link="/" className="title">
              toolkit
            </Link>
          </li>
          {/* <li><Link link="/">Start</Link></li> */}
          {/* <li><Link link="/methodology">Methodology</Link></li>
                    <li><Link link="/templates">Templates</Link></li>
                    <li><Link link="/faq">FAQ</Link></li> */}
          <Nav></Nav>
        </ul>
      </HeaderElement>
    </>
  );
};

export default connect(Header);

const HeaderElement = styled.header`
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  z-index: 1000;
  background: #ffffff;
  box-shadow: 0px 16px 16px 8px rgb(0 0 0 / 60%);

  .title {
    color: #5a48f3;
    opacity: 1;
    width: 55px;
    height: 22px;
    left: 123px;
    top: 41px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 450%;
    text-transform: none;
    margin-left: 10px;
    display: block;
    padding: 14px 16px;
    padding-left: 0px;
    text-decoration: none;
  }

  .title:hover {
    background-color: white;
    color: #5a48f3;
    opacity: 1;
  }

  img {
    margin-left: 15%;
    margin-top: 15%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
  }
`;
