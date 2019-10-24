import React from 'react';
import styled from 'styled-components';
import Trophy from 'assets/trophy.svg';

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 50px;
    width: 90vw;
    background-color: white;
    box-shadow: 0px 20px 40px -10px #00000026;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TrophyImage = styled.img`
    max-width: 200px;
    margin-bottom: 20px;
`;

const Title = styled.h3`
    font-size: 30px;
    color: #0E4D8B;
    text-align: center;
`;

const Subtitle = styled.h4`
    font-size: 20px;
    font-weight: normal;
    margin-top:-20px;
    text-align: center;
    `;

const Modal = () => (
    <ModalWrapper>
        <TrophyImage src={Trophy} />
        <Title>Congrats!<br /> You made it!</Title>
        <Subtitle>Your exercise is completed 💪</Subtitle>
    </ModalWrapper>
);

export default Modal;