import React, { Component } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';

class App extends Component {
  state = {
    userData: [],
    title: "Random Users"
  };

  loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=6");
    const data = await response.json();
    return data.results;
  };

  handleClick = async () => {
    const newUserData = await this.loadData();

    this.setState({
      userData: newUserData
    })
  }

  async componentDidMount() {
    const userData = this.loadData();

    this.setState({
      userData: userData
    })
  }

  render() {
    const { title, userData } = this.state;

    return (
      <div className= "App">
        <h1>{title}</h1>
        <button onClick={this.handleClick}>Check Out These Randos</button>
        <UserCardList userData = { userData } />
      </div>
    );
  }
}

export default App;
