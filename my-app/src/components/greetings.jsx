import React, { Component } from 'react'

const name = 'Mi Mami';

export default class Greetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frase: "yo quiero mucho a",
      num : 0
    }
  }

  numPlus = () => {
    this.setState((numPrev) => (
      {
        num: numPrev.num + 1
      }
    ))
  }

  render() {
    return (
      <div>
        <h1>HOLAAAAAA ENFERMERA!</h1>
        <p>{this.state.frase} {name}</p>
        <p> {this.props.gata}</p>
        <p> {this.state.num}</p>
        <button onClick={this.numPlus}> + </button>
      </div>
    )
  }
}

