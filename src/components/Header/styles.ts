import styled from 'styled-components';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const MoonIcon = styled(FaMoon)`
  fill: yellow;
  width: 16px;
  height: 16px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SunIcon = styled(FaSun)`
  fill: yellow;
  width: 16px;
  height: 16px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
display: flex;
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;

  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 250px;

    &:focus {
      width: 100%;
    }
    

    transition: width 0.2s ease-out, color 0.2s ease-out;
  
    
  }

  @media (max-width: 400px) {
    > input {
        width: 180px;

      &:focus {
        width: 100%;
      }
    }

    
  }
 
`;


