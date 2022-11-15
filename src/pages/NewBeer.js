import { Button, Form, Navbar } from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function NewBeer() {
    const [form,setForm] = useState({})

    function handleChange(e) {
        setForm({...form,[e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new",form)
        .then((response) => {
            setForm({name:"",
            tagline:'', description: '', first_brewed: '', brewers_tips: '', attenuation_level:"",contributed_by:""})
        })
    }

    return (<div>
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
        <Form onSubmit={handleSubmit} className="ms-2 me-2">
      
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={handleChange} name="name" value={form.name}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tagline</Form.Label>
        <Form.Control type="text" onChange={handleChange} name="tagline" value={form.tagline}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} name="description" value={form.description}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>First Brewed</Form.Label>
        <Form.Control type="text" onChange={handleChange} name="first_brewed" value={form.first_brewed}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Brewers Tips</Form.Label>
        <Form.Control type="text" onChange={handleChange} name="brewers_tips" value={form.brewers_tips}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Attenuation level</Form.Label>
        <Form.Control type="number" onChange={handleChange} name="attenuation_level" value={form.attenuation_level}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contributed By</Form.Label>
        <Form.Control type="text" onChange={handleChange} name="contributed_by" value={form.contributed_by}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add beer
      </Button>
    </Form>
    </div>
    )
}

export default NewBeer;