import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';

const APIURL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const SEARCHAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const App = (props) => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [emtrySearch, setEmtrySearch] = useState(false);
  useEffect(() => {
    getMovies(APIURL);
  }, []);
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(SEARCHAPI + searchTerm)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.results);
  //     });
  // };
  // const handleOnChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  return (
    <>
      {/* {emtrySearch ? (
        <Header setMovies={setMovies} setEmtrySearch={setEmtrySearch} />
      ) : (
        <Header setEmtrySearch={setEmtrySearch} />
      )} */}
      <Header setMovies={setMovies} />

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
};

export default App;
