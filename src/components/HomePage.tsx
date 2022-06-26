import { useState } from 'react'
import './Homepage.css'

function Homepage() {
    const [guests,setGuests] = useState<Guests>()

    return (
        <div className='Homepage'>
        <h1>Ulis Family Gathering</h1>
        <p>Come gather with family for lunch and to catch up!</p>
        <p>Hay Rides!</p>
        <p>Pick your own pumpkin for Halloween!</p>

        </div>
    )
}

export default Homepage