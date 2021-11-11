import styled from "styled-components";

export const Container = styled.div` 
    height: 100vh;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dfdfdfdf;
`;

export const CotacaoDiv = styled.div`
    display: flex;
    flex-direction: column;

  label{
    width: 250px;
    height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem;
  }
  
  span{
    font-size: 1.5rem;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  
  input{
    width: 400px;
    height: 30px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
  }

  button{
    width: 100px;
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
  }

  button:hover{
    background-color: black;
    color: #ffffff;
  }

  button:active{
    background-color: black;
    transform: translate(10px);
  }
`;