import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import About from './ui/About'
import Portfolio from './ui/Portfolio'
import CallToAction from './ui/CallToAction' 
import Skills from './ui/Skills' 
import Contact from './ui/Contact'   

import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Link      = Scroll.Link;
const Element   = Scroll.Element;
const Events    = Scroll.Events;
const scroll    = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;






const useStyles = makeStyles(theme => ({
     mainContainer: {
          marginTop: "4em",
          [theme.breakpoints.down("md")]: {
            marginTop: "3em"
          },
          [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
          }
        },

}));


export default function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();





 
  return (
       <Grid container direction="column" className={classes.mainContainer}>
       <Element  name='home'  item>
       <CallToAction setValue={props.setValue} />   
       </Element>
       <Element  name='about'  item>
       <About setValue={props.setValue} />
       </Element>
       <Element  name='portfolio'>
       <Portfolio setValue={props.setValue}/>
       </Element>
       <Element  name='skills'>
       <Skills setValue={props.setValue}/>  
       </Element>
       <Element  name='contact'>
       <Contact setValue={props.setValue}/> 
       </Element>
       </Grid>
       )
  }