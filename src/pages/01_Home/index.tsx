import { useEffect, useState } from 'react'

import OfferList from '../../components/02_OfferList'
import Header from '../../components/01_01_Header'
import Footer from '../../components/04_Footer'

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  })

  return (
    <>
      <Header />
      <OfferList offerList={restaurants} />
      <Footer />
    </>
  )
}

export default Home
