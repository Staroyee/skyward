// Import necessary components and images.
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// Import Styling
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";

// Define Footer component.
function Footer() {
  return (
    <>
      <Navbar className="footerContainer" variant="dark">
        <Container>
          {/* Create links to social media profiles with respective icons. */}
          <Link
            to="https://github.com/Staroyee"
            rel="noreferrer"
            target="_blank"
          >
            <h4 className="footerLink">GitHub</h4>
          </Link>
          <Link to="/donate">
            <h4 className="footerLink">Donate</h4>
          </Link>
          <Link to="/apis">
            <h4 className="footerLink">APIs</h4>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

// Export component
export default Footer;
