import { useGetRestaurantQuery } from '../../services/api'
import Header from '../../components/01_01_Header'
import OfferList from '../../components/02_01_OfferList'
import Footer from '../../components/04_01_Footer'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const { data: restaurants, error, isLoading } = useGetRestaurantQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro ao carregar os restaurantes.</p>
  }

  return (
    <>
      <Header />
      {restaurants ? (
        <OfferList offerList={restaurants} />
      ) : (
        <p>Nenhum restaurante encontrado.</p>
      )}
      <Footer />
    </>
  )
}

export default Home
