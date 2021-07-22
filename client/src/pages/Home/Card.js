import React from "react";
import {Link} from "react-router-dom";
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
                  alt="Contemplative Reptile"
                  height="210"
                  image={iitjee2022}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="text-center">
                    IIT Jee
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                   Pre + Mains + Olympiads
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/iit">Learn More</Link>
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
                  height="210"
                  image={neet2022}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    NEET
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                    AIIMS + JIPMER + OLYMPIADS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                  <Link to="/neet">Learn More</Link>
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
                  height="210"
                  image={upsccse2022}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography className="text-center" gutterBottom variant="h5" component="h2">
                    UPSC
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="text-center"
                  >
                     UPSC Foundation Course
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" style={{marginLeft: "125px"}}>
                 <Link to="/upsc">Learn More</Link>
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
