import { ChangeEvent, Component, FormEvent, ReactNode } from "react";

interface AppState {
  query: string
}

class App extends Component <unknown, AppState>  {

  state: Readonly<AppState> = {
    query: ''
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

  getQueryFromLS = (): string => {
    const result = localStorage.getItem('ag-pokemon-database');
    return result ?? '';
  }

  render(): ReactNode {
    return (
      <header className="header">
        <h1 className = 'header__title'>Pokémon Database</h1>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label htmlFor="search-form" className="search-form__label">Search the Pokemon: </label>
          <input type="search" id="search-form" className="search-form__input" onChange={this.handleInputChange} defaultValue={this.getQueryFromLS()}/>
          <button type="submit" className="search-form__button">Search</button>
        </form>
      </header>
    );
  }
}

export default App
