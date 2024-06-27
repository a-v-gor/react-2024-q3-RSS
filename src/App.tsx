import { ChangeEvent, Component, FormEvent, ReactNode } from "react";
import {ResponseData, PokemonData} from "./iData";
import Results from "./components/results/Results";

interface AppState {
  query: string,
  data: PokemonData[] | null
}

class App extends Component <unknown, AppState>  {

  state: Readonly<AppState> = {
    query: localStorage.getItem('ag-pokemon-database') ?? '',
    data: null
  }

  async componentDidMount(): Promise<void> {
    if (this.state.data === null) {
      await this.getCardsData();
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log(this.state.data);
    localStorage.setItem('ag-pokemon-database', this.state.query);
  }

  getCardsData = async (): Promise<void> => {
    const url = 'https://api.pokemontcg.io/v2/cards/';
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': 'cdfdabe0-4e3b-47d9-bb45-d216d2ce8d79'
      }
    }
    const response = await fetch(url, options);
    const cardsData: ResponseData = await response.json() as ResponseData;
    this.setState({
      data: cardsData.data
    })
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
            <Results data={this.state.data}/>
          </div>
        </main>
      </>
    );
  }
}

export default App;
