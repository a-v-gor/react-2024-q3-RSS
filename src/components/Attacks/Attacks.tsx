import { Component } from "react";

interface iAttackProps {
  data:
    | {
        name: string;
        cost: string[];
        convertedEnergyCost: number;
        damage: string;
        text: string;
      }[]
    | undefined;
}

export default class Attacks extends Component<iAttackProps, unknown> {
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
                {attack.damage ? (
                  <p className="attack__text">Damage: {attack.damage}</p>
                ) : (
                  <></>
                )}
              </article>
            );
          })}
        </div>
      );
    } else {
      return <></>;
    }
  }
}