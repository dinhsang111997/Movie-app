import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RiMovie2Fill } from 'react-icons/ri';
import './Header.css';

const SEARCHAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCHAPI + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          props.setMovies(data.results);
        });
      setSearchTerm('');
    }
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // if (searchTerm.length !== 0) {
  //   props.setEmtrySearch(true);
  // } else {
  //   props.setEmtrySearch(false);
  // }

  return (
    <div>
      <header>
        <RiMovie2Fill className="movie-icon" />
        <h2 classsName="movie-logo">TDS MOVIE</h2>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
          <BiSearch className="search-icon" />
        </form>
      </header>
    </div>
  );
};

export default Header;
