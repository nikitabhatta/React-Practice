
import "./App.css";
import MovieCard from "./components/MovieCard"

function App() {
  const movieNumber = 1;

  
  return (
    <>
    {movieNumber === 1 ? (
      <MovieCard movie={{title: "Harry Potter", release_date:"2024"}}/>
    ) : (
   <MovieCard movie={{title: "Sunibha", release_date:"2025"}}/>
    )}
   </>
  );
}

export default App;
