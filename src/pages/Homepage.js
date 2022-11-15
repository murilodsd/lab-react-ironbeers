import {
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Homepage() {
  return (

    <ListGroup>
      <ListGroupItem>
        <Card className="text-center">
          <Card.Img variant="top" src={beers} />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              magna tempor urna placerat rhoncus at id dui. Curabitur et enim et
              libero tristique ornare efficitur eu mi. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nulla non nibh laoreet,
              ullamcorper velit eget, convallis nisi. Aenean condimentum euismod
              sodales. In.
            </Card.Text>
            <Button variant="primary">
              <Link to="/beers">Take me there</Link>
            </Button>
          </Card.Body>
        </Card>
      </ListGroupItem>
      <ListGroupItem>
        <Card className="text-center">
          <Card.Img variant="top" src={randomBeer} />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              magna tempor urna placerat rhoncus at id dui. Curabitur et enim et
              libero tristique ornare efficitur eu mi. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nulla non nibh laoreet,
              ullamcorper velit eget, convallis nisi. Aenean condimentum euismod
              sodales. In.
            </Card.Text>
            <Button variant="primary">
              <Link to="/random-beer">Take me there</Link>
            </Button>
          </Card.Body>
        </Card>
      </ListGroupItem>
      <ListGroupItem>
        <Card className="text-center">
          <Card.Img variant="top" src={newBeer} />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              magna tempor urna placerat rhoncus at id dui. Curabitur et enim et
              libero tristique ornare efficitur eu mi. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nulla non nibh laoreet,
              ullamcorper velit eget, convallis nisi. Aenean condimentum euismod
              sodales. In.
            </Card.Text>
            <Button variant="primary">
              <Link to="/new-beer">Take me there</Link>
            </Button>
          </Card.Body>
        </Card>
      </ListGroupItem>
    </ListGroup>
  );
}
export default Homepage;
