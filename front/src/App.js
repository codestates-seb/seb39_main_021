import './App.css';
import Input from './component/Input';
import RadioButton from './component/RadioButton';
import Button from './component/Button';
import CheckBox from './component/Checkbox';
import List from './Page/List';
import MapList from './Page/MapList';
import LocalFilter from './Page/Filter';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/List" element={<List />}>ee</Route>
          <Route path='/LocalFilter' element={ <LocalFilter />}>ee</Route>
          <Route path='/MapList' element={ <MapList />}>ee</Route>

        </Routes>

        <List />
      </BrowserRouter>
    </div>
  );
}

export default App;
