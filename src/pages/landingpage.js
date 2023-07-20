import React, { useState } from 'react';
import { LoginModal } from '../components/LoginModal';
import styled from 'styled-components';
import '../components/style.css';


const Contiainer = styled.div`
    display: flex;
`;

function LandingPage()
{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return(
        <div>
            <LoginModal showModal={showModal} setShowModal={setShowModal}/>
            <button className='button2' onClick={openModal}>Get Started</button>
        </div>
    );
};


export default LandingPage;