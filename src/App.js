import './App.css';
import React, {useState} from "react";
import SearchContainer from "./SearchContainer";
import SearchAppBar from "./SearchAppBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropertyPreview from "./PropertyPreview";


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [properties, setProperties] = useState();

  const searchForProperties = (search) => {
    setProperties([{
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
    },
      {
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
      }])
  }

  return (
    <div className="App">
      <Router basename={"omaha-renters-report"}>
        <Switch>
          <Route exact path="/">
            <SearchContainer searchValue={searchValue} setSearchValue={setSearchValue}
                             searchForProperties={searchForProperties}/>
          </Route>
          <Route exact path="/properties-preview">
            {properties &&
            <React.Fragment>
              <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue}
                            searchForProperties={searchForProperties}/>
              <PropertyPreview properties={properties}/>
            </React.Fragment>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
