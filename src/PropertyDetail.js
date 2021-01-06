import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PropTypes from "prop-types";
import ViolationDetail from "./ViolationDetail";
import {Grid} from "@material-ui/core";

export default function PropertyDetail(props) {
  const [selectedProperty, setSelectedProperty] = useState({QUALITY: "", CONDITION: ""});
  const [propertyCount, setPropertyCount] = useState(0);
  const [encodedPropertyAddress, setEncodedPropertyAddress] = useState("");
  const [violationLinks, setViolationLinks] = useState([]);
  const [violations, setViolations] = useState([]);

  const {pin} = useParams();
  useEffect(() => {
    const parcelData = props.parcels;
    const property = {
      "OBJECTID": 129,
      "PIN": "0125490002",
      "OWNER_NAME": "OMAHA HOMES LLC",
      "ADDRESS1": null,
      "ADDRESS2": "5814 S 174 ST",
      "OWNER_CITY": "OMAHA",
      "OWNER_STAT": "NE",
      "OWNER_ZIP": "68135",
      "PROPERTY_A": "12812 Q ST",
      "HOUSE": "12812",
      "APARTMENT": " ",
      "PROP_CITY": "OMAHA",
      "PROP_ZIP": "68137",
      "BLOCK": " ",
      "LOT": " ",
      "CLASS": "R",
      "QUALITY": "Average",
      "CONDITION": "Poor",
      "ADDRESS_LA": "12812 Q ST",
      "X_COORD": 2708880.83039265,
      "Y_COORD": 523817.0886334,
      "VIOLATION_LINKS": ["https://www.omahapermits.com/permitinfo/Cap/CapDetail.aspx?Module=Enforcement&TabName=Enforcement&capID1=17CAP&capID2=00000&capID3=003PH"],
      "VIOLATION_COUNT": 1,
      "VIOLATIONS": [{
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "07/18/2017",
        "violationSectionTitle": "304.15. Doors",
        "specificViolation": "The front kitchen storm door is missing its hardware. ",
        "direction": "South Side",
        "floor": "01st Floor",
        "violationSeverityLevel": "4 Low",
        "photoIdNo": "1430"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "07/18/2017",
        "violationSectionTitle": "304.13. Window, skylight and door frames",
        "specificViolation": "The main floor 1/2 bath window has been poorly boarded over, a permit is needed for replacement. ",
        "direction": "South Side",
        "floor": "01st Floor",
        "violationSeverityLevel": "4 Low",
        "photoIdNo": "1429"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "07/18/2017",
        "violationSectionTitle": "305.4. Stairs and walking surfaces",
        "specificViolation": "The main floor 1/2 bath is missing a small section of floor tile. ",
        "direction": "All Sides",
        "floor": "01st Floor",
        "violationSeverityLevel": "3 Medium",
        "photoIdNo": "1433"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "07/18/2017",
        "violationSectionTitle": "305.5. Handrails and guards",
        "specificViolation": "The hand railing is missing on the basement stairs. ",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "3 Medium",
        "photoIdNo": "1436"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "08/25/2017",
        "violationSectionTitle": "604.3. Electrical system hazards",
        "specificViolation": "There has been an electrical sub-panel added without City permits or inspections.  ",
        "direction": "North Side",
        "floor": "00 Basement",
        "violationSeverityLevel": "2 High",
        "photoIdNo": "1437, 1441"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "08/25/2017",
        "violationSectionTitle": "505.4. Water heating facilities",
        "specificViolation": "There has been a water heater added without City permits or inspections. ",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "2 High",
        "photoIdNo": "1440"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "08/25/2017",
        "violationSectionTitle": "603.1. Mechanical appliances",
        "specificViolation": "There has been duct work added without City permits or inspections. ",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "2 High",
        "photoIdNo": "1444"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "08/25/2017",
        "violationSectionTitle": "504.3. Plumbing system hazards",
        "specificViolation": "Non-code plumbing drain repair on the main bathroom drain. ",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "2 High",
        "photoIdNo": "1446"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "08/25/2017",
        "violationSectionTitle": "604.3. Electrical system hazards",
        "specificViolation": "Exposed romex wiring in the ceiling. ",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "2 High",
        "photoIdNo": "1447, 1452"
      }, {
        "violationStatus": "Removed",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "08/25/2017",
        "violationSectionTitle": "402.1. Habitable spaces",
        "specificViolation": "Non-code basement bedrooms",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "3 Medium",
        "photoIdNo": "1450"
      }, {
        "violationStatus": "Removed",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "08/25/2017",
        "violationSectionTitle": "403.1. Habitable spaces",
        "specificViolation": "Non-code basement bedrooms",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "3 Medium",
        "photoIdNo": "1450"
      }, {
        "violationStatus": "Removed",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "08/25/2017",
        "violationSectionTitle": "702.4. Emergency escape openings",
        "specificViolation": "No egress in the basement bedrooms. ",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "2 High",
        "photoIdNo": "1450"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "07/18/2017",
        "violationSectionTitle": "704.2. Smoke Alarms",
        "specificViolation": "The smoke alarm is missing in the basement. ",
        "direction": "All Sides",
        "floor": "00 Basement",
        "violationSeverityLevel": "3 Medium",
        "photoIdNo": "1454"
      }, {
        "violationStatus": "Repaired",
        "violationDate": "05/30/2017",
        "violationCompliedDate": "07/18/2017",
        "violationSectionTitle": "304.15. Doors",
        "specificViolation": "The overhead garage door has two deteriorated panels. ",
        "direction": "All Sides",
        "floor": "00 Floor Not Applicable",
        "violationSeverityLevel": "4 Low",
        "photoIdNo": "1456"
      }],
      "LAT_LONG": {"lat": 41.20545577248771, "long": -96.11456019608029}
    }
    setSelectedProperty(property);
    setEncodedPropertyAddress(encodeURIComponent(`${property.ADDRESS_LA}, ${property.PROP_CITY}, NE ${property.PROP_ZIP}`));
    setViolationLinks(property.VIOLATION_LINKS || []);
    setViolations(property.VIOLATIONS || []);
  }, [pin]);

  return (
    <>
      <Box mb={2}>
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Typography color="textPrimary"><Link href={`/landlord/${props.source}`}>{props.source}</Link></Typography>
          <Typography color="textPrimary">{selectedProperty.OWNER_NAME}</Typography>
        </Breadcrumbs>
      </Box>
      <Card>
        <CardContent>
          <Box mb={2}>
            <Typography variant={"h4"} gutterBottom>Owner</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.OWNER_NAME}</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.ADDRESS2}</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.OWNER_CITY}, {selectedProperty.OWNER_STAT} {selectedProperty.OWNER_ZIP}</Typography>
            <Typography variant={"body1"} component={"p"} gutterBottom><Link href={`/landlord/${props.source}?search=${encodeURIComponent(selectedProperty.OWNER_NAME)}`}>{`View All ${propertyCount} Properties`}</Link></Typography>
          </Box>
          <Box>
            <Typography variant={"h4"} gutterBottom>Property</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.ADDRESS_LA}</Typography>
            <Typography variant={"body1"} component={"p"}>{selectedProperty.PROP_CITY}, NE {selectedProperty.PROP_ZIP}</Typography>
            <Typography variant={"body1"} component={"p"} gutterBottom><Link target="_blank" rel="noreferrer" href={`http://maps.google.com/?q=${encodedPropertyAddress}`}>View On Map</Link></Typography>
            <Typography variant={"h6"} gutterBottom>Condition/Quality</Typography>
            <Typography variant={"body1"} component={"p"}>Condition: {selectedProperty.CONDITION.trim() || "Unknown"}</Typography>
            <Typography variant={"body1"} component={"p"} gutterBottom>Quality: {selectedProperty.QUALITY.trim() || "Unknown"}</Typography>
            <Typography variant={"h6"} gutterBottom>Case Links:</Typography>
            {violationLinks.length > 0 && violationLinks.map(link => <Typography key={link} variant={"body"} component={"p"} gutterBottom><Link target="_blank" rel="noreferrer" href={`${link}`}>View Case</Link></Typography>)}
            {violationLinks.length === 0 && <Typography variant={"body1"} component={"p"}>No Cases</Typography>}
            {violations.length > 0 && <Typography variant={"h4"} gutterBottom>Violations</Typography>}
            <Grid container>
              {violations.length > 0 && violations.map((violation, index) => <ViolationDetail key={index} violation={violation}/>)}
            </Grid>
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
