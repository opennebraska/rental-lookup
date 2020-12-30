import {Button} from "@material-ui/core";
import React from "react";

export default function SearchButton({searchValue, searchForProperties}) {
    return (
        <div>
            <Button variant='contained' onClick={() => searchForProperties(searchValue)}>Search</Button>
        </div>
    )
}
