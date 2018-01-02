const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
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

let save = (repoInstance) => {
  //SHOULD CHECK FOR ID IN THE DB TO PREVENT DUPLCIATES??
  if(Array.isArray(repoInstance)) {
    repoInstance.forEach((repo) => {
      repo.save((err, repo) => {
        if(err) return console.error(err);

        console.log('List of Repos have been saved:', repo);
      });
    });
  } else {
    repoInstance.save((err, repo) => {
      if(err) return console.error(err);

      console.log('Repo has been saved:', repo);
    });
  }
}
// TESTING MONGO CONNECTION
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
// mongoose.connection.once('open', () => {
//   let aRepo = new Repo({
//     "id": 18221276,
//     "name": "git-consortium",
//     "description": "This repo is for demonstration purposes only.",
//     "html_url": "https://github.com/octocat/git-consortium",
//     "updated_at": "2016-12-06T13:06:37Z",
//     "forks": 24,
//     "watchers": 7,
//     "owner": {
//       "login": "octocat",
//       "avatar_url": "https://avatars0.githubusercontent.com/u/583231?v=3"
//     }
//   });

//   save(aRepo);
// });


module.exports.save = save;