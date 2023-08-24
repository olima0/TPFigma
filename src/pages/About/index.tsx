import * as S from "./styles"
import { dados } from "../../service/dados"
import { ComponentCard } from '../../components'

export function About() {
    return(
        <>
            <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          mensagem={item.mensagem}
          titulo={item.titulo}
          link={item.link}
        />
      ))}
    </S.Section>
        </>
    )
}