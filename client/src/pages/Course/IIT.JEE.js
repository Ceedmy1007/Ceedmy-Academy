import React from "react";

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
import zenithiitjeecontent from "./IITJEE2022Course/zenithiitjeecontent.js";
import ZenithIITJEEContainerCourses from "./IITJEE2022Course/ZenithIITJEEContainerCourses.js";

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
                      2 year JEE Advanced + OLYMPIADS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" style={{marginLeft: "125px"}}>
                  <a href="/zenithiitjeecontent" style={{textColor: "primary"}}>Learn More</a>
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
                  <Typography gutterBottom variant="h5" component="h2" className="text-center">
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
                <Button size="small" style={{marginLeft: "125px"}}>
                  <a href="#" style={{textColor: "primary"}}>Learn More</a>
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
                    2 year JEE Main + OLYMPIADS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" style={{marginLeft: "125px"}}>
                  <a href="#" style={{textColor: "primary"}}>Learn More</a>
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
                  <Typography gutterBottom variant="h5" className = "text-center" component="h2">
                    Distance Learning
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    IIT JEE
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" style={{marginLeft: "125px"}}>
                  <a href="#" style={{textColor: "primary"}}>Learn More</a>
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
                    Crash Course
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    IIT JEE
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" style={{marginLeft: "125px"}}>
                  <a href="#" style={{textColor: "primary"}}>Learn More</a>
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
                    IIT JEE
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" style={{marginLeft: "125px"}}>
                  <a href="#" style={{textColor: "primary"}}>Learn More</a>
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
