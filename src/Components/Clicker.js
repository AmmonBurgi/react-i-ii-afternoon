import React from 'react'

function Clicker(props){
    return(
        <div className='alignClick'>
        <button className='Previous' onClick={props.clickPrev}>&#10094; Previous</button>
        <div>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
        <button className='new'>New</button>
        </div>
        <button className='Next' onClick={props.clickNext}>Next</button>
    </div>
    )
}
export default Clicker