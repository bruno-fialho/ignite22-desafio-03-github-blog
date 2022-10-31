import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...rest },
  ref,
) => {
  return <InputContainer ref={ref} type="text" {...rest} />
}

export const Input = forwardRef(InputBase)
