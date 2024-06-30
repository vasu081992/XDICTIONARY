import React, { useState } from 'react'

function Search() {


  const [inputWord,setinputWord] = useState(null)

  const [meaning,setmeaning] = useState(null)

  let customDictionary = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." },
      
      { word: "JavaScript", meaning: "A high-level, interpreted programming language used to create and control dynamic website content." },

      { word: "HTML", meaning: "The standard markup language for creating web pages." },

      { word: "CSS", meaning: "A style sheet language used for describing the presentation of a document written in HTML or XML." },

      { word: "Node.js", meaning: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },

      { word: "API", meaning: "A set of functions and protocols for building and interacting with software applications." },

      { word: "Redux", meaning: "A predictable state container for JavaScript apps." },

      { word: "Hook", meaning: "A special function in React that lets you use state and other React features without writing a class." },

      { word: "Prop", meaning: "A special keyword in React for passing data from one component to another." },

      { word: "ComponentDidMount", meaning: "A lifecycle method in React that is invoked immediately after a component is mounted." },

      { word: "JSX", meaning: "A syntax extension for JavaScript used in React to describe what the UI should look like." }



  
  ]
  
const handleSearch = ()=>{

  if(inputWord){

    const found = customDictionary.find(entry => entry.word.toLowerCase() === inputWord.toLowerCase());

    console.log("found",found)

    if(found){
    setmeaning(found.meaning)
    }
    else{
      setmeaning("Word not found in the dictionary.")
    }

  }
  else{
    setmeaning("Type something to get meaning....")
  }
}

const handleInput= (e) =>{

  setinputWord(e.target.value)

}

console.log("typed ip",inputWord)

  return (
    <div>
<h1>Dictionary App</h1>

<label>Search:</label>
<input type="text" placeholder='Search for a word...' value={inputWord} onChange={handleInput}></input>
<button onClick={handleSearch}>Search</button>
<p>Definition:</p>
{meaning &&(
  <div>
  {meaning}
  </div>
)}
    </div>
  )
}

export default Search