import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../../services/api'

import { Input } from './components/Input'

import {
  HomeContainer,
  LinkWrapper,
  PostBox,
  PostsContainer,
  PostsHeader,
  PostsList,
  ProfileContainer,
  ProfileFooter,
  ProfileImage,
  ProfileTextContent,
} from './styles'
import { Loading } from '../../components/Loading/Loading'

interface IssueProps {
  id: number
  html_url: string
  title: string
  body: string
  number: number
  created_at: Date
}

interface GithubUserProfileResponseProps {
  avatar_url?: string
  name?: string
  html_url: string
  bio?: string
  login: string
  company?: string
  followers: number
}

interface GetGithubIssuesRequest {
  search?: string
}

interface GetGithubIssuesResponse {
  items: IssueProps[]
}

const USER = 'bruno-fialho'
const REPO = 'ignite22-desafio-03-github-blog'

export function Home() {
  const [githubUserProfile, setGithubUserProfile] =
    useState<GithubUserProfileResponseProps>(
      {} as GithubUserProfileResponseProps,
    )
  const [githubRepoIssues, setGithubRepoIssues] = useState<IssueProps[]>([])

  async function getGithubProfile() {
    try {
      const { data } = await api.get<GithubUserProfileResponseProps>(
        '/users/bruno-fialho',
      )

      setGithubUserProfile({
        avatar_url: data.avatar_url,
        name: data.name,
        html_url: data.html_url,
        bio: data.bio,
        login: data.login,
        company: data.company,
        followers: data.followers,
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  async function getGithubIssues({ search }: GetGithubIssuesRequest) {
    try {
      const { data } = await api.get<GetGithubIssuesResponse>(
        '/search/issues',
        {
          params: {
            q: search
              ? `${search}repo:${USER}/${REPO}`
              : `repo:${USER}/${REPO}`,
          },
        },
      )

      const issues: IssueProps[] = data.items.map((item: IssueProps) => {
        return {
          id: item.id,
          html_url: item.html_url,
          title: item.title,
          body: item.body,
          number: item.number,
          created_at: item.created_at,
        }
      })

      setGithubRepoIssues(issues)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getGithubProfile()
    getGithubIssues({})
  }, [])

  if (
    Object.keys(githubUserProfile).length === 0 ||
    githubRepoIssues.length === 0
  ) {
    return <Loading />
  }

  return (
    <HomeContainer>
      <ProfileContainer>
        <ProfileImage src={githubUserProfile.avatar_url} alt="" />

        <ProfileTextContent>
          <header>
            <h1>{githubUserProfile.name}</h1>

            <LinkWrapper>
              <a
                href={githubUserProfile.html_url}
                target="_blank"
                rel="noreferrer"
              >
                github
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </LinkWrapper>
          </header>

          <p>{githubUserProfile.bio}</p>

          <ProfileFooter>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <p>{githubUserProfile.login}</p>
            </div>
            {githubUserProfile.company && (
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <p>{githubUserProfile.company}</p>
              </div>
            )}
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>{githubUserProfile.followers} seguidores</p>
            </div>
          </ProfileFooter>
        </ProfileTextContent>
      </ProfileContainer>

      <PostsContainer>
        <PostsHeader>
          <div>
            <h3>Publicações</h3>
            <span>
              {githubRepoIssues.length}{' '}
              {githubRepoIssues.length <= 1 ? 'publicação' : 'publicações'}
            </span>
          </div>

          <Input type="text" placeholder="Buscar conteúdo" />
        </PostsHeader>

        <PostsList>
          {githubRepoIssues.map((post) => {
            return (
              <PostBox key={post.id}>
                <header>
                  <h3>{post.title}</h3>
                  <span>
                    {formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </header>
                <p>{post.body}</p>
              </PostBox>
            )
          })}
        </PostsList>
      </PostsContainer>
    </HomeContainer>
  )
}
