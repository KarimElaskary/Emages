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