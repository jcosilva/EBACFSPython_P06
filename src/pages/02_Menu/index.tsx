import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurant } from '../01_Home'

import HeaderShort from '../../components/01_02_HeaderShort'
import Banner from '../../components/01_03_Banner'
import MenuList from '../../components/03_MenuList'
import Footer from '../../components/04_Footer'

const MenuDisplay = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    setLoading(true)

    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurant(res)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erro ao buscar restaurante:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Carregando...</p>
  if (!restaurant) return <p>Restaurante não encontrado.</p>

  return (
    <>
      <HeaderShort />
      <Banner offer={restaurant} />
      <MenuList menu={restaurant.cardapio || []} />
      <Footer />
    </>
  )
}

export default MenuDisplay
