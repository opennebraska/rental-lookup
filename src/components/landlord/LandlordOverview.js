import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";



export default function LandlordOverview({properties}) {
  return <Paper style={{padding: 10}}>
      <Typography component="h1">Landlord: {properties[0]?.ownerName || 'unknown'}</Typography>
      <Typography component="body">Properties: {properties.length}</Typography>
      <Typography component="body">Code violations: {Math.floor(Math.random() * 20)}</Typography>
    </Paper>
}
