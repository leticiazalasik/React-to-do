import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  //Função para trazer os filmes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        const res = await fetch(topRatedUrl);
        const data = await res.json();

        setTopMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <h2 className="title-page">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Home;
