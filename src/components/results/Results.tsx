import { Component } from "react";
import { PokemonData } from "../../iData";

interface resultsProps {
  data: PokemonData[] | null,
}

export default class Results extends Component<resultsProps, unknown> {
  render() {
    return (
      <ul>
        {this.props.data?.map((card) => (
          <li key={card.id} className="results__card">{card.name}</li>
        ))}
      </ul>
    )
  }
}