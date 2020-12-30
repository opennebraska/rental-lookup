import './App.css';
import React, {useState} from "react";
import SearchContainer from "./SearchContainer";


function App() {
    const [searchValue, setSearchValue] = useState('');
    const [properties, setProperties] = useState();

    const searchForProperties = (search) => {
        setProperties(search);
    }

    return (
        <div className="App">
            <SearchContainer searchValue={searchValue} setSearchValue={setSearchValue} searchForProperties={searchForProperties}/>
            {properties && <div>{properties}</div>}
        </div>
    );
}

export default App;
