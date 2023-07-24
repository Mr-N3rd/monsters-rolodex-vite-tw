import { useState } from 'react'
import Search  from "./components/search/"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    <>
      <div className={`container flex-col`}>
      <h1>Header Bar</h1>
      <div>
        <Search />
      </div>
      <div>
        <span>cardlist</span>
      </div>
    </div>
    </>
  )
}

export default App
