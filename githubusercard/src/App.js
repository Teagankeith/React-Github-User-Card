import React from 'react';
import axios from "axios";
import './App.css';
import User from "./components/User"
import Follower from "./components/Followers"








class App extends React.Component {
  constructor(){
  super()
  this.state = { 
    name: "",
    bio: "",
    company: "",
    avatar_url: "",
    followers: 0,
    public_repos: 0,
  };
}
      
 
  componentDidMount() {
    axios 
      .get('https://api.github.com/users/teagankeith')
      .then(res => {
        console.log(res.data)
        this.setState({ name: res.data.name });
        this.setState({ avatar_url: res.data.avatar_url });
        this.setState({ bio: res.data.bio });
        this.setState({ followers: res.data.followers });
        this.setState({ company: res.data.company });
        this.setState({ public_repos: res.data.public_repos });
      })
  }

  
  render(){
    return (
      <div className="App">
        <h1>React Github Usercard</h1>
        <User name={this.state.name} bio={this.state.bio} company= {this.state.company} avatar_url={this.state.avatar_url} followers={this.state.followers} repos={this.state.public_repos} />
        <Follower/>
      </div>
    );
  }
}
    
export default App;
