import { Link } from "react-router-dom";
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles} from '@material-ui/core';


const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));

function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    <Link to="/"><div>MyCrate</div></Link>
                </Typography>
              
            </Toolbar>
        </AppBar>
    );
}; 

export default Header;