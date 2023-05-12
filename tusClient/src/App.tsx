import { useState } from 'react'
import './App.css'
import Upload from './component/Upload'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Upload />
  )
}

export default App
