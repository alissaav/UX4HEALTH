import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Logo from "../images/footer-hsd-logo.svg";

const Footer = ({ state }) => {
  return (
    <>
      <FooterElement>
        <div className="wrapper">
          <div className="inline-wrapper">
            <Link link="https://codeforhealth.de" className="logo">
              <img src={Logo}></img>
            </Link>

            <div className="contact">
              <div className="adress-div">
                <p className="adress">
                  <strong>CoDe for Health Lab</strong>
                  <br></br>
                  Ackerstraße 11<br></br>
                  40223 Düsseldorf<br></br>
                  Germany
                </p>
              </div>
              <div className="message">
                <p>
                  If you are curious about our projects or want to collaborate,
                  we are happy to learn more about you.
                </p>
              </div>
            </div>
          </div>
          <div className="inline-wrapper">
            <div className="links">
              <div>
                <Link link="https://codeforhealth.de/">Start</Link>
                <Link link="https://codeforhealth.de/about/">About</Link>
                <Link link="https://codeforhealth.de/projects/">Projects</Link>
              </div>
              <div>
                <Link link="https://codeforhealth.de/research/">Research</Link>
                <Link link="https://codeforhealth.de/contact/">Contact</Link>
              </div>
            </div>
            <div className="getintouch">
              <Link link="https://codeforhealth.de/contact/">
                Get in touch<i className="arrow"></i>
              </Link>
            </div>
          </div>
          <div className="inline-wrapper rights">
            <div>
              <Link link="https://codeforhealth.de/legal-disclosure/">
                Legal Disclosure
              </Link>{" "}
              |{" "}
              <Link link="https://codeforhealth.de/privacy-policy/">
                Privacy Policy
              </Link>
            </div>
            <div>© 2022 CoDe for Health</div>
          </div>
        </div>
      </FooterElement>
    </>
  );
};

export default connect(Footer);

const FooterElement = styled.footer` 

    z-index:100;

    width: 100%;
    background-color: #5A48F3;
    height: 100%;
    color: white;

    .wrapper {
        width: 55%;
        margin: auto;
    }

    .inline-wrapper {
        display: flex;
        justify-content: space-between;
    }

    ul {
        display: flex;
        justify-content: center;
    }

    img {
        width: 50%;
        margin-top: 50px;
    }

    .adress {
        margin-top: 10px;
    }

    .adress-div {
        border-right: 3px solid #84ffdd;
        padding-right: 10px;
        text-align: right;
        width: 60%;

    }

    .rights {
        margin-top: 40px;
        opacity: 0.6;
    }

    .rights a {
        color: white;
        text-decoration: none;
    }

    .rights a:hover {
        text-decoration: underline;
    }

 
    .links {
        margin-top: 40px;
    }

    .links div {
        margin-bottom: 20px;
    }

    .links a {
        color: white;
        text-decoration: none;
        margin-right: 30px;
        font-size: 1.1em;
        text-transform: uppercase;
        font-weight: bold;
    }

    .links a:hover {
        text-decoration: underline;
    }

    .contact {
        margin-top: 40px;
        width: 60%;
        display: flex;
    }

    h1 {
        font-size: 1.3em;#
        margin-bottom: 0px;
    }

    .message {
        width: 63%;
        padding-left: 10px;
        text-align: left;
        margin-top: 10px;
    }
    
    .getintouch {
        margin-top: 50px;
    }

    .getintouch a {
        border: 2px solid #84ffdd;
        background-color: transparent;
        color: white;
        padding: 20px;
        font-size: 1.5em;
        text-transform: uppercase;
        margin-top: 25px;
        text-decoration: none;
    }

    .getintouch:hover {
        * {
            background-color: #84ffdd;
            color: black;
            transition: 0.5s;
        }
    }

    

    .arrow {
        position: relative;
        left: 35px;
        top: 5px;
        border: solid #84ffdd;
        border-width: 0 3px 3px 0;
        background-color: #5A48F3;
        width: 30px;
        height: 30px;
        display: inline-block;
        padding: 3px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    
     @media only screen and (max-width: 1050px) {
                
    .inline-wrapper {
      flex-direction: column-reverse !important;
        text-align: center !important;
        align-items: center !important;
        justify-content: center !important;
    }

    .wrapper{
        text-align: center !important;
        items-align: center !important;
    }

    .logo{
        width: 300px;
    }

    .links{
        margin-left: 40px;
    }

    
    }

    
`;
