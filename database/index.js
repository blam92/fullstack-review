const mongoose = require('mongoose');
let url = process.env.MONGODB_URI || 'mongodb://localhost/fetcher';
mongoose.connect(url);

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true},
  name: String,
  description: String,
  html_url: String,
  updated_at: Date,
  forks: Number,
  watchers: Number,
  owner: {
    login: String,
    avatar_url: String
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repositories, callback) => {
      if(Array.isArray(repositories)) {
        console.log('beginning of save func', repositories);
        Repo.create(repositories, (err) => {
          if(err) {
            console.log('ERROR CREATING ENTRIES', err);
            callback();
            return;
          }
          console.log('REPOS CREATED');
          callback();
        });
      } else {
        let repoInstance = new Repo(repositories);
        repoInstance.save((err, repo) => {
          if(err) return console.error(err);
    
          console.log('Repo has been saved:', repo);
          callback();
        });
      }
}

let getRepos = (callback) => {
  Repo.find((err, repos) => {
    if(err) return console.log(err);
    console.log(repos);
    callback(repos);
  });
}




module.exports.save = save;
module.exports.getRepos = getRepos;
