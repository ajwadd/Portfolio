import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

  
import contact from "../../assets/contact.jpg";


import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';





const useStyles = makeStyles(theme => ({
  
     contactBackground: {
        
        backgroundImage: `url(${contact})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        paddingTop: 0,
        paddingTop: "8em", 
        [theme.breakpoints.down("sm")]: {
            height: "30em",
            width: "100%",
            
          }

      },
      h2: {
        color: theme.palette.common.purple,
        [theme.breakpoints.down("sm")]: {
            marginRight: "0.25em",
            marginLeft: "0.25em",
            fontSize: 35
            
          },
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "2em",
        marginRight: "2em"
        
      },
    gridMargin : {
        [theme.breakpoints.down("sm")]: {
            marginTop: "2em"              
          },
    }  

}));


export default function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();





 
  return (
    <Grid item container alignItems="center" className={classes.contactBackground}
    style={{ height: "60em",opacity: "0.9" }}

    >
        <Grid item container alignItems="center" direction="column">
        <Grid item className={classes.gridMargin}>
        <Typography variant="h2" style={{color: "black"}}>
            Contact Me
        </Typography>
        </Grid> 
        
        <Grid item className={classes.gridMargin}>
        <Typography variant="body1" className={classes.h2color}>
              I'd love to hear from you
        </Typography>
        </Grid>
        
        <Grid item container justify="space-evenly" >
            <Grid item className={classes.gridMargin}>
            <Grid item container alignItems="center" direction="column">
            <EmailIcon  style={{ fontSize: 60, color: "#FF6347" }} />
            <Typography variant="h2"  className={classes.h2}>
              hafid.belfqir@gmail.com
            </Typography>
            </Grid> 
            </Grid>
            
            <Grid item className={classes.gridMargin}>
            <Grid item container alignItems="center" direction="column">
            <CallIcon  style={{ fontSize: 60, color: "#FF6347" }} />
            <Typography variant="h2"  className={classes.h2}>
            (+212) 660525544
            </Typography> 
            </Grid>
            </Grid>
            
        </Grid>
        </Grid>
    </Grid>
       )
  }