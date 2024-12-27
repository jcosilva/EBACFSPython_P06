import { useParams } from 'react-router-dom'
import { useGetRestaurantMenuQuery } from '../../services/api'

import HeaderShort from '../../components/01_02_HeaderShort'
import Banner from '../../components/01_03_Banner'
import MenuList from '../../components/02_02_MenuList'
import Footer from '../../components/04_01_Footer'

const MenuDisplay = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: restaurantmenu,
    error,
    isLoading
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = useGetRestaurantMenuQuery(id!)

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro ao carregar o menu do restaurante.</p>
  }

  if (!restaurantmenu) {
    return <p>Restaurante não encontrado.</p>
  }

  return (
    <>
      <HeaderShort />
      <Banner restaurant={restaurantmenu || []} />
      <MenuList restaurant={restaurantmenu || []} />
      <Footer />
    </>
  )
}

export default MenuDisplay
