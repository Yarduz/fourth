import React from "react";
import "./bg.css"

function BG(props: any) {
    console.log(props)
    let classString: string = `bg ${props.mode}`;
    return (
        <div className={classString}>
        </div>
    );
}

export default BG;
