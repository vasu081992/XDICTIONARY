import React, { useState } from 'react'

function Search() {


  const [inputWord,setinputWord] = useState(null)

  const [meaning,setmeaning] = useState(null)

  let customDictionary = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
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
    setmeaning("Type something to get the meaning....")
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