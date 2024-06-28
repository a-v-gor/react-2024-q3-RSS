import { ChangeEvent, Component, FormEvent, ReactNode } from "react";
import {ResponseData, PokemonData} from "./iData";
// import Results from "./components/results/Results";

interface AppState {
  query: string,
  data: PokemonData[] | null,
  loading: boolean,
  error: boolean
}

class App extends Component <unknown, AppState>  {

  state: Readonly<AppState> = {
    query: localStorage.getItem('ag-pokemon-database') ?? '',
    data: null,
    loading: true,
    error: false
  }

  async componentDidMount() {
    const url = 'https://api.pokemontcg.io/v2/cards/';
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': 'cdfdabe0-4e3b-47d9-bb45-d216d2ce8d79'
      }
    }
    await fetch(url, options)
    .then((response) => response.json())
    .then((cardsData: ResponseData) => {
        this.setState({
        data: cardsData.data,
        loading: false
      }),
      () => {
        this.setState({
          loading: false, 
          error: true
        })
      }
    })
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('ag-pokemon-database', this.state.query);
  }

  render(): ReactNode {
    return (
      <>
        <header className="header">
          <h1 className = 'header__title'>Pokémon Database</h1>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <label htmlFor="search-form" className="search-form__label">Search the Pokemon: </label>
            <input type="search" id="search-form" className="search-form__input" onChange={this.handleInputChange} defaultValue={this.state.query}/>
            <button type="submit" className="search-form__button">Search</button>
          </form>
        </header>
        <main className="main">
          <div className="main__wrapper">
            {/* <Results data={this.state.data} loading = {this.state.loading} error= {this.state.error}/> */}
          </div>
        </main>
      </>
    );
  }
}

export default App;
