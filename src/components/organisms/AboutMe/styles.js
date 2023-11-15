import styled from 'styled-components';

export const AboutMeContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  height: 500px;
  align-items: center;
`;

/* export const ProfileImage = styled.img` */
export const ProfileImage = styled.div`
  /* max-width: 100%; */
  width: 391px;
  height: 406px;
  background-color: red;
  /* height: auto; */
  border-radius: 4px;
  margin-bottom: 16px;

  @media (max-width: 760px){
      display: none;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 16px;
  color: rgba(0,0,0,.8);
  font-family: 'Teko', sans-serif;
  font-weight: 500;
  line-height: 1.1666em;
  text-transform: uppercase;
`;

export const Text = styled.div`
    color: rgba(0,0,0,.54);
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.4em;
    letter-spacing: .8px;
`;

export const TextAux = styled.div`
  margin-top: 12px;
  font-size: 16px;
  color: rgba(2,1,1,.63);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
line-height: 1.5;
`;

export const LeftContent = styled.div``;

export const RigthContent = styled.div`
    max-width: 430px;
    padding: 0 0 0 50px;
`;

export const Info = styled.p`
    color: #fe6219;
    font-family: roboto,Sans-serif;
    font-size: .875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.5px;
`