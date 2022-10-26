import { useLottie } from 'lottie-react'

import loadingAnimation from '../../assets/loading.json'

import { LoadingContainer } from './styles'

export function Loading() {
  const { View } = useLottie({
    animationData: loadingAnimation,
    loop: true,
  })

  return <LoadingContainer>{View}</LoadingContainer>
}
