import './App.css';
import Input from './component/Input';
import RadioButton from './component/RadioButton';
import Button from './component/Button';
import CheckBox from './component/Checkbox';

function App() {
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))
  return (
    
    <div className="App">
      <Input color={'gray'}></Input>
      <Input color={'yellow'}></Input>
      
      <RadioButton />
        <Button buttonStyle={'sub'} > 예시입니다 </Button>
        <Button buttonStyle={'main'} > 예시입니다 </Button>
        <Button buttonStyle={'etc'} width="13.5rem"> 예시입니다 </Button>
        <CheckBox isChecked={false}/>
    </div>
  );
}

export default App;
