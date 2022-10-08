import styled from 'styled-components'
import coverImg from '../../assets/header-cover.svg'

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 18.5rem;
  padding: 4rem;

  background-image: url(${coverImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`
