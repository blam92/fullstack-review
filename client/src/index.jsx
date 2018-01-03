import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.getData = this.getData.bind(this);
  }
  getData() {
    $.get('http://127.0.0.1:1128/repos', (data, status) => {
      this.setState({
        repos: JSON.parse(data)
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:1128/repos',
      contentType: 'application/json',
      error: (err) => console.log('ERROR', err),
      success: this.getData,
      data: JSON.stringify({'term': term})
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));