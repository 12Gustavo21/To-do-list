import styled from "styled-components";

export const Body = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    background: linear-gradient(140deg, #dcddff, #3071e7);
    background-size: 400% 400%;
    animation: gradient 3.5s ease infinite;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;

    @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Title = styled.h1`
    font-size: 2em;
    margin: 15px;
    color: #fff;
`;

export const Main = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    width: 70%;
    height: 7vh;
    background-color: #737373;
    border-radius: 5px;
`;

export const Label = styled.label`
    margin: 10px;
`;

export const Input = styled.input`
    width: 82%;
    height: 5vh;
    color: #fff;
    background: none;
    border: none; 
    outline: none;
    font-size: 1em;
`;

export const Button = styled.button`
    cursor: pointer;
    color: #fff;
    background: none;
    padding: 2px 5px;
    margin-right: 10px;
    border: 1px solid #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: .9em;
`;