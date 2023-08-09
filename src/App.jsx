import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='outer-part'>
      <h1>{count}</h1>
      <div className='buttons'>
      <button id='btn' onClick={() => setCount(count + 1)}>
        increase
      </button>

      <button id='btn-two' onClick={() => setCount(count -1)}>
        decrease
      </button>
      </div>
      </div>
    </>
  )
}

export default App
