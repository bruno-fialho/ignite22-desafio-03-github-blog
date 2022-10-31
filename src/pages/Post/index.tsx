import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../../services/api'

import {
  LinkWrapper,
  PostContainer,
  TitleContainer,
  TitleFooter,
  CustomReactMarkdown,
} from './styles'
import { Loading } from '../../components/Loading/Loading'

interface GithubUserProfileResponseProps {
  title?: string
  body?: string
  html_url: string
  created_at: Date
  comments: number
}

const USER = 'bruno-fialho'
const REPO = 'ignite22-desafio-03-github-blog'

export function Post() {
  const [githubIssuePost, setGithubIssuePost] =
    useState<GithubUserProfileResponseProps>(
      {} as GithubUserProfileResponseProps,
    )

  const { number } = useParams()

  useEffect(() => {
    async function getGithubPost() {
      try {
        const { data } = await api.get<GithubUserProfileResponseProps>(
          `/repos/${USER}/${REPO}/issues/${number}`,
        )

        setGithubIssuePost({
          title: data.title,
          body: data.body,
          html_url: data.html_url,
          created_at: data.created_at,
          comments: data.comments,
        })
      } catch (error) {
        console.log('error', error)
      }
    }

    if (number !== undefined) {
      getGithubPost()
    }
  }, [number])

  if (!githubIssuePost || Object.keys(githubIssuePost).length === 0) {
    return <Loading />
  }

  return (
    <PostContainer>
      <TitleContainer>
        <header>
          <LinkWrapper>
            <NavLink to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              voltar
            </NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <a href={githubIssuePost.html_url} target="_blank" rel="noreferrer">
              ver no github
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </LinkWrapper>
        </header>

        <h1>{githubIssuePost.title}</h1>

        <TitleFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{USER}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>
              {formatDistanceToNow(new Date(githubIssuePost.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <p>{githubIssuePost.comments} comentários</p>
          </div>
        </TitleFooter>
      </TitleContainer>

      {githubIssuePost && (
        <CustomReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: 'h2',
            h2: 'h3',
            code({ node, inline, className, style, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code style={style} className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {githubIssuePost.body || ''}
        </CustomReactMarkdown>
      )}
    </PostContainer>
  )
}
