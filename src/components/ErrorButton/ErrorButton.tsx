import { Component } from "react";

export default class ErrorButton extends Component {
  handleClick = () => {
    throw new Error('Test error')
  }

  render() {
    return (
      <button className="error" onClick={this.handleClick}>Throw error</button>
    )
  }
}