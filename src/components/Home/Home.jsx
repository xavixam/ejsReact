import React from 'react'

const Home = (props) => {
    return (
        <>
            <h2>Menu</h2>
            {
                props.dishes.map(dish => {
                    return (
                        <>
                            <div key={dish.id}>
                                <p>{dish.name}</p>
                                <p>{dish.description}</p>
                                <p>{dish.price}</p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Home