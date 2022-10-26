import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { api } from '../../services/api'

import {
  LinkWrapper,
  PostContainer,
  TitleContainer,
  TitleFooter,
} from './styles'

interface GithubUserProfileResponseProps {
  title?: string
  body?: string
  html_url: string
  created_at: Date
  comments: number
}

const USER = 'bruno-fialho'
const REPO = 'ignite22-desafio-03-blog-posts'

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

        <h3>{githubIssuePost.title}</h3>

        <TitleFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{USER}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>{String(githubIssuePost.created_at)}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <p>{githubIssuePost.comments} comentários</p>
          </div>
        </TitleFooter>
      </TitleContainer>

      {githubIssuePost && (
        <ReactMarkdown>{githubIssuePost.body || ''}</ReactMarkdown>
      )}
    </PostContainer>
  )
}
