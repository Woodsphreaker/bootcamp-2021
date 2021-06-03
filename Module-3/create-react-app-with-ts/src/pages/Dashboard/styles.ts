import styled from 'styled-components'
import logoGit from '../../assets/git-logo.svg'
import { darken } from 'polished'
import { FiChevronRight } from 'react-icons/fi'

export const Container = styled.div``

export const LogoGit = styled.img.attrs({
  src: logoGit,
})``

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  > input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    ::placeholder {
      color: #a8a8b3;
    }
  }

  > button {
    width: 210px;
    border: 0;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;
    transition: background 0.3s;

    :hover {
      background: ${darken(0.1, '#04d361')};
    }
  }
`

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

  > a {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s;

    :hover {
      transform: translateX(10px);
      background-color: ${darken(0.03, '#fff')};
    }

    & + a {
      margin-top: 10px;
    }
  }
`

export const UserAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

export const RepoDescription = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 20px;

  > strong {
    font-size: 20px;
    color: #3d3d4d;
  }

  > span {
    font-size: 18px;
    color: #a8a8b3;
  }
`

export const ArrowIcon = styled(FiChevronRight)`
  color: #cbcbd6;
`
