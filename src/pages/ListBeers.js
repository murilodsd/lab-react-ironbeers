import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListBeers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {setBeers(response.data)})
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
  {beers.map(beer => {
    return (

        <Link to={`./${beer._id}`} >
        <Card key={beer._id} className="flex-row align-items-center">
    <div className="col-2 text-center"><img  src={`${beer.image_url}`} alt="" style={{height:"6rem"}}/></div>
      <Card.Body>
        <Card.Title className="mb-4">{beer.name}</Card.Title>
        <Card.Subtitle className="text-muted">{beer.tagline}</Card.Subtitle>
        <p style={{fontSize:"0.7rem"}}><strong>Created by:</strong> {beer.contributed_by}</p>
      </Card.Body>
    </Card>
        </Link>
    )
  })}
  </div>
)}

export default ListBeers;
