import React, {Component} from 'react'
import axios from 'axios'
import Search from './Search.jsx'
import Faves from './Faves.jsx'
import {GH_TOKEN, GH_USER} from '../secrets.js'


class App extends Component {
  constructor () {
    super ()
    this.ghGet = this.ghGet.bind(this)
  }

  ghGet () {
    axios({url: `https://api.github.com/users/${GH_USER}/starred`,
      headers: 
        { Authorization: GH_TOKEN,
          Accept: 'application/vnd.github.v3+json' } })
    .then(response => console.log(response))
  }

  render() {
    return (
      <div>
        <header><h1>My GitHub Faves</h1></header>
        <Search ghGet={this.ghGet}/>
        <Faves />
      </div>
    );
  }
}
export default App;