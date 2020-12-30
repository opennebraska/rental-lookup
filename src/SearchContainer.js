import TitleText from "./TitleText";
import Search from "./Search";
import SearchButton from "./SearchButton";
import React from "react";

export default function SearchContainer({searchValue, setSearchValue, searchForProperties}) {
    return (
        <React.Fragment>
            <TitleText/>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} searchForProperties={searchForProperties}/>
            <SearchButton searchValue={searchValue} searchForProperties={searchForProperties}/>
        </React.Fragment>
    )
}
