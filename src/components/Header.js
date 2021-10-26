import { Link } from "react-router-dom";
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles} from '@material-ui/core';



const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    },
    appbar: {
        background: 'black',
    }
}));

function Header(props) {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar} position="static" elevation={0}>
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><div>MyCrate</div></Link>
                </Typography>
           
            </Toolbar>
        </AppBar>
    );
}; 

export default Header;