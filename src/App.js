import  MyNav  from './components/MyNav';
import  SearchBar  from './components/SearchBar';
import {articlesByIdAPI} from './utils';

function App() {


  return (
    <div className="App">
      <h1>Hello App</h1>
      <MyNav />
      <SearchBar />
    </div>         
  );
}

export default App;



