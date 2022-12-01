import { stringify } from "querystring";
import React from "react";
import "./UserBoard.css"

function UserBoard(props: any) {

    // function modelDate(date: number) {
    //     let myDate = new Date(date)
    //     //  new Date(props.user.properties.created_at.examples[0])
    //     // let year = date.getFullYear().toString()
    //     // let month = date.getMonth().toString()
    //     // let day = date.getDay().toString()
    //     // console.log(`${year} ${month} ${day}`)
    //     // return (`${year} ${month} ${day}`)
    //     return (myDate.getMonth)
    // }

    return (
        <div className="userBoard">
            <div>
                <div className="top">
                    <span>img</span>
                    <div>
                        <h4>{props.user.properties.name.examples[0]}</h4>
                        <p>{props.user.properties.login.examples[0]}</p>
                        <p>{props.user.properties.bio.examples[0]}</p>
                    </div>
                    <p>{props.user.properties.created_at.examples[0]}</p>
                </div>
                <div className="box middle">
                    <div>
                        <p>repos</p>
                        <p>{props.user.properties.owned_private_repos.examples[0]}</p>
                    </div>
                    <div>
                        <p>followers</p>
                        <p>{props.user.properties.followers.examples[0]}</p>
                    </div>
                    <div>
                        <p>following</p>
                        <p>{props.user.properties.following.examples[0]}</p>
                    </div>
                </div>
                <div className="box bottom">
                    <div className="cont">
                        <div>
                            <span className="material-symbols-outlined">location_on</span>
                            <p>{props.user.properties.location.examples[0]}</p>
                        </div>
                        <div>
                            <span className="material-symbols-outlined">link</span>
                            <p>{props.user.properties.blog.examples[0]}</p>
                        </div>
                    </div>
                    <div className="cont">
                        <div>
                            <i className="fa fa-twitter"></i>
                            <p>{props.user.properties.twitter_username.examples[0]}</p>
                        </div>
                        <div>
                            <span className="material-symbols-outlined">apartment</span>
                            <p>{props.user.properties.company.examples[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBoard