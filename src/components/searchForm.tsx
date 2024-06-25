import { ChangeEvent, Component, ReactNode } from "react";
import './search-form.css';

interface SearchFormState {
  query: string
}

export default class SearchForm extends Component <Component, SearchFormState> {
  constructor(props: Component) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      query: event.target.value
    });
    console.log(event.target.value);
  }

  handleSubmit = () => {
    localStorage.setItem('ag-pokemon-database', this.state.query);
  }

  render(): ReactNode {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search-form" className="search-form__label">Search the Pokemon: </label>
        <input type="search" id="search-form" className="search-form__input" onChange={this.handleInputChange}/>
        <button type="submit" className="search-form__button">Search</button>
      </form>
    );
  }
}