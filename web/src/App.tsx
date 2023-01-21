import {Habit} from "./components/Habit"
import './styles/global.css'
import './App.css'

function App() {
  return (
    <div>
      <Habit completed={5} />
      <Habit completed={5}/>
      <Habit completed={5}/>
      <Habit completed={5}/>
      <Habit completed={5}/>
      <Habit completed={5}/>
    </div>
  )
}

export default App
