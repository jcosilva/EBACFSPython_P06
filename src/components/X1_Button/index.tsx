import * as S from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  } else {
    return (
      <S.ButtonLink to={to as string} type="button" title={title}>
        {children}
      </S.ButtonLink>
    )
  }
}

export default Button
