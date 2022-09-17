import './App.css';
import Router from './mainPage/Router';


function App() {
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
  return (
    
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
