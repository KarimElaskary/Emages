import './SearchBar.css'
import { useState } from "react"

function SearchBar({ onSubmit }){

    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label><span className='eLetter'>E</span>mages</label>
                <h1>Download Free Backgrounds With High Quality</h1>
                <input 
                value={term} 
                onChange={handleChange} 
                placeholder='What Are You Searching For?'
                className='search-input'
                />
            </form>
        </div>
    )
}

export default SearchBar