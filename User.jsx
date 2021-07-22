import React from 'react'

export default function User(props) {
    return (
    <div>
        <div>
       <img src=
       {props.uProfile[0].avatar} alt={props.uProfile[0].name}/>
        <h1> {props.uProfile[0].name}</h1>
       <p>Location:</p> <h2>{props.uProfile[0].location}</h2>
       <p>Food Type:</p> <h2> {props.uProfile[0].foodType}</h2>
       <p>Age: </p> <h2>{props.uProfile[0].age}</h2>
       <p>Likes:</p> <h2> {props.uProfile[0].likes}</h2>
       <p>Twitter Username: </p> <h2>{props.uProfile[0].twitterUsername}</h2>
       <p><a href={`https://twitter.com/@${props.uProfile[0].twitterUsername}`}>@{props.uProfile[0].twitterUsername}</a></p>     
        </div> 

        <div>
       <img src=
       {props.uProfile[1].avatar} alt={props.uProfile[1].name} />
       <h1>{props.uProfile[1].name}</h1>
       <p>Location:</p> <h2>{props.uProfile[1].location}</h2>
       <p>Food Type:</p> <h2> {props.uProfile[1].foodType}</h2>
       <p>Age: </p> <h2>{props.uProfile[1].age}</h2>
       <p>Likes:</p> <h2> {props.uProfile[1].likes}</h2>
       <p>Twitter Username: </p> <h2>{props.uProfile[1].twitterUsername}</h2>
       <p><a href={`https://twitter.com/@${props.uProfile[1].twitterUsername}`}>@{props.uProfile[1].twitterUsername}</a></p>
            </div>
        
        
        </div>


        
    )
}
