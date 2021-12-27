import { useState } from 'react';
import SummaryCard from "./components/Card/SummaryCard";
import CardShell from './components/Card/CardShell';
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import { fetchItems } from "./helpers";

function App() {

  const [items, setItems] = useState(null);

  const getItems = async (query) => {
    let results = await fetchItems(query);
    let tempItems = items;
    if(!tempItems){
      tempItems = [];
    }
    setItems([...tempItems, ...results]);
  }

  const resetItems = () => {
    setItems(null);
  }

  return (
    <div className="App w-screen h-full min-h-screen bg-primary-3">
      <div className="grid grid-flow-row grid-cols-12">
        <h1 className=" text-xl font-semibold w-max p-1 text-primary-0 bg-primary-2 shadow-sm rounded-sm col-span-12 place-self-center m-4"
        >PokeDex v0.1</h1>
        <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-2 m-3">
          <SearchBar searchQuery={getItems} placeholder="search a pokemon"/>
        </div>
        <div className=" row-start-3 col-start-4 col-span-6 lg:row-start-2 lg:col-start-11 lg:col-span-1 flex justify-center items-center">
          <Button text="Clear" click={resetItems} />
        </div>
          {
            items?.error && <h1>{items.message}</h1>
          }
          {
            items && Array.isArray(items) && !items.error && items.map((item, index) => (
              item && 
                <div className="lg:col-span-4 md:col-span-6 col-span-12" key={index}>
                  <SummaryCard heading={item.name} text={`species: ${item.description}`} img={item.img}/>
                </div>
                )
              )  
            
          }
      </div>
    </div>
  );
}

export default App;
