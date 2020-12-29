import './App.css';
import React, {useState} from "react";
import Search from "./Search";
import TitleText from "./TitleText";
import SearchButton from "./SearchButton";


function App() {
    const [state, setState] = useState({
        searchValue: '',
    })

    return (
        <div className="App">
            <TitleText/>
            <Search state={state} setState={setState}/>
            <SearchButton state={state}/>
        </div>
    );
}

export default App;
