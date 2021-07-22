import React from "react";
import {Link} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../images/logo.jpeg";

import zenithiitjeecourses from "./IITJEE2022Courses/zenithiitjeecourses.js";
import cetcrashiitjeecourses from "./IITJEE2022Courses/cetcrashiitjeecourses.js";
import crashiitjeecourses from "./IITJEE2022Courses/crashiitjeecourses.js";
import jeecrashiitjeecourses from "./IITJEE2022Courses/jeecrashiitjeecourses.js";
import distanceiitjeecourses from "./IITJEE2022Courses/distanceiitjeecourses.js";
import supportiitjeecourses from "./IITJEE2022Courses/supportiitjeecourses.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      maxWidth: 345,
    },
  },
}));

const IIT = () => {
  const classes = useStyles();
  return (
    <div id="iitjee">
      
      <h1 className="text-center mt-2">IIT COURSE</h1>
      <div className="d-flex justify-content-center mt-2">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Filter" variant="outlined" />
          <TextField id="outlined-basic" label="Sort By" variant="outlined" />
        </form>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={logo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Zenith Program
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    2 year JEE Advanced + Olympiads
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/zenithiitjeecourses">Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={logo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Support Program
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    2 year JEE Main + JEE Advance
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/supportiitjeecourses">Learn More</Link>
                </Button>
              </CardActions>

            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={logo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  JEE Crash Course
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    2 year JEE Main + Olympiads
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/jeecrashiitjeecourses">Learn More</Link>
                </Button>
              </CardActions>

            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={logo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Distance Learning
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    JEE Main + JEE Advance
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/distanceiitjeecourses">Learn More</Link>
                </Button>
              </CardActions>

            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={logo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Crash Courses
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    JEE Main + JEE Advance
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/crashiitjeecourses">Learn More</Link>
                </Button>
              </CardActions>

            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={logo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    CET Crash Course
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    JEE Main + JEE Advance
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/cetcrashiitjeecourses">Learn More</Link>
                </Button>
              </CardActions>

            </Card>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default IIT;
