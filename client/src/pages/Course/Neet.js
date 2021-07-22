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


import ample from "../../images/ample.png";
import binary from "../../images/binary.png";
import crash from "../../images/crash.png";
import distance from "../../images/distance.png";
import online from "../../images/online.png";
import repeaters from "../../images/repeaters.png";

import aitsneetcourses from "./NEET2022Courses/aitsneetcourses.js";
import ampleneetcourses from "./NEET2022Courses/ampleneetcourses.js";
import binaryneetcourses from "./NEET2022Courses/binaryneetcourses.js";
import crashneetcourses from "./NEET2022Courses/crashneetcourses.js";
import distanceneetcourses from "./NEET2022Courses/distanceneetcourses.js";
import repeatersneetcourses from "./NEET2022Courses/repeatersneetcourses.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      maxWidth: 345,
    },
  },
}));

const Neet = () => {
  const classes = useStyles();
  return (
<div>
      
      <h1 className="text-center mt-2">NEET COURSE</h1>
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
                  image={ample}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Ample Program
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    NEET + AIIMS + JIPMER + OLYMPIADS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/ampleneetcourses">Learn More</Link>
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
                  image={binary}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Binary Program
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    NEET + AIIMS + JIPMER
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/binaryneetcourses">Learn More</Link>
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
                  image={repeaters}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Repeaters Program
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    NEET + AIIMS + JIPMER
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/repeatersneetcourses">Learn More</Link>
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
                  image={crash}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Crash Course
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    NEET
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/crashneetcourses">Learn More</Link>
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
                  image={online}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  All India Test Series 
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    Online/Offline
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/aitsneetcourses">Learn More</Link>
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
                  image={distance}
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
                    NEET
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/distanceneetcourses">Learn More</Link>
                </Button>
              </CardActions>

            </Card>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default Neet;
