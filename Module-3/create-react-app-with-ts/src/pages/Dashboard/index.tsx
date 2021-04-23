import React from 'react';

import { LogoGit, Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <LogoGit />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input type="text" name="" id="" placeholder="Digite no nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
}

export default Dashboard;