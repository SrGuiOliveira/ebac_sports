import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import { RootReducer } from '../../store'
import { add, favorite } from '../../store/reducers/cart'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootReducer) => state.cart.favoritos)

  const estaNosFavoritos = favoritos.some((item) => item.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
        <S.Tag>{estaNosFavoritos ? 'Favorito' : 'Novo'}</S.Tag>
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.Plataformas>
        <li>Plataforma 1</li>
        <li>Plataforma 2</li>
      </S.Plataformas>
      <S.BtnComprar onClick={() => dispatch(favorite(produto))}>
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(add(produto))}>
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
