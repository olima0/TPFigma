import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  border-bottom: 0.4rem solid ${colors.primary};
  display: flex;
  height: 6rem;
  width:100%;
  background-color: ${colors.white};
  picture {
    margin-left: 2rem;
    img {
      height: 50%;
      margin-top: 1.3rem;
    }
  }
  
`

export const NavBar = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Lacquer&display=swap');
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        font-size: large;
        text-decoration: none;
        color: ${colors.black };
        font-family: 'Lacquer';
      }
    }
    li:hover {
      background-color: ${colors.primary};
    }
  }

`