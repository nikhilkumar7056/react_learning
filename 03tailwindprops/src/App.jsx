
import './App.css'
import Card from './compnents/Card'
function App() {
  return (
    <>
     <h1 className="bg-green-950 text-black p-4 rounded-xl mb-4">tailwind CSS</h1>

      <Card userName="Nikhil" addrss="karnal" />
     <Card userName="Nikhil jangra" address="chorkarse"/>
    </>

  )
}

export default App
