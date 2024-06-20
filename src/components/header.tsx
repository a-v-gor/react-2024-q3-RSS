import { Component, ReactNode } from "react";
import SearchForm from "./searchForm";
import './header.css';

export default class Header extends Component {
  render(): ReactNode {
    return <header className="header">
      <h1 className = 'header__title'>Pokémon Database</h1>
      <SearchForm/>
    </header>
  }
}