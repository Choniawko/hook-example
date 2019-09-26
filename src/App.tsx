import React from "react"
import { Logo } from "./Logo"
import "./App.css"
import { useSize } from "./useSize"

interface Props {}

const App: React.FC<Props> = () => {
  const { size, setSize } = useSize("10")

  return (
    <div className="App">
      <header className="App-header">
        <Logo color="tomato" height={`${size}vmin`} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="range" value={size} onChange={e => setSize(e.target.value)} />
      </header>
    </div>
  )
}

export default App
