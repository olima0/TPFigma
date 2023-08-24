import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Top = styled.nav `
    display: flex;
    position: absolute;
    top: 25%;
    color: ${colors.black};
`
export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2rem;
  @media (max-width: 1010px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`