import { Component, ReactNode } from "react";
import './search-form.css';

export default class SearchForm extends Component {
  render(): ReactNode {
    return <form className="search-form">
      <label htmlFor="search-form" className="search-form__label">Search the Pokemon: </label>
      <input type="search" name="q" id="search-form" className="search-form__input"/>
      <button className="search-form__button">Search</button>
    </form>
  }
}