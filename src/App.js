import './App.css';
import React, {useState} from "react";
import SearchContainer from "./SearchContainer";
import SearchAppBar from "./SearchAppBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropertyPreview from "./PropertyPreview";
import PropertyDetail from "./PropertyDetail";
import axios from "axios";


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [properties, setProperties] = useState();

  const searchForProperties = async (search) => {
    const {data: properties} = await axios.get(`http://localhost:3001/properties?search=${search}`);
    setProperties(properties);
  }

  return (
    <div className="App">
      <Router basename={"omaha-rental-lookup"}>
        <Switch>
          <Route exact path="/">
            <SearchContainer searchValue={searchValue} setSearchValue={setSearchValue}
                             searchForProperties={searchForProperties}/>
          </Route>
          <Route exact path="/properties-preview">
            {properties &&
            <React.Fragment>
              <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue}
                            searchForProperties={searchForProperties}/>
              <PropertyPreview properties={properties}/>
            </React.Fragment>}
          </Route>
          <Route path="/property/:pin">
            <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue}
                          searchForProperties={searchForProperties}/>
            <PropertyDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
