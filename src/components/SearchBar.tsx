import React, { useState } from "react";
import "./SearchBar.css"

let saver: string;

function SearchBar(props: any) {

    function inputChange(event: any) {
        saver = event.target.value
    }

    function searchHandler() {
        props.searchHandler(saver);
    }

    return (
        <div className={`SB ${props.mode}`}>
            <h3>search username :</h3>
            <input className="input" type="text" onChange={inputChange} />
            <span className="material-symbols-outlined icon" onClick={searchHandler}>
                search
            </span>
        </div>
    );
}

export default SearchBar;
