import ApiKey from './Movie/ApiKey'
import Movie from './Movie/Component/Movie';

function App() {
  return (
    <div className="App">
      <Movie title="Netflix Originals" url={ApiKey.fetchNetflixOriginals} />
      <Movie title="Trending" url={ApiKey.fetchTrending} />
    
    </div>
  );
}

export default App;
