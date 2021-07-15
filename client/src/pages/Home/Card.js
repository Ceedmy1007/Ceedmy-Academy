import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      maxWidth: 345,
    },
  },
}));

const CARD = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className="justify-content-md-center mt-3 mb-3">
        <h1 className="text-center text-dark">Best Selling Courses</h1>
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
                  <Typography gutterBottom variant="h5" component="h2">
                   IIT/JEE
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    IIT/JEE Courses 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
                <Button className="btn btn-primary">
                  <a href="#" className="text-white mr-2">Share</a>
                </Button>
                <Button className="btn btn-primary">
                  <a href="https://www.ceedmy.com/iit" className="text-white mr-3">Learn More</a>
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
                  <Typography gutterBottom variant="h5" component="h2">
                    NEET
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   NEET Course
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="btn btn-primary">
                  <a href="#" className="text-white mr-4">Share</a>
                </Button>
                <Button className="btn btn-primary">
                  <a href="https://www.ceedmy.com/neet" className="text-white mr-4">Learn More</a>
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
                  <Typography gutterBottom variant="h5" component="h2">
                    UPSC/IAS
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   UPSC/IAS Course
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="btn btn-primary">
                  <a href="#" className="text-white pr-1">Share</a>
                </Button>
                <Button className="btn btn-primary mr-0">
                  <a href="https://www.ceedmy.com/upsc" className="text-white pr-1">Learn More</a>
                </Button>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default CARD;
