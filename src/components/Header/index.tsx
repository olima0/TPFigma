import * as S from "./styles"
import Logo from "../../assets/logo.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <a href="https://www.youtube.com/watch?v=7YuAzR2XVAM">
          <img src={Logo} alt="Eminem Logo" />
        </a>
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Eminem</a>
          </li>
          <li>
            <a href="/list">8 Mile</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}