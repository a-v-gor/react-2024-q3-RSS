import { ChangeEvent, Component, ReactNode } from "react";
import './search-form.css';

export default class SearchForm extends Component<unknown, { query: string }> {
  constructor(props: Component) {
    super(props);
    this.state = {query: ''}
  }

  saveQuery(string: string | undefined | null) {
    if(typeof string === 'string') {
      this.setState({
        query: string
      });
    };
  }

  // componentDidMount(): void {
  //   const queryString = localStorage.getItem('ag-pokemon-query');
  //   this.saveQuery(queryString);
  // }

  componentWillUnmount(): void {
    localStorage.setItem('ag-pokemon-query', this.state.query);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target) return;
    const queryString: string =  event.target.value;
    if(typeof queryString === 'string') {
      this.setState({
        query: queryString
      });
    };
  }

  render(): ReactNode {
    return (
      <form className="search-form">
        <label htmlFor="search-form" className="search-form__label">Search the Pokemon: </label>
        <input type="search" name="q" id="search-form" className="search-form__input" value={this.state.query}/>
        <button className="search-form__button">Search</button>
      </form>
    );
  }
}