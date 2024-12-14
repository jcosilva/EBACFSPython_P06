import Menu from '../../models/Menu'

import HeaderShort from '../../components/01_02_HeaderShort'
import Banner from '../../components/01_03_Banner'
import MenuList from '../../components/03_MenuList'
import Footer from '../../components/04_Footer'

import efoodMenuItem01 from '../../assets/images/EFOOD_MENU_IMAGE_01.png'
import efoodMenuItem02 from '../../assets/images/EFOOD_MENU_IMAGE_02.png'

const menu: Menu[] = [
  {
    key: 1,
    image: efoodMenuItem01,
    title: 'Prato 01',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore saepe, quod rem commodi magni nihil blanditiis animi, hic dolor ea molestiae aliquid cupiditate pariatur. Ipsa sed voluptatum repudiandae similique!'
  },
  {
    key: 2,
    image: efoodMenuItem02,
    title: 'Prato 02',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore saepe, quod rem commodi magni nihil blanditiis animi, hic dolor ea molestiae aliquid cupiditate pariatur. Ipsa sed voluptatum repudiandae similique!'
  },
  {
    key: 3,
    image: efoodMenuItem02,
    title: 'Prato 03',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore saepe, quod rem commodi magni nihil blanditiis animi, hic dolor ea molestiae aliquid cupiditate pariatur. Ipsa sed voluptatum repudiandae similique!'
  },
  {
    key: 4,
    image: efoodMenuItem01,
    title: 'Prato 04',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore saepe, quod rem commodi magni nihil blanditiis animi, hic dolor ea molestiae aliquid cupiditate pariatur. Ipsa sed voluptatum repudiandae similique!'
  },
  {
    key: 5,
    image: efoodMenuItem01,
    title: 'Prato 05',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore saepe, quod rem commodi magni nihil blanditiis animi, hic dolor ea molestiae aliquid cupiditate pariatur. Ipsa sed voluptatum repudiandae similique!'
  },
  {
    key: 6,
    image: efoodMenuItem02,
    title: 'Prato 06',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore saepe, quod rem commodi magni nihil blanditiis animi, hic dolor ea molestiae aliquid cupiditate pariatur. Ipsa sed voluptatum repudiandae similique!'
  }
]

const MenuDisplay = () => (
  <>
    <HeaderShort />
    <Banner />
    <MenuList menu={menu} />
    <Footer />
  </>
)

export default MenuDisplay
