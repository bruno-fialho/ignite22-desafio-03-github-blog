import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Input } from './components/Input'

import {
  HomeContainer,
  PostBox,
  PostsContainer,
  PostsHeader,
  PostsList,
  ProfileContainer,
  ProfileFooter,
  ProfileImage,
  ProfileTextContent,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <ProfileImage src="https://github.com/bruno-fialho.png" alt="" />

        <ProfileTextContent>
          <header>
            <h1>Bruno Fialho</h1>

            <div>
              <a
                href="https://github.com/bruno-fialho"
                target="_blank"
                rel="noreferrer"
              >
                github
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </header>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ProfileFooter>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <p>bruno-fialho</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <p>Company X</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>32 seguidores</p>
            </div>
          </ProfileFooter>
        </ProfileTextContent>
      </ProfileContainer>

      <PostsContainer>
        <PostsHeader>
          <div>
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </div>
          <Input type="text" placeholder="Buscar conteúdo" />
        </PostsHeader>

        <PostsList>
          <PostBox>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = &apos;bar&apos;; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </PostBox>
          <PostBox>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 2 dias</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = &apos;bar&apos;; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </PostBox>
          <PostBox>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 semana</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = &apos;bar&apos;; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </PostBox>
          <PostBox>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 2 semanas</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = &apos;bar&apos;; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </PostBox>
          <PostBox>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 mês</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = &apos;bar&apos;; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </PostBox>
          <PostBox>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 2 meses</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = &apos;bar&apos;; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </PostBox>
        </PostsList>
      </PostsContainer>
    </HomeContainer>
  )
}
