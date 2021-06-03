import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import api from '../../services/api';

import {
  LogoGit,
  Title,
  Form,
  Repositories,
  UserAvatar,
  RepoDescription,
  ArrowIcon,
} from './styles';

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState([]);
  const [repoName, setRepoName] = useState('');

  const handleRepoNameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setRepoName(value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    findRepoByName();
  };

  const findRepoByName = async (): Promise<void> => {
    const { data: repository } = await api.get(`repos/${repoName}`);
    console.log(repository);
  };

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
        {Array.from({ length: 3 }, () => (
          <a href="/">
            <UserAvatar
              alt=""
              src="https://avatars.githubusercontent.com/u/22459141?v=4"
            />
            <RepoDescription>
              <strong>Teste 123</strong>
              <span>DescRepo</span>
            </RepoDescription>
            <ArrowIcon size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
