import React from 'react';
import { Link, useParams } from 'react-router-dom'

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StarIcon, 
  ForkIcon, 
  LinkButton, 
  GitHubIcon, 

} from './styles';


const Repo: React.FC = () => {
  const {username, reponame, description, stargazers_count, forks} =  useParams()
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={`/${username}/`} >
          {username}
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/${username}/${reponame}`} >
          {reponame}
        </Link>
      </Breadcrumb>

      <p>{description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>  
          <ForkIcon />
          <b>{forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={`https://github.com/${username}/${reponame}`} >
        <GitHubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
