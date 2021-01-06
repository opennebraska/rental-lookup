import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PropTypes from "prop-types";
import axios from "axios";

const getProperty = async (pin) => {
  const { data: property } = await axios.get(`http://localhost:3001/properties/${pin}`);
  return property
}

export default function PropertyDetail(props) {
  const [selectedProperty, setSelectedProperty] = useState({quality: "", condition: ""});
  const [encodedPropertyAddress, setEncodedPropertyAddress] = useState("");

  const {pin} = useParams();
  useEffect(() => {
    async function fetchData() {
      const property = await getProperty(pin);
      setSelectedProperty({condition: "", quality: "", ...property});
      setEncodedPropertyAddress(encodeURIComponent(`${property.addressLa}, ${property.propertyCity}, NE ${property.propertyZip}`));
    }
    fetchData();
  }, [pin]);

  return (
    <>
      <Box mb={2}>
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Typography color="textPrimary"><Link href={`/landlord/${props.source}`}>{props.source}</Link></Typography>
          <Typography color="textPrimary">{selectedProperty.ownerName}</Typography>
        </Breadcrumbs>
      </Box>
      <Card>
        <CardContent>
          <Box mb={2}>
            <Typography variant={"h4"} gutterBottom>Owner</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.ownerName}</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.address2}</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.ownerCity}, {selectedProperty.OWNER_STAT} {selectedProperty.ownerZip}</Typography>
            {/*<Typography variant={"body1"} component={"p"} gutterBottom><Link href={`/landlord/${props.source}?search=${encodeURIComponent(selectedProperty.ownerName)}`}>{`View All ${propertyCount} Properties`}</Link></Typography>*/}
          </Box>
          <Box>
            <Typography variant={"h4"} gutterBottom>Property</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.addressLa}</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.propertyCity}, NE {selectedProperty.propertyZip}</Typography>
            <Typography variant={"body1"} component={"p"} gutterBottom><Link target="_blank" rel="noreferrer" href={`http://maps.google.com/?q=${encodedPropertyAddress}`}>View On Map</Link></Typography>
            <Typography variant={"h6"} gutterBottom>Condition/Quality</Typography>
            <Typography variant={"body1"} component={"p"}>Condition: {selectedProperty.condition.trim() || "Unknown"}</Typography>
            <Typography variant={"body1"} component={"p"} gutterBottom>Quality: {selectedProperty.quality.trim() || "Unknown"}</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

PropertyDetail.propTypes = {
  parcels: PropTypes.array.isRequired,
  source: PropTypes.string.isRequired,
};
