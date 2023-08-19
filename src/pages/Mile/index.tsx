import * as S from './styles'
import MileLogo from "../../assets/logofilme.png"
export function List() {
  return (
    <>
      <S.Section>
        <p>UMA VIDA EM UMA BATALHA</p>
        <img src={MileLogo} alt="8 Mile" />
      </S.Section>
      <S.text>
        <p>Jimmy 'B-Rabbit' está desesperado para ser um rapper. 
          Com o apoio de seu amigo 'Futuro' ele pretende superar 
          seus problemas pessoais. Ele engasga em uma batalha de 
          rap frente a frente de seu inimigo de outra gangue. Ele 
          não tem para onde ir a não ser voltar para o trailer de 
          sua mãe. Ele tem um trabalho sujo de peças automotivas 
          de meio período e então conhece Alex. Eminem está basicamente 
          interpretando a si mesmo e faz um bom trabalho. Ele está cercado 
          por bons atores. O sentido do lugar é o destaque deste filme. Os locais
          de Detroit têm a aspereza adequada. O desespero é palpável. As batalhas
          de rap são emocionantes. A história é relativamente padrão com toques
          agradáveis. Esta é uma questão da história perfeita para o protagonista
          perfeito. Ele não está realmente agindo tanto quanto sendo ele mesmo.</p>
      </S.text>
    </>
  )
}