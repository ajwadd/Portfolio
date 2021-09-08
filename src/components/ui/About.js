import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";




 
import image from "../../assets/image.png";





const useStyles = makeStyles(theme => ({
    container : {
        marginTop: "5em",
        marginBottom: "2em" 
    },
    image : {
        borderRadius: 100,
        height: 250,
        width: 250,
    },
    text: {
       marginTop : "2em", 
       marginLeft: "5em",
       marginRight: "5em"
    },
    typographyText : {
        marginTop: "2em"
    }

}));


export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  




 
  return (
  <React.Fragment>
       <Grid container direction="column" className={classes.container}>
         <Grid container justify="center">
             <Grid item container direction="column" align="center">
                <Grid item>
                <Typography variant="h2" style={{marginBottom : "10px"}} >ABOUT ME</Typography> 
                </Grid>
                <Grid item >
                <img  style={{marginBottom : "1em"}} className={classes.image} alt="image" src={image} />
                </Grid>
                <Grid item>
                <Typography  variant="body2" style={{marginBottom : "1.5em"}}>Belfqir Abdelhafid</Typography> 
                </Grid> 
                <Grid item>
                <Typography  variant="h4">Node.Js | Angular | React.Js</Typography> 
                </Grid> 
              
             </Grid>

             <Grid container className={classes.text}>
                 <Grid item>
                 <Typography  align='center' variant="body1" paragraph>
                Hi there! I am an engineer. You might ask me what am I doing here ? Let me tell you this :
                I’ve studied computer programming and web development . To get here, I only followed my passions :  Programming.
                </Typography>
                </Grid>
                <Grid item className={classes.typographyText}>
                <Typography  align='center' variant="body1" paragraph>
                I started by coding desktop application and web application, Then after having following many GEEK coder and my experience in a company,
                I started to code by structured strategies and resolve many  issues that  gave me more confidence. This area has developed my analytical skills.
                </Typography>  
                 </Grid>
                 <Grid item className={classes.typographyText}>
                <Typography  align='center' variant="body1" paragraph>
                I started Web development with spring boot , because I was a java  fanatic :p.
                I needed the web development to prototype my ideas and make them real. I was finally
                convinced by the Nodejs environment whether in frontend or backend, which drove me into the world of JavaScript and made me even more passionate than ever. 
                </Typography>  
                 </Grid>
                 <Grid item className={classes.typographyText}>
                <Typography  align='center' variant="body1" paragraph>
                This combo has made me a Full-stack developer, who can integrate the advantage
                of the java language and its incredible libraries at the service of the NodeJS APIs and ReactJS and angular interfaces. 
                </Typography>  
                 </Grid>  
                 </Grid>
                 
        </Grid>
           
      </Grid>


  </React.Fragment>    
       )
  }