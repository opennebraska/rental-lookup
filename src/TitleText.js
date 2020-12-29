import {makeStyles, Typography} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({ titleText: { marginTop: 100, marginBottom: 30}})

export default function TitleText() {
    const classes = useStyles();
    return <Typography variant='h3' component='h1' className={classes.titleText}>Omaha Rental Properties</Typography>
}
