import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const data = state.source.get(state.router.link);
      var isCurrentPage = data.route === link;
      const isPost = data.isPost;
      if (
        state.router.link.startsWith("/methodology") &&
        link.startsWith("/methodology")
      ) {
        isCurrentPage = true;
      }

      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  max-width: 100%;
  height: 70px;
  padding: 0;
  margin: 0;
  z-index: 101;
  align-items: center;

  @media only screen and (max-width: 650px) {
    width: 100% !important;
    margin: auto !important;
  }
`;

const NavItem = styled.div`
  shrink: 1;
  display: flex;
  align-content: center;

  padding: 0;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  & > a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    opacity: 0.4;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      color: #5a48f3;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 650px) {
    & > a {
      font-size: 3vw !important;
    }
  }

  & > a:hover {
    text-decoration: underline;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
