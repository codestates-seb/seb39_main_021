import './App.css';
import { useEffect, useState } from 'react';
import Button from './component/Button';
import CheckBox from './component/Checkbox';

function App() {

  return (
    <div className="App">
        <Button buttonStyle={'sub'} > 예시입니다 </Button>
        <Button buttonStyle={'main'} > 예시입니다 </Button>
        <Button buttonStyle={'etc'} width="12opx"> 예시입니다 </Button>
        <CheckBox isChecked={false}/>
    </div>
  );
}

export default App;
