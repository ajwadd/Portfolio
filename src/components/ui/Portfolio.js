import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Drawer from "@material-ui/core/Drawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import SignIn from "../../assets/SignIn.PNG";
import SignUp from "../../assets/SignUp.PNG";
import category from "../../assets/category.PNG";
import Product from "../../assets/Product.PNG";
import ecommerceDashboard from "../../assets/ecommerceDashboard.PNG";
import ecommerceShop from "../../assets/ecommerceShop.PNG";
import estimatePage from "../../assets/estimatePage.PNG";
import estimate from "../../assets/estimate.PNG";
import mailing from "../../assets/mailing.PNG";
import ecommercePage from "../../assets/ecommercePage.PNG";
import EcommerceMobile from "../../assets/EcommerceMobile.PNG";
import ecommerce from "../../assets/ecommerce.PNG";
import arc from "../../assets/arc.PNG";
import tabs from "../../assets/tabs.PNG";

const drawerWidth = "60%";

const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: "3em",
  },
  root: {
    maxWidth: 500,
  },
  image: {
    width: "100%",
    maxWidth: "100%",
  },

  card: {
    width: 345,
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
      justify: "center"
    }
  },
  gridCard : {
    marginTop: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    }
  },
  drawer: {
    width: drawerWidth,
    // marginTop: "64px",
    zIndex: theme.zIndex.modal,
    paddingBottom: "3em",
    [theme.breakpoints.down("md")]: {
      width: "80%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%"
    }
  },
  drawerContent: {
    marginTop: "64px",
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down("md")]: {
      width: "80%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%"
    }
  },
  box: {
    marginTop: "3em",
    [theme.breakpoints.down("sm")]: {
      with: "100%"
    }
  },
  imgBox: {
    width: "90%",
    maxWidth: "90%",
    height: "auto",
    marginTop: "3em",
    margin: "3em 3em",
    borderBottom: "none",
    [theme.breakpoints.down("sm")]: {
      with: "100%"
    }
  },
  imgBoxTab: {
    width: "30%",
    maxWidth: "30%",
    height: "auto",
    marginTop: "3em",
    margin: "3em 3em",
    [theme.breakpoints.down("sm")]: {
      with: "100%"
    }
  },
  img: {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      with: "50%"
    }
  },

  cardBodySize: {
    fontSize: "1.3rem",
    marginTop: "1em",
  },
  cardTitleSize: {
    marginTop: "1em",
    fontSize: "2rem",
  },
  Text: {
    marginLeft: "1em",
    marginRight: "1em",
    
  },
  divider: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.common.secondary,
  },
  h2Text : {
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5rem", 
      marginTop: "1em"    
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem", 
      marginTop: "1em"    
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", 
      marginTop: "0.5em"    
    }
  }
}));

