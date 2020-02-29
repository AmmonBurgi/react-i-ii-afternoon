import React from 'react'

function Card(props){
    return(
        <div className='outerDiv'>
        <div className='card'>
            <div className='id'>
                <p className='pTag'>{props.theData[props.Num].name.first} {props.theData[props.Num].name.last}</p> 
            {props.theData[props.Num].id}/25 
            </div>
            <div className='from'>
                <p className='bold'>From:</p>
                {props.theData[props.Num].city}, {props.theData[props.Num].country}</div>
            <div className='job'>
                <p className='bold'>Job Title: </p>  {props.theData[props.Num].title}</div>
            <div className='employer'>
                <p className='bold'>Employer:</p> {props.theData[props.Num].employer}</div>
            {/* <div className='FavMovie'>Favorite Movies:</div> */}
            <ol className='ol'>
                <p className='bold' className='favMovie'>Favorite Movies:</p>
                <li className='top-list'>1. {props.theData[props.Num].favoriteMovies[0]}</li>
                <li className='li'>2. {props.theData[props.Num].favoriteMovies[1]}</li>
                <li className='li'>3. {props.theData[props.Num].favoriteMovies[2]}</li>
            </ol>
        </div>
        </div>
    )
}

export default Card