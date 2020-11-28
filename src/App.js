import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row isLarge title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;


//