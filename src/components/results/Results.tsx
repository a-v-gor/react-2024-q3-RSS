import { Component } from "react";
import { PokemonData } from "../../iData";
import ('./results.css')

interface iAbilityProps {
  data: {
    name: string,
    text: string,
    type: string
  }[] | undefined
}

class Abilities extends Component<iAbilityProps, unknown> {
  render() {
    if (this.props?.data !== undefined) {
      return (
        <div className="card__abilities">
          <h3 className="card__subtitle">Abilities</h3>
          {this.props.data.map((ability) => {
            return (
              <article key={ability.name} className="card__ability ability">
                <h4 className="ability__title">{ability.name} (type: {ability.type})</h4>
                <p className="ability__text">{ability.text}</p>
              </article>
            )
          })}
        </div>
      )
    } else {
      return <></>
    }
  }
}

interface iAttackProps {
  data: {
    name: string,
    cost: string[],
    convertedEnergyCost: number,
    damage: string,
    text: string,
}[] | undefined
}

class Attacks extends Component<iAttackProps, unknown> {
  render() {
    if (this.props?.data !== undefined) {
      return (
        <div className="card__attacks">
          <h3 className="card__subtitle">Attacks</h3>
          {this.props.data.map((attack) => {
            return (
              <article key={attack.name} className="card__attack attack">
                <h4 className="attack__title">{attack.name}</h4>
                <p className="attack__text">{attack.text}</p>
                {attack.damage? <p className="attack__text">Damage: {attack.damage}</p> : <></>}
              </article>
            )
          })}
        </div>
      )
    } else {
      return <></>
    }
  }
}

interface iResultsProps {
  data: PokemonData[] | null,
}

export default class Results extends Component<iResultsProps, unknown> {
  render() {
    console.log(this.props.data);
    
    return (
      <section className="results__list">
        {this.props.data?.map((card) => (
          <article key={card.id} className="results__card card">
            <div className="card__description-wrapper">
              <h2 className="card__title">{card.name}</h2>
              {card.hp?<p className="card__description-text">HP: {card.hp}.</p> : <></>}
              {card.types?<p className="card__description-text">Types: {card.types.join(', ')}.</p> : <></>}
              {card.abilities?<Abilities data={card.abilities} /> : <></>}
              {card.attacks?<Attacks data={card.attacks} /> : <></>}
              {card.flavorText?<p className="card__description-text">{card.flavorText}.</p> : <></>}
            </div>
            <img src={card.images.small} alt={card.name} className="card__img" />
          </article>
        ))}
      </section>
    )
  }
}