import React from 'react'

const Person = (props) => {
    return (
        <span>Name: {props.name} Surname: {props.surname} Age: {props.age}</span>
    )
}

export default Person