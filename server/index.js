const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let github = require('../helpers/github');
let mongoDB = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));

let JSONParser = bodyParser.json();

app.post('/repos', JSONParser, function (req, res) {

  console.log('req body', req.body);
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

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

