import { Component } from "react";
import { PokemonData } from "../../iData";
import ('./results.css')

interface resultsProps {
  data: PokemonData[] | null,
}

export default class Results extends Component<resultsProps, unknown> {
  render() {
    console.log(this.props);
    
    return (
      <section className="results__list">
        {this.props.data?.map((card) => (
          <article key={card.id} className="results__card card">
            <h2 className="card__title">{card.name}</h2>
            <p className="card__description">HP: {card.hp}.</p>
            <h3 className="card__ability-title">{}</h3>
            <img src={card.images.small} alt={card.name} className="card__img" />
            
          </article>
        ))}
      </section>
    )
  }
}