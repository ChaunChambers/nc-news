import { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import getArticles from "../assets/Utils/getArticles";
import { UserContext } from "../contexts/UserContext";

const NavBarSite = ({ topics, isLoggedIn }) => {
  const { userLoggedIn, setUserLoggedIn, handleLogOut } =
    useContext(UserContext);
  function handleTopic() {
    const linkValue = e.target.value;

    linkValue ? getArticles(linkValue) : getArticles();
  }
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              className="nav-links"
              as={Link}
              to="/"
              onClick={(e) => handleTopic(e)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-links"
              as={Link}
              to="/articles"
              onClick={(e) => handleTopic(e)}
            >
              Articles
            </Nav.Link>

            {topics.map((topic, index) => {
              return (
                <>
                  <Nav.Link
                    key={index}
                    className="nav-links"
                    as={Link}
                    to={`/articles?topic=${topic.slug}`}
                    onClick={(e) => handleTopic(e)}
                    value={topic.slug}
                  >
                    Topic: {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
                  </Nav.Link>
                </>
              );
            })}

            <Nav.Link className="nav-links" as={Link} to="/users">
              {userLoggedIn ? `Users` : `Log In`}
            </Nav.Link>
            {userLoggedIn && (
              <>
                <Nav.Link className="nav-links " as={Link}>
                  <p className="logout-paragraph hidemobile margin-right-navbar">
                    Logged In: {userLoggedIn.username}
                  </p>
                </Nav.Link>
                <Nav.Link className="nav-links" as={Link}>
                  <button className="logout-button" onClick={handleLogOut}>
                    Log Out
                  </button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBarSite;