export default function Portfolio(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer1, setOpenDrawer1] = useState(false);

  return (
    <React.Fragment>
      <Grid item container direction="row" className={classes.Container}>
        <Grid item container justify="center">
          <Typography variant="h2">Portfolio</Typography>
        </Grid>
        <Grid item container justify="center" style={{ marginTop: "2em" }}>
          <Typography>Some of my latest work.</Typography>
        </Grid>
      </Grid>

      <Grid item
        container
        justify="space-evenly"
        direction={matchesMD ? "column" : "row"}
        className={classes.gridCard}
        >
          <Grid item align={matchesMD ? "center" : "inherit"}>
          <Card  
               className={classes.card}
               onClick={() => setOpenDrawer(true)}>
          <img
            style={{ marginBottom: "1em" }}
            className={classes.image}
            alt="image"
            src={arc}
          />
          <CardContent>
            <Typography
              className={classes.cardTitleSize}
              variant="h2"
              align="center"
            >
              Arc Developement
            </Typography>
            <Typography className={classes.cardBodySize} variant="body1">
              ReactJs | Firebase | Material-ui
            </Typography>
          </CardContent>
          </Card>
          </Grid>
          
          <Grid item align={matchesMD ? "center" : "inherit"}>
          <Card className={classes.card} onClick={() => setOpenDrawer1(true)}>
          <img
            style={{ marginBottom: "1em" }}
            className={classes.image}
            alt="image"
            src={ecommerce}
          />

          <CardContent>
            <Typography
              className={classes.cardTitleSize}
              variant="h2"
              align="center"
            >
              Ecomerce Dev
            </Typography>
            <Typography
              className={classes.cardBodySize}
              variant="body1"
              align="center"
            >
              ReactJs | NodeJs | Bootstrap
            </Typography>
          </CardContent>
          </Card>
          </Grid>

       
      </Grid>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
          console.log("close");
        }}
        // onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <Grid item container justify="center" className={classes.drawerContent}>
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h2" className={classes.h2Text}
              >ARC DEVELOPMENT</Typography>
            </Grid>
            <Grid item className={classes.Text}>
              <Typography variant="body1" align="center">
                Arc Development is a softwar, mobile app and website
                developpment agency that provides latest technologies for best
                user experience.
              </Typography>
            </Grid>
          </Grid>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img src={arc} alt="arc picture" className={classes.img} />
          </Box>
          <Box boxShadow={1} component={Grid} className={classes.imgBoxTab}>
            <img src={tabs} alt="tabs picture" className={classes.img} />
          </Box>
          <Grid item className={classes.Text}>
            <Typography variant="body1" align="center">
              the website is developped by React.js as frontend and Material-ui
              for styling. Some services such as emailing was done using
              firebase.
            </Typography>
          </Grid>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img src={mailing} alt="mailing picture" className={classes.img} />
          </Box>
          <Grid item className={classes.Text}>
            <Typography variant="body1" align="center">
              One of the creative features in this website is the estimate page.
            </Typography>
          </Grid>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img
              src={estimatePage}
              alt="estimate picture"
              className={classes.img}
            />
          </Box>
          <Grid item className={classes.Text}>
            <Typography variant="body1" align="center">
              Here, the client can automaticaly calculate an estimation of his
              expected services at the agence, just by answering some clicky
              questions.
            </Typography>
          </Grid>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img
              src={estimate}
              alt="estimate picture"
              className={classes.img}
            />
          </Box>
          <Grid item className={classes.Text}>
            <Typography variant="body1" align="center">
              The plateforme is realy responsive to all types of screens and
              never break. This is a hight fidelity Design.
            </Typography>
          </Grid>
        </Grid>
      </Drawer>

      <Drawer
        className={classes.drawer}
        anchor="right"
        open={openDrawer1}
        onClose={() => {
          setOpenDrawer1(false);
        }}
        // onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <Grid item container justify="center" className={classes.drawerContent}>
          <Grid item container direction="column" alignItems="center">
            <Grid item className={classes.Text}>
              <Typography variant="h2">Ecommerce App</Typography>
            </Grid>
            <Grid
              item
              style={{ paddingBottom: "1em" }}
              className={classes.Text}
            >
              <Typography variant="body1" align="center">
                Ecommerce App is a web application developpment especialy for
                sale of computer science courses.
              </Typography>
            </Grid>
          </Grid>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img
              src={ecommercePage}
              alt="ecommercePage picture"
              className={classes.img}
            />
          </Box>
          <Box boxShadow={1} component={Paper} className={classes.imgBoxTab}>
            <img
              src={EcommerceMobile}
              alt="ecommerceMobile picture"
              className={classes.img}
            />
          </Box>

          <Grid item className={classes.Text}>
            <Typography variant="body1" align="center">
              This is the shop page where the user can filter by price and
              categories, see the best sellers and load more shop cards related
              to the selected filters.
            </Typography>
          </Grid>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img
              src={ecommerceShop}
              alt="ecommerceShop picture"
              className={classes.img}
            />
          </Box>
          <Grid item className={classes.Text}>
            <Typography variant="body1" align="center">
              Here, the dashboard page that can the admin create a new category
              and product.
            </Typography>
          </Grid>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img
              src={ecommerceDashboard}
              alt="ecommerceShop picture"
              className={classes.img}
            />
            <Divider className={classes.divider} />
          </Box>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img
              src={category}
              alt="category picture"
              className={classes.img}
            />
          </Box>
          <Divider className={classes.divider} />

          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img src={Product} alt="product picture" className={classes.img} />
          </Box>
          <Typography variant="body1" align="center">
            This page the users can be authenticated to buy courses.
          </Typography>
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
            <img src={SignIn} alt="product picture" className={classes.img} />
          </Box>
          <Divider className={classes.divider} />
          <Box boxShadow={1} component={Paper} className={classes.imgBox}>
          <img src={SignUp} alt="product picture" className={classes.img} />
        </Box>
        </Grid>

     
      </Drawer>
    </React.Fragment>
  );
}
