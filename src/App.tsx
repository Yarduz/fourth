import React, { useState } from 'react';
import './App.css';
import BG from './components/bg';
import SearchBar from './components/SearchBar';

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

  const [mode, setMode] = useState(brightMode)

  function searchHandler(searchValue: string) {
    searchedUser = searchValue
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
        <SearchBar searchHandler={searchHandler} className="SB" mode={mode.modeClass}
        //  onClick={clickedSearchIcon}
        />
      </div >
    </>
  );
}

export default App;


