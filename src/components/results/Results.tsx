import { Component } from "react";
import { PokemonData } from "../../iData";
import Abilities from "../Abilities/Abilities";
import Attacks from "../Attacks/Attacks";
import("./results.css");

interface iResultsProps {
  data: PokemonData[] | null;
}
interface iResultsState {
  error: boolean;
}

export default class Results extends Component<iResultsProps, iResultsState> {
  constructor(props: iResultsProps) {
    super(props);

    this.state = {
      error: false,
    };

    this.throwError = this.throwError.bind(this);
  }

  throwError = () => {
    this.setState({
      error: true,
    });
  };

  render() {
    if (this.state.error) {
      throw new Error("Test error");
    }
    return (
      <>
        <button className="error-button" onClick={this.throwError}>
          Throw an error!!!
        </button>
        <section className="results__list">
          {this.props.data?.length ? (
            this.props.data?.map((card) => (
              <article key={card.id} className="results__card card">
                <div className="card__description-wrapper">
                  <h2 className="card__title">{card.name}</h2>
                  {card.hp ? (
                    <p className="card__description-text">HP: {card.hp}.</p>
                  ) : (
                    <></>
                  )}
                  {card.types ? (
                    <p className="card__description-text">
                      Types: {card.types.join(", ")}.
                    </p>
                  ) : (
                    <></>
                  )}
                  {card.abilities ? <Abilities data={card.abilities} /> : <></>}
                  {card.attacks ? <Attacks data={card.attacks} /> : <></>}
                  {card.flavorText ? (
                    <p className="card__description-text">{card.flavorText}.</p>
                  ) : (
                    <></>
                  )}
                </div>
                <img
                  src={card.images.small}
                  alt={card.name}
                  className="card__img"
                />
              </article>
            ))
          ) : (
            <p className="info">No results.</p>
          )}
        </section>
      </>
    );
  }
}
