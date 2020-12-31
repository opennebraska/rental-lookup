import {Button} from "@material-ui/core";
import React from "react";
import {Route} from 'react-router-dom';

export default function SearchButton({searchValue, searchForProperties}) {
  const handleClick = (history) => {
    searchForProperties(searchValue);
    history.push("/properties-preview")
  }
  return (
    <Route render={({history}) => (
      <div>
        <Button variant='contained' onClick={() => handleClick(history)}>Search</Button>
      </div>
    )} />
  )
}
