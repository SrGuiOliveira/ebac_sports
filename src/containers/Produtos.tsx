import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((item) => (
          <Produto key={item.id} produto={item} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
