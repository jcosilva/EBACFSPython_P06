import OfferList from '../../components/02_OfferList'
import Offer from '../../models/Offer'

import offerPicture01 from '../../assets/images/EFOOD_OFFER_IMAGE_01.png'
import offerPicture02 from '../../assets/images/EFOOD_OFFER_IMAGE_02.png'
import Header from '../../components/01_01_Header'
import Footer from '../../components/04_Footer'

const offerList: Offer[] = [
  {
    key: 1,
    image: offerPicture01,
    title: 'Restaurante 01',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    category: 4.9,
    infos: ['Destaque da Semana', 'Japonesa']
  },
  {
    key: 2,
    image: offerPicture02,
    title: 'Restaurante 02',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    category: 4.6,
    infos: ['Italiana']
  },
  {
    key: 3,
    image: offerPicture02,
    title: 'Restaurante 03',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    category: 4.5,
    infos: ['Italiana']
  },
  {
    key: 4,
    image: offerPicture01,
    title: 'Restaurante 04',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    category: 4.5,
    infos: ['Japonesa']
  },
  {
    key: 5,
    image: offerPicture01,
    title: 'Restaurante 05',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    category: 4.4,
    infos: ['Japonesa']
  },
  {
    key: 6,
    image: offerPicture02,
    title: 'Restaurante 06',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus debitis nobis ducimus! Tempore, nemo saepe porro voluptates voluptate possimus consequuntur quasi! Odit velit deleniti odio, nisi voluptate praesentium error temporibus.',
    category: 4.3,
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <OfferList offerList={offerList} />
    <Footer />
  </>
)

export default Home
