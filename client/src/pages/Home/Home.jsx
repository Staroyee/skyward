import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../assets/fonts/nasalization-rg.otf";
import "./Home.css";

// Define home page
function Home() {
  return (
    <>
      <Container className="H-Container">
        <Row>
          <Col md={12} className="H-Column">
            <svg
              height="100"
              stroke="#072448"
              strokeWidth="1.25"
              className="text-line"
              width="100%"
            >
              <text
                x="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                y="50%"
              >
                SKYWARD
              </text>
            </svg>

            <h3 className="H-Info">
              Look to the sky and view the galaxy, track space launches, browse
              rocket information and more!
            </h3>
            <Link to="/login-signup">
              <motion.button
                className="box H-Button"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                Journey Skyward
              </motion.button>
            </Link>
          </Col>
          <Col md={12}></Col>
        </Row>
      </Container>
    </>
  );
}

// Export home page
export default Home;
