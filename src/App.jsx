import { useState } from 'react'
import './App.css'
import { Title } from './components/Title'
import { Table } from './components/Table'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <Title text="Horário da Semana"/>
      <Table/>
      <Button text="Definir horário"/>
    </main>
    </>
  )
}

export default App
