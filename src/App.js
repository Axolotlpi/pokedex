import { useState } from 'react';
import Heading from './compositions/Heading';
import NotifiactionCard from './compositions/NotificationCard';
import SearchBar from './components/SearchBar';
import Button from './components/Button';
import { fetchItem, setErrorListener } from './helpers';
import PokeCard from './compositions/PokeCard';
import autoComplete from './autoCompleteList.json';

function App() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');

  const notify = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  setErrorListener(notify);

  const getItem = async (query) => {
    let result = await fetchItem(query);
    setItems([...(items || []), result]);
  };

  const resetItems = () => {
    setItems(null);
  };

  return (
    <div className="App w-full h-full min-h-screen bg-primary-3">
      <div className="grid grid-flow-row grid-cols-12">
        <Heading heading="PokeDex v0.1" />

        <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-2 m-3">
          <SearchBar
            searchQuery={getItem}
            placeholder="search a pokemon"
            autoCompleteArray={autoComplete.pokemon}
            autoCompleteOnTap
          />
        </div>

        <div className=" row-start-3 col-start-4 col-span-6 md:row-start-2 md:col-start-11 md:col-span-1 flex justify-center items-center">
          <Button text="Clear" click={resetItems} />
        </div>

        <NotifiactionCard message={message} />

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 col-span-full row-start-4 p-5 gap-3">
          {items &&
            Array.isArray(items) &&
            items.map(
              (item, index) => item && <PokeCard {...item} key={index} />
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
