import React from "react"
import "./User.css"

class User extends React.Component{
    render(props){
        const { name, avatar_url, repos, followers, company, bio  } = this.props
        return (
           <div className="usercard">
            <img src={avatar_url} alt="profile picture"/>
            <h2>{name}</h2>
            <p>{company}</p>
            <p>Followers: {followers}</p>
            <p>Repos: {repos}</p>
            <p>" {bio} "</p>
           </div> 
        )
    }
}


export default User;