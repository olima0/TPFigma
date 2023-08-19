import * as S from "./styles"
import Twitter from "../../assets/x.png"
import YT from "../../assets/youtube.png"
import Spotify from "../../assets/spotify.png"
import Insta from "../../assets/insta.png"


export function Footer() {
  return (
    <S.Footer>
      <a href="https://www.instagram.com/eminem/" target="_blank">
        <img src={Insta} alt="Instagram"/>
      </a>
      <a href="https://twitter.com/Eminem" target="_blank">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://open.spotify.com/intl-pt/artist/7dGJo4pcD2V6oG8kP0tJRR" target="_blank">
        <img src={Spotify} alt="Spotify"/>
      </a>
      <a href="https://www.youtube.com/Eminem" target="_blank">
        <img src={YT} alt="Youtube"/>
      </a>
    </S.Footer>
  )
}