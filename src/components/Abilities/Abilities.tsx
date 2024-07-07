import { Component } from "react";

interface iAbilityProps {
  data:
    | {
        name: string;
        text: string;
        type: string;
      }[]
    | undefined;
}

export default class Abilities extends Component<iAbilityProps, unknown> {
  render() {
    if (this.props?.data !== undefined) {
      return (
        <div className="card__abilities">
          <h3 className="card__subtitle">Abilities</h3>
          {this.props.data.map((ability) => {
            return (
              <article key={ability.name} className="card__ability ability">
                <h4 className="ability__title">
                  {ability.name} (type: {ability.type})
                </h4>
                <p className="ability__text">{ability.text}</p>
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