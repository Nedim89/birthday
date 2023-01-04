import { useState } from 'react'
import './App.css'
import data from './data'
import List from './List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
       <List /> 

      </section>
    </main>
  )
}

export default App
