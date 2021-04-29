import React from 'react';

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
  return (
    <>
      <LogoGit />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite no nome do repositório"
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
