import { useState } from 'react'
import heroImg from './assets/hero.png'
import List from './components/List.jsx'
import './App.css'

/*
1.I'm going to start by defining the formState we are going to use
 1.1 We're trying to use an array
2.Start defining the static elements of the HTML in App
 2.1 h1
 2.2 input
 2.3 button + p
 2.4 div, section, etc 
3.first Status functions (onChange, onClick or onSubmit)
 3.1 Here we have to manage onChange for the input element
 3.2 Here we have to manage onSubmit with click and Enter to add the toDo or onClick because of the array state
4.Going to List
5.Styling CSS
 5.1 App: Flex, margins, typo, colors, size
 5.2 List: flex, spacing, margins, colors, underline
*/

function App() {

  const [listState, setListState] = useState([]);
  const [text, setText] = useState('');

  console.log(listState);

  let handleChange = (event) => {
    setText(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    setListState([...listState, { id: crypto.randomUUID(), toDo: text, check: false, show: false }]);
    setText('');
  }

  let done = (event) => {
    let copyOfState = structuredClone(listState);
    copyOfState[event.target.id].check = event.target.checked;
    setListState(copyOfState);
  }

  let deleteToDo = (event) => {
    let copyOfState = structuredClone(listState);
    copyOfState.splice(event.target.id, 1)
    setListState(copyOfState);
  }

  let handleMouseEnter = (event) => {
    let copyOfState = structuredClone(listState);
    copyOfState[event.target.id].show = true;
    setListState(copyOfState);
  }
  let handleMouseLeave = (event) => {
    let copyOfState = structuredClone(listState);
    copyOfState[event.target.id].show = false;
    setListState(copyOfState);
  }


  return (
    <>
      <header className='header'>
        <h1>ToDo List</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name="toDo" value={text} />
          <div className='submitSec'>
            <button>Submit</button>
            <p>Click or Enter</p>
          </div>
        </form>
      </header>
      <main className='main'>
        <List printList={listState} done={done} deleteToDo={deleteToDo} mouseEnter={handleMouseEnter} mouseLeave={handleMouseLeave}/>
      </main>
    </>
  )
}

export default App

