import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { saveToStorage, loadFromStorage } from '../../services/localStorage'

import {
  LogoGit,
  Title,
  Form,
  Repositories,
  UserAvatar,
  RepoDescription,
  ArrowIcon,
  ErrorMessage,
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

interface IErrorProps {
  hasError: boolean
  message?: string
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<RepoProps[]>(() =>
    loadFromStorage({
      storageName: '@Github:repositories',
    }),
  )
  const [repoName, setRepoName] = useState('')
  const [errorProps, setErrorMessage] = useState<IErrorProps>({
    hasError: false,
  })

  useEffect(() => {
    const hasRepositories = repositories.length > 0

    if (hasRepositories) {
      saveToStorage({
        storageName: '@Github:repositories',
        value: repositories,
      })
    }
  }, [repositories])

  const handleRepoNameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setRepoName(value)
  }

  const handleSubmit = (event: FormEvent): void | boolean => {
    event.preventDefault()

    if (!repoName) {
      setErrorMessage({
        hasError: true,
        message: 'Digite o nome do autor/repositório',
      })
      return false
    }

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
      setErrorMessage({ hasError: false })
    } catch (error) {
      setErrorMessage({ hasError: true, message: 'Repositório não encontrado' })
    }
  }

  return (
    <>
      <LogoGit />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={errorProps.hasError} onSubmit={handleSubmit}>
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
      {errorProps.hasError && <ErrorMessage>{errorProps.message}</ErrorMessage>}

      <Repositories>
        {repositories.map(
          ({ name, full_name, description, owner: { avatar_url } }) => (
            <Link to="repository" key={full_name}>
              <UserAvatar alt="" src={avatar_url} />
              <RepoDescription>
                <strong>{name}</strong>
                <span>{description}</span>
              </RepoDescription>
              <ArrowIcon size={20} />
            </Link>
          ),
        )}
      </Repositories>
    </>
  )
}

export default Dashboard
