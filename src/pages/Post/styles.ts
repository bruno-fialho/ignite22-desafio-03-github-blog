import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 90rem;
  height: auto;
  margin: 0 auto;
  padding: 0 18rem 14.625rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 0 5rem 14.625rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem 14.625rem;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  min-height: 10.5rem;
  margin-top: calc(0px - 5.5rem);
  margin-bottom: 2.5rem;
  padding: 2rem;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  header {
    width: 100%;
    margin-bottom: 1.25rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};

    margin-bottom: 0.5rem;
  }
`

export const LinkWrapper = styled.div`
  border-bottom: 1px solid transparent;

  a {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};

    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    &:focus {
      box-shadow: none;
    }
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const TitleFooter = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }

    p {
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const CustomReactMarkdown = styled(ReactMarkdown)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: 1.5rem;
  }

  p,
  ul,
  ol {
    margin-bottom: 0.5rem;
  }

  table,
  code,
  pre {
    margin-bottom: 0.75rem;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  a:visited {
    color: ${(props) => props.theme.blue};
  }

  a:hover {
    opacity: 0.7;
  }
`
