import React from 'react'

function Card(props){
    return(
        <div className='outerDiv'>
        <div className='card'>
            <div className='id'>{props.theData[props.Num].id}/25</div>
            <div className='title'>{props.theData[props.Num].name.first} {props.theData[props.Num].name.last}</div>
            <div className='from'>From: {props.theData[props.Num].city}, {props.theData[props.Num].country}</div>
            <div className='job'>Title: {props.theData[props.Num].title}</div>
            <div className='employer'>Employer: {props.theData[props.Num].employer}</div>
            {/* <div className='FavMovie'>Favorite Movies:</div> */}
            <ol>Favorite Movies:
                <li>{props.theData[props.Num].favoriteMovies[0]}</li>
                <li>{props.theData[props.Num].favoriteMovies[1]}</li>
                <li>{props.theData[props.Num].favoriteMovies[2]}</li>
            </ol>
        </div>
        </div>
    )
}

export default Card