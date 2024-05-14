import styled from "@emotion/styled";
import { WeatherBack } from 'assets';


export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${WeatherBack})
  `
export const WeatherHeader =styled.div`
    width: 100%;
    height: 50px;
    //padding:20px 20px;
    //margin-left: 50px;
    //margin-right: 50px;
    background-color:lightblue;
    opacity:0.3;
    color: darkslategrey;
    display: flex;
    justify-content: center;
    font-size: xx-large;
    font-family: 'Gill Sans';
    font-style: italic;
    font-weight: bold; 
`

export const WeatherForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //padding-top: 100px;
  gap: 30px;
  width: 600px;
  height: 200px;
  padding: 60px;
  border: 2px solid black;
  border-radius: 4px;
  background-color: transparent;
`

export const WeatherMainContainer =styled.div`
display: flex;
justify-content: center;
margin-top:100px;
`
export const Button =styled.button`
height: 40px;
width: 50px;
border: 1px solid black;
border-radius: 4px;
background-color: aquamarine;
`

export const InputComp = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;


`