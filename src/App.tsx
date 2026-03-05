import Home from "./components/Home"
import TaskContextProvider from "./context/TaskContextProvider"

function App() {
  return (
    <div>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </div>
  )
}

export default App