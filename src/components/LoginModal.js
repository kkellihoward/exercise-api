import React from 'react';
import { SignUpForm } from './SignUpForm';
import styled from 'styled-components';
import * as Components from './LoginSignup';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

// css styling for modal from background to close modal
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 61vw;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 5px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  z-index: 10;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const LoginModal = ({ showModal, setShowModal}) => {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErr] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
	const tempUser =
	{
		email: email,
		password: password,
	}

    axios.post("https://exerciseapi-ca661418c8e5.herokuapp.com/users/signin", tempUser)
	.then( response =>
		{
            if (response.status == 200)
            {
                console.log("yay");
                return;
            }
			
		}
	)
	.catch( err => console.log("somethings wrong mate"))

  };
 

  return (
    <>
      {showModal && (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
            <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <SignUpForm />
                      <Components.Title>Create Account</Components.Title>
              </Components.SignUpContainer>
              <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                  <Components.Title>Sign in</Components.Title>
                  <Components.Input onChange={e => setEmail(e.target.value)} type='userName1' placeholder='User Name'/>
                  <Components.Input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
                  <Components.Button onClick={handleSubmit} style={{backgroundColor: '#7f44d4'}}>Sign In</Components.Button>
                </Components.Form>
              </Components.SignInContainer>
              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>
                  <Components.LeftOverlayPanel signinIn={signIn}style={{backgroundColor: '#7f44d4'}}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          If you already have an account, please sign in here!
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>
                      <Components.RightOverlayPanel signinIn={signIn} style={{backgroundColor: '#7f44d4'}}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Get started on your journey with us!
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
            </ModalContent>
            <CloseModalButton
                aria-label='Close modal'
                onClick={() => (setShowModal(prev => !prev))}
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};
