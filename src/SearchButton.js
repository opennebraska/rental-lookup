import {Button} from "@material-ui/core";
import React from "react";

export default function SearchButton({state}) {
    const onClick = () => { alert(`Searching for ${state.searchValue}`)}
    return (
        <div>
            <Button variant='contained' onClick={onClick}>Search</Button>
        </div>
    )
}
