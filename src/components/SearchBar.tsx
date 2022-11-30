import React from "react";
import "./SearchBar.css"

function SearchBar(props: any) {
    return (
        <div className={`SB ${props.mode}`}>
            <h3>search username :</h3>
            <input className="input" type="text" />
            <span className="material-symbols-outlined icon" onClick={props.onClick}>
                search
            </span>
        </div>
    );
}

export default SearchBar;
