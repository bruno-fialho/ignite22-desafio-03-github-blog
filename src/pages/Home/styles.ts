import styled from 'styled-components'

export const HomeContainer = styled.main`
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

export const ProfileContainer = styled.div`
  width: 100%;
  min-height: 13.25rem;
  margin-top: calc(0px - 5.5rem);
  margin-bottom: 4.5rem;
  padding: 2rem;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ProfileTextContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  header {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 0.5rem;
    }
  }

  > p {
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 1.5rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const LinkWrapper = styled.div`
  border: 0;

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

export const ProfileFooter = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

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
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const PostsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PostsHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const PostsList = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const PostBox = styled.a`
  width: 100%;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-post']};

  header {
    width: 100%;
    margin-bottom: 1.25rem;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    span {
      min-width: 3.5rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
