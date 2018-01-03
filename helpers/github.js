const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (err, res, body) => {
    if(err) throw err;
    
    var data = JSON.parse(body);

    let gitObj = data.map((repo) => {
      return {
        "id": repo.id,
        "name": repo.name,
        "description": repo.description,
        "html_url": repo.html_url,
        "updated_at": repo.updated_at,
        "forks": repo.forks,
        "watchers": repo.watchers,
        "owner": {
          "login": repo.owner.login,
          "avatar_url": repo.owner.avatar_url
        }
      }
    });
    callback(gitObj);
  });
}

module.exports.getReposByUsername = getReposByUsername;