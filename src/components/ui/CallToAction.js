import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

import background from "../../assets/Background.jpg";

const useStyles = makeStyles((theme) => ({
  learnbutton: {
    ...theme.typography.learnbutton,
    fontSize: "0.9rem",
    height: 50,
    padding: 5,
    marginTop: "4em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "70em",
    width: "100%",
  },
  h1color: {
    color: theme.palette.common.purple,
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">Hi I am a Full-stack</Typography>
            <Typography
              variant="h1"
              variant="subtitle2"
              className={classes.h1color}
            >
              Node.Js | Angular | React.Js
            </Typography>
            <Typography variant="h2">Developer</Typography>
            <Grid container item justify={matchesSM ? "center" : undefined}>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                className={classes.learnbutton}
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
