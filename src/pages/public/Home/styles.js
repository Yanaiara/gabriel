import styled from 'styled-components';
import img from '../../../assets/img/home-page.jpg';

export const ContainerHome = styled.section`
    background-image: url(${img});
    background-size: cover;
    height: 800px;
    display: flex;
`;


export const MainText = styled.p`
    font-family: 'Teko', sans-serif;
    color: white;
    font-size: 80px;
    margin: 0px;
    text-transform: uppercase;
    /* max-width: 300px; */
    line-height: 65px;
    /* padding-left: 128px; */

    /* @media (max-width: 760px){
        padding-left: 0;
    } */
`

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 128px 0 0 128px;
    max-width: 300px;

    @media (max-width: 760px){
        padding-left: 0;
    }
`;

export const RightContent = styled.div`
  text-align: right;
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  color: white;
  font-size: 100%;
  font-family: 'Kdam Thmor Pro', sans-serif;
`;

export const Button = styled.button`
  font-size: 1em;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

export const ContactButton = styled.button`
    @media (max-width: 760px){
        display: none;
    }
`