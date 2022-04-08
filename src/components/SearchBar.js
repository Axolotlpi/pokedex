import { useState, useEffect } from 'react';

const SearchBar = ({
  searchQuery,
  placeholder = '',
  autoCompleteArray = [],
  trailingSpaces = false,
  autoCompleteKeys = ['Tab'],
  autoCompleteOnTap = true,
}) => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [hint, setHint] = useState(placeholder);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchQuery(trailingSpaces ? query : query.trim());
    setQuery('');
  };

  useEffect(() => {
    //derive hint from suggestion
    let tempSuggest = suggestion;
    const suggestLength = tempSuggest.length || 0;
    tempSuggest = tempSuggest.slice(query.length);
    tempSuggest = tempSuggest.padStart(suggestLength, ' ');
    setHint(tempSuggest);
  }, [suggestion, query]);

  useEffect(() => {
    //find suggestion from autoCompleteArray
    if (!query) return setSuggestion('');
    if (!autoCompleteArray) return setSuggestion('');

    let suggest = autoCompleteArray.find((word) =>
      word.toLocaleLowerCase().startsWith(query.toLowerCase())
    );

    setSuggestion(suggest || '');
  }, [query, autoCompleteArray]);

  const autoComplete = (event) => {
    if (!('key' in event) && !autoCompleteOnTap) return;
    if ('key' in event && !autoCompleteKeys.includes(event.key)) return;
    if (!suggestion || !query) return;
    event.preventDefault();
    setQuery(suggestion || '');
  };

  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      className="SearchBar w-full h-max flex flex-row justify-items-stretch font-mono"
    >
      <div className="relative flex-[7] bg-primary-0 flex rounded-l-md">
        <input
          type="text"
          onChange={handleChange}
          value={query}
          onKeyDown={autoComplete}
          onTouchEnd={autoComplete}
          className="w-full bg-transparent z-10 text-secondary-0 p-2 rounded-l-md"
        />

        <input
          type="text"
          value={hint}
          readOnly
          disabled
          className="absolute w-full bg-transparent pointer-events-none text-opacity-50 text-secondary-0 p-2 rounded-l-md"
        />
      </div>

      <button className="bg-primary-2 text-primary-0 font-bold p-2 rounded-r-md active:shadow-[inset_1px_1px_0px_2px_rgba(0,0,0,0.32)]">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
