import * as S from './styles'
import Menu from '../../models/Menu'
import MenuDisplay from '../X3_MenuItem'

export type Props = {
  menu: Menu[]
}

const MenuList = ({ menu }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {menu.map((menu) => (
          <MenuDisplay
            key={menu.key}
            image={menu.image}
            title={menu.title}
            description={menu.description}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default MenuList
