import React, {useEffect} from 'react';
import {searchForProperties} from "../landlords-api/landlords-api";
import {parse} from "qs";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Typography} from "@material-ui/core";
import {PropertyTable} from "./PropertyTable";

export default function PropertyPreview(props) {
  const [properties, setProperties] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    async function fetchData() {
      const queryString = parse(props.location.search, {ignoreQueryPrefix: true});
      const propertyResponse = await searchForProperties(queryString.search)
      setLoading(false);
      const properties = propertyResponse.map(property => {
        if (property.violationCount === "") {
          return {...property, violationCount: '0'};
        } else {
          return property;
        }
      }, [])

      setProperties(properties);
    }
    fetchData().then();
  }, [props.location.search])

  if(!loading) {
    if(properties.length) {
      return <PropertyTable properties={properties} />
    } else {
      return <Typography variant={"h6"} style={{marginTop: 120}} >No results found. Try another search.</Typography>
    }
  } else {
    return <CircularProgress size={100} style={{marginTop: 120}} />
  }
}
