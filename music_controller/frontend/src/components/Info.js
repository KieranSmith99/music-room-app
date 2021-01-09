import React, { useState, useEffect } from  "react";
import {Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
    JOIN: 'pages.join',
    CREATE: 'pages.create',
}

export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo() {
        return "Use the Join a Room button to enter a code and join an existing room.";
    }

    function createInfo() {
        return "Use the Create a Room button to create a new room that others can join with a code.";
    }

    return <Grid container spacing={1}>
        <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
                What is House Party?
            </Typography>
        </Grid>

        <Grid item xs={12} align="center">
            <Typography variant="body1">
                {page === pages.JOIN ? joinInfo() : createInfo()}
            </Typography>
        </Grid>

        <Grid item xs={12} align="center">
            <IconButton onClick={() => 
                {page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);}}>
                {page === pages.CREATE ? <NavigateBeforeIcon/> : <NavigateNextIcon/>}
            </IconButton>
        </Grid>

        <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
                Back
            </Button>  
        </Grid>
    </Grid>
}