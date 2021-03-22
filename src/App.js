import './App.css';
import React, {useState} from "react";
import SearchContainer from "./SearchContainer";
import SearchAppBar from "./SearchAppBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropertyPreview from "./PropertyPreview";
import PropertyDetail from "./PropertyDetail";
import axios from "axios";
import getLandlordApiUrl from "./Config";


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [properties, setProperties] = useState();

  const searchForProperties = async (search) => {
    const landlordApiUrl  = getLandlordApiUrl();
    const {data: properties} = await axios.get(`${landlordApiUrl}/properties?search=${search}`);
    setProperties(properties);
  }

  return (
    <div className="App">
      <Router basename={"rental-lookup"}>
        <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue}
                      searchForProperties={searchForProperties}/>
        <Switch>
          <Route exact path="/">
            <SearchContainer searchValue={searchValue} setSearchValue={setSearchValue} />
          </Route>
          <Route exact path="/properties-preview" component={PropertyPreview} />
          <Route path="/property/:pin" component={PropertyDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
