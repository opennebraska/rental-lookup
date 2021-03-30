import TextField from "@material-ui/core/TextField";
import {InputAdornment, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({main: {maxWidth: '95%', width: 500, marginBottom: 20}, root: {borderRadius: 25}})

export default function Search({searchValue, setSearchValue }) {
  const classes = useStyles();
  let history = useHistory();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      history.push("/properties-preview?search="+encodeURIComponent(searchValue));
    }
  }

  return (
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
        onKeyDown={(event) => handleKeyDown(event)}
      />
  )
}
