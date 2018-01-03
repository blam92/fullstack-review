import React from 'react';
import './component.css';

let RepoItem = (props) => {


  return (
    <div className="repo-item-container">
      <img className="avatar" src="" alt="img"/>
      <div className="repo-info">
        <h5>Repo Name</h5>
        <p><i>Author</i></p>
        <p>Repo Description</p>
      </div>
      <div className="icons">
        <p>ICON</p>
        <p>ICON2</p>
        <p>ICON3</p>
      </div>
    </div>
  );
}

export default RepoItem;