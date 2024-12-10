import './App.css'
import Person from './components/Person/Person'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  const dishes = [
    {
        id: 1,
        name: 'plato 1',
        description: 'Este es el plato 1',
        price: 10
    },
    {
        id: 2,
        name: 'plato 2',
        description: 'Este es el plato 2',
        price: 20
    },
    {
        id: 3,
        name: 'plato 3',
        description: 'Este es el plato 3',
        price: 15
    }
]

  return (
    <>
    <Person name="Xavi" surname="Antúnez" age="25"/>
    <Person name="Mario" surname="Tomás" age="23"/>
    <Person name="Breyner" surname="Pavas" age="22"/>
    <Header/>
    <Home dishes={dishes}/>
    </>
  )
}

export default App