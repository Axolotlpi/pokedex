import { useState, useEffect } from 'react';

function SearchBar({
  searchQuery,
  placeholder,
  autoCompleteArray,
  onlyLowerCase = false,
  trailingSpaces = false,
  autoCompleteKeys = [9],
}) {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState(placeholder);

  const handleChange = (event) => {
    if (onlyLowerCase) return setQuery(event.target.value.toLowerCase());
    setQuery(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchQuery(trailingSpaces ? query : query.trim());
    setQuery('');
  };

  useEffect(() => {
    autoHint();
  }, [query]);

  const autoHint = () => {
    if (!query) return setSuggestion(placeholder);
    if (!autoCompleteArray) return setSuggestion('');
    const suggest = autoCompleteArray.find((word) => word.startsWith(query));
    setSuggestion(suggest ? suggest : '');
  };

  const autoComplete = (event) => {
    if (!autoCompleteKeys.includes(event.keyCode)) return;
    if (!suggestion || !query || suggestion === query) return;
    event.preventDefault();
    setQuery(suggestion);
  };

  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      className="SearchBar w-full h-max flex flex-row justify-items-stretch font-sans font-semibold"
    >
      <div className="relative flex-[7] bg-primary-0 flex rounded-l-md">
        <input
          type="text"
          onChange={handleChange}
          value={query}
          onKeyDown={autoComplete}
          className="w-full bg-transparent z-10 text-secondary-0 font-semibold p-2 rounded-l-md"
        />

        <input
          type="text"
          value={suggestion}
          readOnly
          disabled
          className="absolute w-full bg-transparent pointer-events-none text-opacity-50 text-secondary-0 font-semibold p-2 rounded-l-md"
        />
      </div>

      <button className="bg-primary-2 text-primary-0 font-bold p-2 rounded-r-md active:shadow-[inset_1px_1px_0px_2px_rgba(0,0,0,0.32)]">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
