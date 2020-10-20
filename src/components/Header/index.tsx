import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ToggleButton from 'react-toggle-button'

import { Container, GithubLogo, SearchForm, MoonIcon, SunIcon } from './styles';

import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('')
  const [toggleState, setToggleState] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    navigate('/' + search.toLowerCase().trim())
  }

  function toggleTheme() {
    setToggleState(toggleState === true ? false : true)

    setThemeName(themeName === 'light' ? 'dark' : 'light')

  }
  
  return (
    <Container>
      <GithubLogo onClick={() => {}} />
      <SearchForm onSubmit={handleSubmit}>
        <input 
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
      <ToggleButton 
        value={toggleState}
        onToggle={toggleTheme}
        inactiveLabel={<MoonIcon />}
        activeLabel={<SunIcon/>}
        colors={{
          activeThumb: {
            base: 'rgb(62,130,247)',
          },
          inactiveThumb: {
            base: 'rgb(250,250,250)', 
          },
          active: {
            base: 'rgb(95,96,98)',
            hover: 'rgb(65,66,68)',
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)',
          }
        }}
      />
    </Container>
  );
};

export default Header;
