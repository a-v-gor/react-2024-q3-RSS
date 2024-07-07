import { Component, FormEvent, ReactNode } from "react";
import {ResponseData, PokemonData} from "./iData";
import Results from "./components/results/Results";

interface AppState {
  query: string,
  data: PokemonData[] | null,
  isLoaded: boolean,
}

class App extends Component <unknown, AppState>  {

  constructor(props: Component) {
    super(props);

    this.state = {
      query: localStorage.getItem('ag-pokemon-database') ?? '',
      data: null,
      isLoaded: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    const defaultQuery = 'https://api.pokemontcg.io/v2/cards/?pageSize=12';
    const stateQuery = this.state.query.replace(/\s/, '*');
    const url = stateQuery.length ? defaultQuery + `&q=name:${stateQuery}*` : defaultQuery;
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey
      }
    }
    await fetch(url, options)
    .then((response) => response.json())
    .then((cardsData: ResponseData) => {
        this.setState(() => {
          return {
            data: cardsData.data,
            isLoaded: true
          }
      }),
      () => {
        console.log('error fetching data');
      }
    })
  }

  componentDidMount = async () => {
    await this.loadData();
  }

  async componentDidUpdate(prevState: AppState) {
  if (prevState.query !== this.state.query && !this.state.isLoaded) {
    await this.loadData()
  }
}

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.childNodes[1] as HTMLInputElement;
    const value = input.value;
    localStorage.setItem('ag-pokemon-database', value);
    this.setState(()=>{
      return {
        query: value,
        isLoaded: false
      }
    })
  }
  render(): ReactNode {
    const [data, isLoaded] = [this.state.data, this.state.isLoaded]
    return (
      <>
        <header className="header">
          <h1 className = 'header__title'>Pokémon Database</h1>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <label htmlFor="search-form" className="search-form__label">Search the Pokemon: </label>
            <input type="search" id="search-form" className="search-form__input" defaultValue={this.state.query}/>
            <button type="submit" className="search-form__button">Search</button>
          </form>
        </header>
        <main className="main">
            <div className="main__wrapper">
              {!isLoaded? 
              <div>Loading...</div> :
                <Results data={data}/>
              }
            </div>
        </main>
      </>
    );
  }
}

export default App;
