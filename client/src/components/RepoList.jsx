import React from 'react';
import RepoItem from './RepoItem.jsx';

const RepoList = (props) => {
  
  let repos = props.repos.map((repo) => {
    return <RepoItem/>;
  });

  return (<div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {repos}
    </div>);
}

export default RepoList;