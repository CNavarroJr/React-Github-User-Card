import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import UserCards from './components/UserCards'
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      myGithub: {},
      myFollowers: []
    };
  }

  componentDidMount() {

    axios 
    .get('https://api.github.com/users/CNavarroJr')
    .then(res => {
      console.log(res.data);
      this.setState({
        myGithub: res.data
      });
    })
    .catch(err => console.log('This is an Error', err));

    axios
      .get('https://api.github.com/users/CNavarroJr/followers')
      .then(res => {
        console.log(res.data);
        this.setState({
          myFollowers: res.data
        });
      })
      .catch(err => console.log('I have no followers', err));

  }

  render(){
    return (
      <div>
        <h1>My Github Info</h1>
        <Card myGithub={this.state.myGithub} />
        <h2>My Followers</h2>
        <UserCards myFollowers={this.state.myFollowers} />
      </div>
    )
  }
}

export default App;
