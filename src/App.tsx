import React, { useState } from 'react';
import './App.css';
import BG from './components/bg';
import SearchBar from './components/SearchBar';
import UserBoard from './components/UserBoard';
import mockUser from './responseSchema.json'

const brightMode = {
  modeName: "dark mode",
  modeClass: "",
  modeIcon: "dark_mode"
}
const darkMode = {
  modeName: "eye burning mode",
  modeClass: "dark",
  modeIcon: "light_mode"
}

let searchedUser: string

function App() {

  const [searched, setSearched] = useState(true)
  const [mode, setMode] = useState(brightMode)
  const [user, setUser] = useState(mockUser.oneOf[0])
  const [error, setError] = useState(false)

  function searchHandler(recievedData: any) {
    console.log(recievedData)
    setUser(recievedData)
    setSearched(false)
  }

  // function clickedSearchIcon(event: any) {
  //   let searchValue = event.target.previousElementSibling.value
  //   console.log(searchValue)
  // }

  function changeModes() {
    if (mode.modeName === "dark mode") { setMode(darkMode) }
    else { setMode(brightMode) }
  }

  return (
    <>
      <BG mode={mode.modeClass} />
      <div className={`App ${mode.modeClass}`} >
        <div className='top'>
          <h3 className={mode.modeClass}>Devfinder</h3>
          <div className='topRight'>
            <p className={mode.modeClass}>{mode.modeName}</p>
            <span onClick={changeModes} className={`material-symbols-outlined ${mode.modeClass}`}>
              {mode.modeIcon}
            </span>
          </div>
        </div>
        <SearchBar searchHandler={searchHandler} setError={setError} className="SB" mode={mode.modeClass}
        //  onClick={clickedSearchIcon}
        />
        <UserBoard hide={searched} user={user} error={error} />
      </div >
    </>
  );
}

export default App;


