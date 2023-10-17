import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    const [name,setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)


    const handleSubmit = e =>{
        e.preventDefault()
        console.log(photoURLRef.current.value)
    }

    const handleChange = (event)=>{
        setName(event.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control defaultValue={user?.email} type="email" placeholder="Enter email" readOnly />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Your Name</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={name} type="text" placeholder="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo url</Form.Label>
          <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="photourl" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Your Name</Form.Label>
          <Form.Control defaultValue={user?.displayName} type="text" placeholder="name" />
        </Form.Group>




        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;