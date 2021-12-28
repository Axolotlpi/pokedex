import { useState } from 'react';
import Heading from './compositions/Heading';
import NotifiactionCard from './compositions/NotificationCard';
import CardShell from './components/Card/CardShell';
import CardHeading from './components/Card/CardHeading';
import CardImg from './components/Card/CardImg';
import CardText from './components/Card/CardText';
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import { fetchItems } from "./helpers";
import PokeCard from './compositions/PokeCard';

function App() {

  const [items, setItems] = useState(null);
  const [message, setMessage] = useState('');

  const getItems = async (query) => {
    let results = await fetchItems(query);
    let tempItems = items;
    
    if('error' in results){
      console.log(results)
      notify(results.message);
      return;
    }

    if(!tempItems) tempItems=[];

    setItems([...tempItems, ...results]);    
  }

  const resetItems = () => {
    setItems(null);
  }

  const notify = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  }

  return (
    <div className="App w-screen h-full min-h-screen bg-primary-3">
      <div className="grid grid-flow-row grid-cols-12">
        <Heading heading="PokeDex v0.1" />

        <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-2 m-3">
          <SearchBar searchQuery={getItems} placeholder="search a pokemon"/>
        </div>

        <div className=" row-start-3 col-start-4 col-span-6 lg:row-start-2 lg:col-start-11 lg:col-span-1 flex justify-center items-center">
          <Button text="Clear" click={resetItems} />
        </div>

        <NotifiactionCard message={message} />

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 col-span-full row-start-4 p-5 gap-3">
          {
            items && Array.isArray(items) && !items.error && 
            items.map((item, index) =>  
              item &&
              <PokeCard {...item} key={index}/>
            )
          }
          </div>
      </div>
    </div>
  );
}

export default App;
