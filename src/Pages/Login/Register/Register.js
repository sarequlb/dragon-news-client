import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

    const [error,setError]= useState('')

    const [accepted,setAccepted] = useState(false)

    const {createUser,updateProfileUser,verifyEmail} = useContext(AuthContext)
    console.log(createUser)

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,photourl,password)

        createUser(email,password)
        .then((result) =>{
            const user = result.user;
            console.log(user)
            setError('')
            form.reset('')
            handleUpdate(name,photourl)
            handleEmailVerification()
            toast.success('please verify your email address')
        })
        .catch(error =>{
            setError(error.message)
            console.error(error)
        })

    }

    const handleUpdate = (name,photourl) =>{
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateProfileUser(profile)
        .then(() =>{})
        .catch(error => console.error(error))
    }

    const handleEmailVerification = () =>{
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handleAccepted = (event) =>{
        setAccepted(event.target.checked)
    }

    return (
        <Form onSubmit = {handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name ="name" type="text" placeholder="Enter name" />
            
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photourl" type="text" placeholder="photo url" />
            
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name ="password" type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" label= {<>
            Accept <Link to ={'/terms'}>Terms and conditions</Link>
        </>} />
      </Form.Group>
        <Button variant="primary" type="submit" disabled = {!accepted}>
            Register
        </Button>
        <Form.Text className="text-danger">
                {error}
            </Form.Text>
    </Form>
    );
};

export default Register;