import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getLandlordProperties} from "../../landlords-api/landlords-api";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Typography} from "@material-ui/core";
import {PropertyTable} from "../PropertyTable";
import LandlordOverview from "./LandlordOverview";

export default function LandlordDetail(props) {
  const [loading, setLoading] = React.useState(true);
  const [properties, setProperties] = React.useState([]);
  const {landlord} = useParams();
  useEffect(() => {
    async function fetchData() {
      const propertyResponse = await getLandlordProperties(landlord)
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
      return <>
        <LandlordOverview properties={properties} />
        <PropertyTable properties={properties} />
      </>
    } else {
      return <Typography variant={"h6"} style={{marginTop: 120}} >Something went wrong. No properties found for this landlord.</Typography>
    }
  } else {
    return <CircularProgress size={100} style={{marginTop: 120}} />
  }
}
