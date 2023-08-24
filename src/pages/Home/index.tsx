import * as S from './styles'
import Eminem from "../../assets/eminem.png"
import Encore from "../../assets/encore.png"
import Show from "../../assets/mnmshow.png"
import LP from "../../assets/lp.png"

export function Home() {
  return (
    <>
  
      <S.Section>
        <img src={Eminem} alt="Eminem" />
        <p>Marshal Mathers</p>
      </S.Section>
      
      <S.Lp>
        <img src={LP} alt="The Real Slim Shady LP" />
        <p>The Slim Shady LP" é provavelmente um dos álbuns mais 
            ousados e sem noção já feitos. O resultado de Marshall 
            Mathers deixando seu alter ego, que dá nome ao registro, 
            tomar conta de seu primeiro grande álbum de estúdio foi 
            um tiro no escuro tão arriscado que só poderia dar certo.</p>
    </S.Lp>
    
    <S.Show>
      <img src={Show} alt="The Eminem Show" />
      <p>Eminem desfila farpas cruéis contra Mariah Carey e
        sua mãe. Em dez dias, atingiu a marca de 1,6 milhões 
        de CD vendidos.O discurso político acentuou-se, embora 
        destoe para um tipo de gangsta rap feito sob medida para
        a classe média norte-americana.</p>
    </S.Show>

    <S.Encore>
      <img src={Encore} alt="Encore" />
      <p>É quase universalmente aceito que este foi o início da 
        queda de Eminem. Bem, acho que você poderia dizer que 
        as coisas estavam indo para uma direção ruim no The 
        Eminem Show, mas ainda assim foi um álbum agradável 
        no geral. As coisas ficam realmente feias aqui.</p>
    </S.Encore>
    </>
  )
}