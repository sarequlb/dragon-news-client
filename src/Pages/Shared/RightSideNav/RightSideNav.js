import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-3' variant='outline-primary'> <FaGoogle></FaGoogle>  Login With Google </Button>
                <Button variant='outline-dark'> <FaGithub></FaGithub>  Login With Github  </Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h3>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
               <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;