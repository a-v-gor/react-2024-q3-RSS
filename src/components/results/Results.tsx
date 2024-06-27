import { Component } from "react";
import { PokemonData } from "../../iData";

interface resultsProps {
  data: PokemonData[] | null
}

export default class Results extends Component<resultsProps, unknown> {
  resultString = this.props.data === null ? 'No result.' : 'It will be result here.';
  render() {
      return (
        <div className="card">{this.resultString}</div>
      )
}}