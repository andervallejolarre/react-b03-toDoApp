import { useState } from 'react'
import heroImg from './assets/hero.png'
import List from './components/List.jsx'
import './App.css'

function App() {

  const [listState, setListState] = useState([]);
  const [text, setText] = useState('');

  let handleChange = (event) => {
    setText(event.target.value);
  }

  let handleSubmit = () => {
    setListState([...listState, text]);
    setText('');

  }


  /*
 1.I'm going to start by defining the formState we are going to use
   1.1 We're trying to use an array
 2.Start defining the static elements of the HTML in App
   2.1 h1
   2.2 input
   2.3 button + p
   2.4 div, section, etc 
 3.first Status functions (onChange, obSubmit)
   3.1 Here we have to manage onChange for the input element
   3.2 Here we have to manage onSubmit with click and Enter to add the toDo
 4.List html elements
   4.1 ul element wrapping everything
   4.2 li elements with checkbox, text and erase icon
 5. map function to render li elements for every item in the list
 6.Status functions
   6.1 onClick (app.jsx?)
   6.2 onMouse (app.jsx?)
 7.Styling CSS
   7.1 App: Flex, margins, typo, colors, size
   7.2 List: flex, spacing, margins, colors, underline
  */

  return (
    <>
      <header className='header'>
        <h1>ToDo List</h1>
        <input onChange={handleChange} name="toDo" value={text} />
        <div className='submitSec'>
          <button onClick={handleSubmit}>Submit</button>
          <p>Click or Enter</p>
        </div>
      </header>
      <main className='main'>
        <List printList={listState}/>
      </main>
    </>
  )
}

export default App
