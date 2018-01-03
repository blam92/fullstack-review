import React from 'react';
import './component.css';
import Icon from './Icon.jsx';

import fork from './fork.png';
import eye from './eye.png';

let RepoItem = (props) => {

  console.log(props);
  return (
    <div className="repo-item-container">
      <div className="image-section">
        <img className="avatar" src={props.repoData.owner.avatar_url} alt="img"/>
      </div>
      <div className="repo-info">
        <h5><a target="_blank" href={props.repoData.html_url}>{props.repoData.name}</a></h5>
        <p><i>{props.repoData.owner.login}</i></p>
        <p>{props.repoData.description}</p>
      </div>
      <div className="icons">
        <Icon image={fork} text={props.repoData.forks}/>
        <Icon image={eye} text={props.repoData.watchers}/>
      </div>
    </div>
  );
}

export default RepoItem;