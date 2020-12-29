import TextField from "@material-ui/core/TextField";
import {InputAdornment, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles({main: { maxWidth: '95%', width: 500, marginBottom: 20}, root: { borderRadius: 25 }})

export default function Search({state, setState}) {
    const classes = useStyles();

    const handleChange = (event) => {
        setState({searchValue: event.target.value});
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`Start the search for ${state.searchValue}`)
        }
    }

    return (
        <TextField
            variant='outlined'
            placeholder='Search by address, landlord, rental company....'
            className={classes.main}
            InputProps={{startAdornment: <InputAdornment position='start'><SearchIcon/></InputAdornment>, classes: { root: classes.root } }}
            autoFocus
            value={state.searchValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}
