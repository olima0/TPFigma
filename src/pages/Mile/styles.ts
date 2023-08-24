import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"
export const Section = styled.section`
  width: 50%;
img{
  position: absolute;
  display: flex;
  width: 38%;
  height: 50%;
  left: 4%;
  top: 30%;
  border-radius: 34px;
}
p{
  
  position: absolute;
  display: flex;
  width: 40%;
  height: 1%;
  left: 7%;
  top: 20%;
  
  @import url('https://fonts.googleapis.com/css2?family=Lacquer&display=swap');
  font-family: 'Lacquer';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 58px;
  
  color: ${colors.white};
}
@media(max-width: 1280px){
  p{
    font-size: 20px;
    left: 4.5%;
  }
  img {
    left: 2%;
    width: 30%;
    height: 45%;
  }
}
@media (max-width: 650px){
  p{
    font-size: 16px;
    left: 38%;
    top: 14%;
  }
  img {
    display: none;
  }
}
@media (max-width: 500px){
  p{
    font-size: 14px;
  }
}
@media (max-width: 435px){
  p{
    font-size: 10px;
  }
}
`

export const text = styled.div`
  position: absolute;
  display: flex;
  height: 50%;
  width: 62%;
  left: 15%;
  top: 32%;
  font-family: 'Lacquer';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: ${colors.white};
  @media(max-width: 1280px){
    p{
      position: absolute;
      display: flex;
      font-size: 10px;
      line-height: 26px;
      top: -20%;
      left: 60%;
      width: 90%;

    } 
  }
  @media (max-width: 1000px){
    p {
      width: 70%;
      font-size: 18px;
      left: 45%;
    }
    img {
      display: flex;
      display: none;
    }
  }
  @media(max-width: 650px){
    p {
      width: 150%;
      font-size: 14px;
      left: -15%;
      top: 0%;
    }
  }
  @media (max-width: 485px){
      p{
        font-size: 12px;
      }
  }
  @media (max-width: 420px){
      p{
        font-size: 10px;
        top: -15%;
      }
  }
`