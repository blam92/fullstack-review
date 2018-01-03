const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let github = require('../helpers/github');
let mongoDB = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));

let JSONParser = bodyParser.json();

app.post('/repos', JSONParser, function (req, res) {

  if(!req.body.term) {
    res.statusCode = 500;
    res.end('500. No search term found.')
  } else {
    github.getReposByUsername(req.body.term, (repos) => {
      // console.log(repos);
      mongoDB.save(repos, () => {
        res.statusCode = 201;
        res.end('POST SUCCESSFUL');
      });
    });
  }
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  mongoDB.getRepos((repos) => {
    let topRepos = repos.sort((a,b) => {
      if(a.forks > b.forks) {
        return -1;
      }
      if(b.forks > a.forks) {
        return 1;
      }
      return 0;
    }).slice(0, 25);
    res.statusCode = 200;
    res.end(JSON.stringify(topRepos));
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

