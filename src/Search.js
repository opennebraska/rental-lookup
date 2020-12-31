import TextField from "@material-ui/core/TextField";
import {InputAdornment, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {Route} from 'react-router-dom';

const useStyles = makeStyles({main: {maxWidth: '95%', width: 500, marginBottom: 20}, root: {borderRadius: 25}})

export default function Search({searchValue, setSearchValue, searchForProperties}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleKeyDown = (event, history) => {
    if (event.key === 'Enter') {
      searchForProperties(searchValue);
      history.push("/properties-preview");
    }
  }

  return (
    <Route render={({history}) => (
      <TextField
        variant='outlined'
        placeholder='Search by address, landlord, rental company....'
        className={classes.main}
        InputProps={{
          startAdornment: <InputAdornment position='start'><SearchIcon/></InputAdornment>,
          classes: {root: classes.root}
        }}
        autoFocus
        value={searchValue}
        onChange={handleChange}
        onKeyDown={(event) => handleKeyDown(event, history)}
      />
    )}/>
  )
}
