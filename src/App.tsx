import './App.css'
import { Card } from './assets/components/Card'
import {info} from './assets/data.js'

function App() {


  return (
    <>
    <Card profileInfo={{...info}}/>
    </>
  )
}

export default App
