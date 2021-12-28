import { useState } from 'react';

function SearchBar({searchQuery, placeholder, autoCompleteArray}) {

    const [query, setQuery] = useState('');

    const handleChange = (event) => {
            setQuery(event.target.value);  
        }

    const onSubmit = (event) => {
            event.preventDefault();
            searchQuery(query);
            setQuery('');
        }
    
    const autoComplete = () => {
        if(!autoCompleteArray) return;
    }

    return (
    <form onSubmit={onSubmit} autoComplete="off"  
        className="SearchBar w-full h-max flex flex-row justify-items-stretch font-sans font-semibold">

        <input type="text" placeholder={placeholder} onChange={handleChange} value={query} onKeyUp={autoCompleteArray && autoComplete}
            className="bg-primary-0 placeholder:text-opacity-50 text-secondary-0 font-semibold p-2 rounded-l-md flex-[7]"/>
        
        <button className="bg-primary-2 text-primary-0 font-bold p-2 rounded-r-md active:shadow-[inset_1px_1px_0px_2px_rgba(0,0,0,0.32)]">
            Search
        </button>

    </form>
    );
}

export default SearchBar;
