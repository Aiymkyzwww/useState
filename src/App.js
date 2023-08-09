import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [state, setstate] = useState(false)
  const [data, setData] = useState([])


  const userText = () => {
    setstate((prev) => !prev)
  }



  const onSave = (data) => {
    setData((prev) => {
      return [...prev, data]
    })
  }



  return (
    <div className="App">
      {state && <Form onSave={onSave} close={userText} />}
      {data.map((elem) => {
        return (
          <div key={elem.id}>
            <h1 style={{ color: 'red' }}>{elem.email}</h1>
          </div>
        )
      })}
      <button onClick={userText}>ADD</button>
    </div>
  );
}

export default App;
