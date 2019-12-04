import React, { useContext } from 'react'
import SearchItem from './SearchItem'
import { RecipeContext } from './App'

export default function SearchBox() {
    

    const { setSearchTerm, searchTerm, setRenderResults} = useContext(RecipeContext)
   // let renderCont = []

    function handleChange (e) {
        setSearchTerm(e.target.value)
    }

    function handleRenderResultsTrue (){
        setRenderResults(true)
    }

    function handleRenderResultsFalse (){
        setRenderResults(false)
    }


    function handleSearch () {
        handleRenderResultsTrue()
    }

    function handleClearSearch () {
        setSearchTerm('')
        handleRenderResultsFalse()
    }


    return (
        <div className="recipes-search__container">
            <span className="search-input__wrapper">
                <input
                    placeholder="Search Recipes"
                    type="text"
                    name="search"
                    value={ searchTerm }
                    onChange={ handleChange }
                    id="search"
                    className="recipes-search__input"
                    />
                </span>
                <span className="search-input__wrapper">
                <button
                    className="btn btn--primary"
                    onClick={ () => handleSearch() }
                    >
                    <i className="material-icons">
                        search
                    </i>
                </button>
                </span>
                <span className="search-input__wrapper">
                <button
                    className="btn btn--danger"
                    onClick={ () => handleClearSearch() }
                    >
                        &times;
                </button>
            </span>
            <div>
                <ul>
                    <SearchItem />
                </ul> 
            </div>
        </div>
    )
}