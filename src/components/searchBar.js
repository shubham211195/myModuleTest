import React from "react";
import '../App.css';

const SearchBar=(props)=>{
    return(
        <div>
            <form>
                    <input className="search" value={props.value} 
                    onChange={(e) => props.setSearchValue(e.target.value)}
                    placeholder="Search here" />
             </form>
        </div>
    )
}
export default SearchBar;