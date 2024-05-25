import MovieView from './components/MovieView'
import movies from './assets/movies'

function App() {

  return (
      <>
          <MovieView moviesData={movies[0]} headingText="My movies" />
          <MovieView moviesData={movies[1]} />
      </>
  );
}

export default App
