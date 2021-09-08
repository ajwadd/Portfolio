import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import mysql from "../../assets/mysql.png";
import express from "../../assets/express.png";
import NodeJs from "../../assets/NodeJs.png";
import npm from "../../assets/npm.png";
import react from "../../assets/react.png";
import angular from "../../assets/angular.png";
import bootstrap from "../../assets/bootstrap.png";
import materialUi from "../../assets/materialUi.png";
import vue from "../../assets/vue.jpg"; 
import mongodb from "../../assets/mongodb.jpg"


 






const useStyles = makeStyles(theme => ({
    GridContainer: {
        height: "60%",
        [theme.breakpoints.down("md")]: {
          height: "40%",
        },
        [theme.breakpoints.down("sm")]: {
          height: "20%",
        }

    },
    img: {
        width: "100px",
        height:'100px'
    },
    margin: {
      margin: "3em 3em",
      [theme.breakpoints.down("md")]: {
        marginTop: "1em 1em",     
      }
     
    },
    gridImg : {
      [theme.breakpoints.down("sm")]: {
        marginTop: "2em", 
        marginBottom: "2em"     
    
      },
    
     
    }
  

     

}));


export default function Skills(props) {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));



 
  return (
           <Grid item container 
                  className={classes.GridContainer}
           >
               <Grid item container alignItems="center" direction="column">
                 <Grid item>
                   <Typography variant="h2">
                      My Skills
                   </Typography>
                 </Grid>  
                 <Grid item className={classes.margin}>
                   <Typography variant="body1" >
                     FRONT-END
                   </Typography>
                  </Grid>        
               </Grid>
               <Grid item container className={classes.margin} >
                  <Grid item container justify='center' xs className={classes.gridImg} >
                  <img
                  src={react}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid>
                  <Grid item container justify='center' xs className={classes.gridImg}  >
                  <img
                  src={angular}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />   
                  </Grid> 
                  <Grid item container justify='center' xs className={classes.gridImg}  >
                  <img
                  src={materialUi}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid> 
                  <Grid item container justify='center' xs className={classes.gridImg}  >
                  <img
                  src={bootstrap}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid> 
                  <Grid item container justify='center' xs className={classes.gridImg}  >
                  <img
                  src={vue}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid> 
                  <Grid item container justify='center' xs className={classes.gridImg}  >
                  <img
                  src={react}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid>  
               </Grid>

               <Grid item container alignItems="center" direction="column" className={classes.margin}>
                   <Typography variant="body1">
                     BACK-END
                   </Typography>
               </Grid>

               <Grid item container className={classes.margin} >
                  <Grid item container justify='center' sm className={classes.gridImg} >
                  <img
                  src={npm}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid>
                  <Grid item container justify='center' sm className={classes.gridImg} >
                  <img
                  src={NodeJs}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid>
                  <Grid item container justify='center' sm className={classes.gridImg} >
                  <img
                  src={express}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid>    
                </Grid>

                <Grid item container alignItems="center" direction="column" className={classes.margin}>
                   <Typography variant="body1">
                     Data-Base
                   </Typography>
                </Grid>

                <Grid item container className={classes.margin} >
                  <Grid item container justify='center' sm className={classes.gridImg}>
                  <img
                  src={mongodb}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid>
                  <Grid item container justify='center' sm className={classes.gridImg}>
                  <img
                  src={mysql}
                  alt="ecommercePage picture"
                  className={classes.img}
                  />
                  </Grid>
                </Grid>  
           </Grid> 

         
       )
  }