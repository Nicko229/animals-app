import React, { Component } from 'react';
import ImageLoader from 'react-load-image';
import axios from 'axios';
// import ralph from 'https://sketchok.com/images/articles/01-cartoons/001-simpsons/27/11.jpg';


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
    axios.get('http://api.giphy.com/v1/gifs/search?q=cat&api_key=BZLIS5RIJLfdvLq2k1e9LuVrdkXopDY4')
      .then(res => {

        this.setState({ image: res.data.data[0].url + '/fullscreen' })
        console.log(this.state.image)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Animals</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Type in the name of an animal from the list below</p>
          <input
            type="text"
          ></input>
          <br />
          <input type="submit" value="Submit"></input>
          <ul>
            <li>Cats</li>
            <li>Dogs</li>
            <li>Elephants</li>
            <li>Lions</li>
            <li>Monkeys</li>
          </ul>

          {/* <ImageLoader src='https://giphy.com/gifs/leroypatterson-cat-glasses-CjmvTCZf2U3p09Cn0h' /> */}
          <iframe
            width="370"
            height="350"
            src={this.state.image} alt="loading" />
          {/* </ImageLoader>  */}
        </form>
      </div>

    );
  }
}

export default App;
