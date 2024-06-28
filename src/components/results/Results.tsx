// import { Component } from "react";
// import { PokemonData } from "../../iData";

// interface resultsProps {
//   data: PokemonData[] | null,
//   loading: boolean,
//   error: boolean
// }

// interface resultsState {
//   data: PokemonData[] | null,
//   loading: boolean,
//   error: boolean
// }

// export default class Results extends Component<resultsProps, resultsState> {

//   state: Readonly<resultsState> = {
//     data: this.props.data,
//     loading: this.props.loading,
//     error: this.props.error
//   }

//   render() {
//     let results;
//     if (this.state.loading) {
//       results = <div>Loading...</div>
//     } else if (!this.state.loading && !this.state.error) {
//       const cards = this.props.data?.map(card => {
//         <div className="results__card">{card.name}</div>
//       });
//       results = <div>{cards}</div>
//     }
//       return (
//         {!this.state.loading && !this.state.error && 
//           data.map(starship => (
//             <div key={starship.name}>
//               {starship.name}
//             </div>
//           ))
//         }
//         {this.state.error && <div>Error message</div>}

//         <div className="card"></div>
//       )
// }}