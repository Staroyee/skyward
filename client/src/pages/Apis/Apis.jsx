import { Container, Row, Col, Card } from "react-bootstrap";
import "./Apis.css"
import Button from "../../components/Buttons/Button";

// Render the page to display the information about API usage
function Apis() {
  return (
    <>
      <Container>
        <Card className="A-Card">
          <svg
                height="100"
                stroke="#072448"
                strokeWidth="1.25"
                className="text-line L-Title"
                width="100%"
              >
                <text
                  x="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  y="50%"
                >
                  API USAGE
                </text>
              </svg>
          <Card.Text>
              For this project, we made use of the amazing Launch Library 2 & NASA Open APIs. They provide the wealth of information and images that fill the community we have built, and we thank them for making the information open, free, and easily accessible.
              </Card.Text>
          <Row>
            <Col>
            <h2 className="A-CardTitle">Launch Library 2 API</h2>
              <Card.Text>
              The Launch Library 2 API is the official successor of the popular Launch Library API. It keeps its core features whilst also including everything the broader Space Launch Now API had to offer. The result is a large database delivering a more complete experience for each rocket launch and space event. The philosophy behind the API also remains unchanged : the entire database is accessible to everyone, for free.
              </Card.Text>
              <a
            className="footerItem"
            href="https://thespacedevs.com/llapi"
            rel="noreferrer"
            target="_blank"
          >
            <Button value="View Docs" className="A-Button">View Docs</Button>
          </a>
          <h2 className="A-CardTitle">NASA Open APIs</h2>
              <Card.Text>
              Welcome to the NASA API portal. The objective of this site is to make NASA data, including imagery, eminently accessible to application developers. This catalog focuses on broadly useful and user friendly APIs and does not hold every NASA API.
              </Card.Text>
              <a
            className="footerItem"
            href="https://api.nasa.gov/"
            rel="noreferrer"
            target="_blank"
          >
            <Button value="View Docs" className="A-Button">View Docs</Button>
          </a>
            </Col>
          </Row>
          
        </Card>
      </Container>
    </>
  );
}

// Export page
export default Apis;
