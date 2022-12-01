import React, { useState } from "react";
import "./SearchBar.css"

function SearchBar(props: any) {
    const [user, setUser] = useState("")

    function inputChange(event: any) {
        setUser(event.target.value)
    }

    function searchHandler() {
        fetch(`https://api.github.com/users/${user}`)
            .then(restData => {
                if (restData.status !== 200) {
                    return Promise.reject("user not found")
                }
                else {
                    props.setError(false)
                    return restData.json()
                }
            })
            .then(data => props.searchHandler(data))
            .catch(err => {
                console.log(err)
                props.setError(true)
            })
    }
    return (
        <div className={`SB ${props.mode}`}>
            <h3>search username :</h3>
            <input className="input" type="text" value={user} onChange={inputChange} />
            <span className="material-symbols-outlined icon" onClick={searchHandler}>
                search
            </span>
        </div>
    );
}

export default SearchBar;
