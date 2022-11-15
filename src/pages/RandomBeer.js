import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function RandomBeer() {
    
    const [beer, setBeer] = useState({});
   
    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {setBeer(response.data)})
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
        <Navbar 
        className="d-flex justify-content-center align-items-center"
        bg="primary"
        variant="dark"
      >
        <Link className="home-icon" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
</svg>
        </Link>
      </Navbar>
            <Card className="text-center">
          <div><img alt="" src={`${beer.image_url}`} style = {{height:"16rem"}}/></div>
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">{beer.name} <span className="text-secondary">{beer.attenuation_level}</span></Card.Title>
            <Card.Subtitle className="d-flex justify-content-between text-secondary mb-4 text-start">{beer.tagline} <strong className="text-dark">{beer.first_brewed}</strong></Card.Subtitle>  <Card.Text>
              {beer.description}
            </Card.Text>
            <small>{beer.contributed_by}</small>
          </Card.Body>
        </Card>
        </div>
    )
}

export default RandomBeer;