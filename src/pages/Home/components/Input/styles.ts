import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};

  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
