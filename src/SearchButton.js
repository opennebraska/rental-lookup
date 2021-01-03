import {Button} from "@material-ui/core";
import React from "react";
import {useHistory} from 'react-router-dom';

export default function SearchButton({searchValue, searchForProperties}) {
  let history = useHistory();
  const handleClick = () => {
    searchForProperties(searchValue);
    history.push("/properties-preview")
  }
  return (
      <div>
        <Button variant='contained' onClick={() => handleClick()}>Search</Button>
      </div>
  )
}
