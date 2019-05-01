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

  // handleSubmit = (e) => {

  //   e.preventDefault()
  //   axios.get(`https://api.giphy.com/v1/gifs/random?api_key=BZLIS5RIJLfdvLq2k1e9LuVrdkXopDY4&tag=${this.state.text}&rating=G`)

  //     .then(res => {

  //       this.setState({
  //         image: res.data.data.url + "/fullscreen"
  //       })
  //       console.log(this.state.image)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.setState({ text: e.target.value })
    axios.get(`https://api.giphy.com/v1/gifs/random?api_key=BZLIS5RIJLfdvLq2k1e9LuVrdkXopDY4&tag=${this.state.text}&rating=G`)

      .then(res => {

        this.setState({
          image: res.data.data.url + "/fullscreen",

        })
        console.log(this.state.image)
      })
      .catch(error => {
        console.log(error)
      })
    console.log("handleClick: ", this.state.text)
  }

  // handleChange = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     text: e.target.value
  //   })
  // }

  // handleClick = (e) => {
  //   e.preventDefault()
  //   this.setState({ text: e.target.value })
  //   axios.get(`https://api.giphy.com/v1/gifs/random?api_key=BZLIS5RIJLfdvLq2k1e9LuVrdkXopDY4&tag=${this.state.text}&rating=G`)

  //     .then(res => {

  //       this.setState({
  //         image: res.data.data.url + "/fullscreen",

  //       })
  //       console.log(this.state.image)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   console.log("handleClick: ", this.state.text)
  // }

  handleClick = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Animals</h1>
        <form method="post" onSubmit={this.handleSubmit}>
          <p>Type in the name of an animal from the list below</p>
          {/* <input
            onChange={this.handleChange}
            type="text"
          ></input>
          <br />
          <input type="submit" value="Submit"></input> */}

          <input name="action" type="submit" value="Cats" onClick={this.handleClick}>{console.log(this.state.text)}</input>
          <input name="action" type="submit" value="Dogs" onClick={this.handleClick}></input>
          <input name="action" type="submit" value="Elephants" onClick={this.handleClick}></input>
          <input name="action" type="submit" value="Lions" onClick={this.handleClick}></input>
          <input name="action" id="monkey" type="submit" value="Monkeys" onClick={this.handleClick}></input>



          <iframe
            width="370"
            height="350"
            src={this.state.image} alt="loading" />
        </form>
      </div>

    );
  }
}

export default App;
