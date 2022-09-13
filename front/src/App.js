import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
        <Button buttonStyle={'sub'} > 예시입니다 </Button>
        <Button buttonStyle={'main'} > 예시입니다 </Button>
        <Button buttonStyle={'etc'} width="12opx"> 예시입니다 </Button>
    </div>
  );
}

export default App;
