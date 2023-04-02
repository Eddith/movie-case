import React from "react"
import "./App.css"

// Components
import AppRouter from "./router/AppRouter"

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  )
}

export default App
