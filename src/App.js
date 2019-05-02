import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: [],
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/random?api_key=BZLIS5RIJLfdvLq2k1e9LuVrdkXopDY4&tag=${this.state.text}&rating=G`)
      .then(res => {
        this.setState({
          image: res.data.data.url
            + "/fullscreen"
        })
        console.log(this.state.image)
      })
      .catch(error => {
        console.log(error)
      })
    console.log("handleClick: ", this.state.text)
  }

  handleClick = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Animals</h1>
        <form method="post" onSubmit={this.handleSubmit}>

          <div>
            <p>Choose an animal that you would like to see in a GIF</p>
            <input name="action" type="submit" value="Cats" onClick={this.handleClick}>{console.log(this.state.text)}</input>
            <input name="action" type="submit" value="Dogs" onClick={this.handleClick}></input>
            <input name="action" type="submit" value="Elephants" onClick={this.handleClick}></input>
            <input name="action" type="submit" value="Lions" onClick={this.handleClick}></input>
            <input name="action" id="monkey" type="submit" value="Monkeys" onClick={this.handleClick}></input>
          </div>

          <div className="iframe-parent">
            <iframe
              width="70%"
              height="350"
              // scrolling="no"
              // frameborder="no"
              src={this.state.image} alt="loading" />
          </div>

        </form>
      </div>

    );
  }
}

export default App;
