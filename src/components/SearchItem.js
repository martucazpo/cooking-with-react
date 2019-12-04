import React, { useContext } from 'react'
import uuidv4 from "uuid/v4"
import { RecipeContext } from './App'

export default function SearchItem() {

    const { searchResults, searchTerm, renderResults } = useContext(RecipeContext)
   
    const resultsArr = [...searchResults]



    if (!searchTerm){
        return (<div></div>)
        }

    else if ( renderResults === true && resultsArr.length) {
            return ( 
            resultsArr.map( item => (
            <li key={uuidv4()} className="search-item__text"
            >{item}
            </li>
            ))
        )}

    else if (renderResults === true) { 
        return (
        <div><p>
        Sorry not found
        </p></div>) 
        }
    else {
        return (<div></div>)
    }


}
