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
import iitjee2022 from "../../images/iitjee2022.png";
import neet2022 from "../../images/neet2022.png";
import upsccse2022 from "../../images/upsccse2022.png";

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
                  alt="IIT JEE 2022"
                  height="140"
                  image={iitjee2022}
                  title="IIT JEE 2022"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="text-center">
                   IIT/JEE
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    IIT/JEE Courses 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
                <Button className="btn btn-primary ml-5">
                  <a href="#" className="text-white mr-3">Share</a>
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
                  alt="NEET 2022"
                  height="140"
                  image={neet2022}
                  title="NEET 2022"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="text-center">
                    NEET
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                   NEET Course
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="btn btn-primary ml-5">
                  <a href="#" className="text-white mr-3">Share</a>
                </Button>
                <Button className="btn btn-primary">
                  <a href="https://www.ceedmy.com/neet" className="text-white mr-3">Learn More</a>
                </Button>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="UPSC CSE 2022"
                  height="140"
                  image={upsccse2022}
                  title="UPSC CSE 2022"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="text-center">
                    UPSC/IAS
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                   UPSC/IAS Course
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="btn btn-primary ml-5">
                  <a href="#" className="text-white mr-3">Share</a>
                </Button>
                <Button className="btn btn-primary">
                  <a href="https://www.ceedmy.com/upsc" className="text-white mr-3">Learn More</a>
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
