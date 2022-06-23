import { useState } from 'react'
import './Homepage.css'

function Homepage() {
    const [guests,setGuests] = useState<Guests>()

    return (
        <h1>Ulis Family Gathering</h1>
    )
}

export default Homepage