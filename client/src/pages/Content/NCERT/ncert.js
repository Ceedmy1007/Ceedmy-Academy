import React from "react";
import { Link } from "react-router-dom";

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







const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      maxWidth: 345,
    },
  },
}));

const ncert = () => {
  const classes = useStyles();
  return (
    <div className="container mt-2">
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              fontStyle: "helvetica"
            }}
          >
            NCERT Books PDF
          </h2>
        </nav>
      </div>
      <br />
      <div>
        <h2
          style={{
            padding: "10px",
            fontSize: "20px",
            fontWeight: "350",
            textAlign: "center",
            fontStyle: "verdana"
          }}
        >
          <a href="#class6">Class 6</a> | <a href="#class7">Class 7</a> | <a href="#class8">Class 8</a> | <a href="#class9">Class 9</a> | <a href="#class10">Class 10</a> | <a href="#class11">Class 11</a> | <a href="#class12">Class 12</a> | <a href="#classold">Class 11/12 Old Books</a>
        </h2>
      </div>
      <br />
      <div className="flexClass" id="class6">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "27px",
              fontWeight: "350",
              textAlign: "center",
              fontStyle: "verdana"
            }}
          >
            Class 6
          </h2>
        </nav>
      </div>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            Hindi NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Ganit
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
                <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Prithvi Hmara Awas
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Hmare Atit - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Vigyan
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Samajik avan Rajnitik Jeevan - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>  
      </Container>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            English NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Mathmathics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    The Earth Our Habitat
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
                <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>              
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Our Pasts - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Science
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Social And Political Life - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>  
      </Container>

      <br />
      <div className="flexClass" id="class7">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "27px",
              fontWeight: "350",
              textAlign: "center",
              fontStyle: "verdana"
            }}
          >
            Class 7
          </h2>
        </nav>
      </div>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            Hindi NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Ganit
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Hmara Prayavaran 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Hmare Atit - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Vigyan
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Samajik avan Rajnitik Jeevan - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>  
      </Container>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            English NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Mathmathics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Our Environment
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Our Pasts - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Science
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Social And Political Life - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>  
      </Container>


      <br />
      <div className="flexClass" id="class8">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "27px",
              fontWeight: "350",
              textAlign: "center",
              fontStyle: "verdana"
            }}
          >
            Class 8
          </h2>
        </nav>
      </div>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            Hindi NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Ganit
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Sansadhan Avan Vikas 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Hmare Atit - III
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Vigyan
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Samajik avan Rajnitik Jeevan - III
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>  
      </Container>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            English NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Mathmathics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Resources and Development
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Our Pasts - III
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Science
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Social And Political Life - III
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>  
      </Container>

      <br />
      <div className="flexClass" id="class9">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "27px",
              fontWeight: "350",
              textAlign: "center",
              fontStyle: "verdana"
            }}
          >
            Class 9
          </h2>
        </nav>
      </div>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            Hindi NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Ganit
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Samkalin Bharat - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Bharat aur Samkalin Vishwa - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Vigyan
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Loktantrik Rajneeti
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Arthsashtra
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>  
      </Container>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            English NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Mathmathics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Contemporary India - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    India and the Contemporary World - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Science
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Democratic Politics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Economics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>  
      </Container>

      <br />
      <div className="flexClass" id="class10">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "27px",
              fontWeight: "350",
              textAlign: "center",
              fontStyle: "verdana"
            }}
          >
            Class 10
          </h2>
        </nav>
      </div>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            Hindi NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Ganit
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Samkalin Bharat - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Bharat aur Samkalin Vishwa - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Vigyan
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Loktantrik Rajneeti - 2
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Arthik Vikas ki Samaj
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>  
      </Container>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            English NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Mathmathics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Contemporary India - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    India and the Contemporary World - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Science
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Democratic Politics - II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Understanding Economic Development
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>  
      </Container>

      <br />
      <div className="flexClass" id="class11">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "27px",
              fontWeight: "350",
              textAlign: "center",
              fontStyle: "verdana"
            }}
          >
            Class 11
          </h2>
        </nav>
      </div>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            Hindi NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Rajneetik Siddhant
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Bharat ka Samvidhan - Siddant aur Vyavahar
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Bharatiya Arthavyavastha ka Vikas
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Bhotik Bhughol ke Mool Siddhant
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Bharat Bhothik Prayavaran
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Bhughol mein Prayogatamak Karya
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row> 
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Vishwa Itihaas ke kuch Vishaya
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Samaj ka Bodh
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Samajsashtra Parichya
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>          
      </Container>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            English NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Chemistry Part 1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Chemistry Part 2
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Political Theory
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Fundamental of Physical Geography
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    India : Physical Environment
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Practical Work in Geography Part - I
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Indian Economic Development
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Themes in World History
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Mathematics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Physics Part 1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Physics Part 2
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Physics Exemplar Problems
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Psychology
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Introducing Sociology
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Understanding Society
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>                          
      </Container>
      <br />
      <div className="flexClass" id="class12">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "27px",
              fontWeight: "350",
              textAlign: "center",
              fontStyle: "verdana"
            }}
          >
            Class 12
          </h2>
        </nav>
      </div>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            Hindi NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Manav Bhughol ke Mool Siddhant
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Bharat Log aur ArthVyavastha
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Bhugol mein Prayogatamak Karya Part 2
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Bhartiya Itihaas ke kuch Vishaya Bhag 1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                  Bhartiya Itihaas ke kuch Vishaya Bhag 2
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                     Bhartiya Itihaas ke kuch Vishaya Bhag 3
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row> 
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Swantantra Bharat mein Rajneeti
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Samkalin Vishwa Rajneeti
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Vyisth Arthsashtra ek Parichaya
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Samistha Arthsashtra ek Parichaya
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Bharthiya Samaj
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Bharat mein Samajik Parivartan avan Vikas
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>                  
      </Container>
      <br />
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "23px",
              fontWeight: "350",
              fontStyle: "verdana"
            }}
          >
            English NCERT Books
          </h2>
        </nav>
      </div>

      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Politics in India Since Independence
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Introductory Macroeconomics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Introductory Microeconomics
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Fundamental of Human Geography
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    India People and Economy
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Practical Work in Geography Part 2
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Themes in Indian History Part 1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Themes in Indian History Part 2
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                         Themes in Indian History Part 3
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Crafts Tradition of India
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                      Indian Society
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Social Change and Development in India
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>          
        </Row>      
      </Container>      
      <br />
      <div className="flexClass" id="classold">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
              fontSize: "27px",
              fontWeight: "350",
              textAlign: "center",
              fontStyle: "verdana"
            }}
          >
            Class 11/12 NCERT Old Books 
          </h2>
        </nav>
      </div>
      <br />


      <Container className="justify-content-md-center mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    MadhyaKalin Bharat
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Aadhunik Bharat
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                    Prachin Bharat ka Itihaas
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom className="text-center" variant="h5" component="h2">
                       Samkalin Vishwa Itihaas
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <Link style={{ margin: "auto" }}
                  href="#">
                  Download
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Container>          
    </div>
  );
};

export default ncert;
