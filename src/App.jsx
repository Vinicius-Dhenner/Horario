import { useState } from 'react'
import { Table } from './components/Table/Title'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Table/>
    </>
  )
}

export default App
