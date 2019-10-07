import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
    background: #fff;
    color: #C6C6C6;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    font-size: 20px;
    font-weight: 300;
    border: none;
    box-shadow: 1px 2px 8px 0px #dedede;
    min-width: 140px;
    min-height: 140px;
    align-items: center;
`;

const WeekNumber = styled.span`
    font-weight: 700;
    font-size: 60px;
    color: #0E4D8B;
    align-self: center;
`;



const WeekButton = (props) => (
    <Button>
        <WeekNumber>{props.week}</WeekNumber>
        week
    </Button>
)

export default WeekButton;