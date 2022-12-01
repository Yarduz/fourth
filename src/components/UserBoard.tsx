import React, { useState } from "react";
import "./UserBoard.css"

function UserBoard(props: any) {

    if (props.error === true) {
        return (
            <div>
                <h1>you were wrong you fuck</h1>
            </div>
        )
    }
    if (props.hide === true) {
        return (null)
    }
    return (
        <div className="userBoard">
            <div>
                <div className="top">
                    <span>img</span>
                    <div>
                        <h4>{props.user.name}</h4>
                        <p>{props.user.login}</p>
                        <p>{props.user.bio}</p>
                    </div>
                    <p>{props.user.created_at}</p>
                </div>
                <div className="box middle">
                    <div>
                        <p>repos</p>
                        <p>{props.user.owned_private_repos}</p>
                    </div>
                    <div>
                        <p>followers</p>
                        <p>{props.user.followers}</p>
                    </div>
                    <div>
                        <p>following</p>
                        <p>{props.user.following}</p>
                    </div>
                </div>
                <div className="box bottom">
                    <div className="cont">
                        <div>
                            <span className="material-symbols-outlined">location_on</span>
                            <p>{props.user.location}</p>
                        </div>
                        <div>
                            <span className="material-symbols-outlined">link</span>
                            <p>{props.user.blog}</p>
                        </div>
                    </div>
                    <div className="cont">
                        <div>
                            <i className="fa fa-twitter"></i>
                            <p>{props.user.twitter_username}</p>
                        </div>
                        <div>
                            <span className="material-symbols-outlined">apartment</span>
                            <p>{props.user.company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBoard