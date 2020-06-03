import React from "react"
import axios from "axios"
import {useState} from "react"

import "./Followers.css"

function Follower() {
    const [followers, setFollowers] = useState([])

    const followerHandler = event => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/teagankeith/followers`)
        .then(res => {
            setFollowers(res.data)
            console.log("Followers", followers)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <button onClick={followerHandler}>See Followers</button>
            {
                followers.map(follower => {
                   return (
                   <div className="card">
                        <img className="fwler-img" src={follower.avatar_url} alt="" />
                        <h2 className="flwer-username">{follower.login}</h2>    
                    </div>
                    )
                })
            }
        </div>
    )


}
export default Follower