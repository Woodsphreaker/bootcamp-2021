import React, { useState, ChangeEvent, FormEvent } from 'react'
import api from '../../services/api'

import {
  LogoGit,
  Title,
  Form,
  Repositories,
  UserAvatar,
  RepoDescription,
  ArrowIcon,
} from './styles'

interface RepoProps {
  owner: {
    avatar_url: string
    login: string
    url: string
  }
  name: string
  full_name: string
  description: string
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<RepoProps[]>([])
  const [repoName, setRepoName] = useState('')

  const handleRepoNameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setRepoName(value)
  }

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()
    findRepoByName()
  }

  const findRepoByName = async (): Promise<void> => {
    try {
      const {
        data: {
          owner: { avatar_url, url, login },
          name,
          full_name,
          description,
        },
      } = await api.get<RepoProps>(`repos/${repoName}`)

      setRepositories(prevRepositories => [
        ...prevRepositories,
        { name, full_name, description, owner: { login, avatar_url, url } },
      ])
      setRepoName('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <LogoGit />
      <Title>Explore repositórios no Github.</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={repoName}
          placeholder="Digite no nome do repositório"
          onChange={handleRepoNameChange}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(
          ({ name, full_name, description, owner: { avatar_url, url } }) => (
            <a href="/" key={full_name}>
              <UserAvatar alt="" src={avatar_url} />
              <RepoDescription>
                <strong>{name}</strong>
                <span>{description}</span>
              </RepoDescription>
              <ArrowIcon size={20} />
            </a>
          ),
        )}
      </Repositories>
    </>
  )
}

export default Dashboard
