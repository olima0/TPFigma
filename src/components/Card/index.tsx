import * as S from "./styles";
export interface ICard {
  titulo: string
  mensagem: string
  link: string
}
export const Card = ({titulo, mensagem, link }: ICard) => {
  return (
    <S.Aside>
      <h1>Título: {titulo}</h1>
      <p>Mensagem: {mensagem}</p>
      <p>Link: {link}</p>
    </S.Aside>
  );
};
