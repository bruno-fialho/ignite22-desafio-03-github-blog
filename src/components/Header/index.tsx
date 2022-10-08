import logoImg from '../../assets/logo.svg'

import { HeaderWrapper } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <img src={logoImg} alt="" />
    </HeaderWrapper>
  )
}
