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
                <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1BWkRKPbESy3f43qvUvnnh_WISOHWlB-n/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1bU2IdpI1adbLxsnAVzN5C_AjM9aAA8tI/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/13qj7KcmAwBGDay0RvKq29JRRX4V9T6hB/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1kOODQz13nW7qn1ujrHVtQF_20Ivg9sVo/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1TguP3P58fBrJYTCzI4aAt2paW8wvnu42/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/18JKAcT-x3vhMzDDrnPnaj4aFTQZMrvzk/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1scCWV-XSaFoMYmhvTovpPqYNAgry54Zp/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>              
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1qYb5UaXhEerIGJtY69DLkoCqy4a54Qe4/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1qWRHdlJBCSN9nmKlvXqS9EmDjOleWWLt/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1v6RWiNMbhKcUEt8PYyVMsYyLWf1gWrL3/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/11UHc5o7FaGEMk96PQPS4pVzqNfUk-0UA/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1ozldo6CCPFT5XJIjRY3p0E9JSBL6ZYRQ/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1wIZbaqiN5bV-hCWWL_Gkz7SRHtn1GQvU/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1JuoGyV5F4ubgkPRMsx9S41KK1Pg3I_sg/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1PsrGLPsoe5NTWDcJkMkUWsNeNpyHnd7Z/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1FjT5zo0-emuD65OmdRRMIcMKLSpuXnHx/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1jiTA9BVprQk_yJj-kdKEc22YW0pm_XpM/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/15BeqgpiqQAH-lu1o-Tk0lQOkGQ12vFdo/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1-wiXomu5C2SYGsv9KWosAJ905gJo8o-4/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1vezuyuDsW0iYqC_6Arhqg4CR51Xh55MN/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1p_BV0wv4_LsC-GKYgGxDk-R6R9tC9we2/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1rPbe_SwRDBPQgHji09ylLDnGw3XzD15G/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1N51nQumuE4KFQz7_QI1G_EWZJYTR9BJA/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/143NUkKgtvffHutrMFYBRzmFSKb3Nmxwg/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/13O9Bz9nsPosmNj1MvdrA6cdsqxPz4gE8/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1AqKCLONM6CSeshrd0Kjvwk81nFSIvQzW/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1VMluIm4OpIYHQCMdv94JThDY-uNShuAX/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1QjULxsYq7cktsiTj-bOQNjb5YaXfdUtl/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1hXfnkrivj6gjyeoSL2FjDpBEAuWmn8aq/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1VVCut1tKyN7hQQFie6bpwmoHBubH90Hb/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1oyGp3sRQHBF6c6mGIGibg5s2fGXzw6WM/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1jJFL6ht0muKgAhawi5CsUY2nbaDuCy5G/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/17z-zOjB5TGkMMaUB4D3K4N4ebeypmiLM/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1URwCkW65OOEdvMg0IcRLJTLNDCrf5WUP/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1t1Lg73njAkGF4iDIKpXroytoOIPwcwvR/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1pwAiM_vNXSUd8zG-duPMEY07HzTUU2Em/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1FqImrDY_PD41Z3Mahbt9hq3fCbUydojp/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1_F0e8uaT0ZCPHLNDtYdXT8J5IpE5b0IB/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1SRZr62nFw-RDbGX2N-EhkJ1KpMQEtobu/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1xHjF58LUvy_2MdczxLtO9c23YGmKtd7e/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1sW8HwzGSJDhfRhiFJhgcnw_EYDPqYlAA/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/11J578GIUPEPPYzm8GFlrLyPRXq1MOW5e/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1FFcvFvHD8NxCaDbM1w1-xyoNV_UUd5wb/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1JYFaZUWXdOLwX3vmwrI3slk21pa-Mpbc/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1mHjyVDTdAfoZxmoz2vk6bQnT0NfiGykE/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1DBI7Y2lRbO0q0Ypy6ixFaTtFopnoPmya/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1PzZ62eRCugHmmQ13WbENU3M-nHuQLBUq/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1x6OV1XaZrCsnilcRPqESw5dcyWAMBHrL/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1DOXZ185Mhtlt1FD3TsMHKRKASfTsOElx/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1L9TwC8xP3LvTavFONwow1yA-qv1ie1Bl/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/157vTcVtAxhgv6zr45cuCqaoODDQJNBAo/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1hLwII_Ql8DGVc0MqXF_0pP_dL72F-9nv/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1jqkuQeWVD1BOcsBzkfLgas-qo1sxtKGF/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1Y3sZEXJM5fUmEeltZ8ovZoDNC_QhIiEg/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1H7-vInMRKP-QkxRUr7K2HoXL769oDE4S/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1k7iUIDFHW7AF2VSy8ODw6NMqLDnoFnvX/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1ihaWkXWnJ91E-vBvYuu-vSwZsYOygYIh/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1zalXMNPePuNEIlle9OHsM4pawZ_ZmPGF/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1lpG2IQ-LtfunN7U4-Meyc3AAodi2CFi4/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1w9Ju-7-C50_BWAWB1cmsFDUgpE-GtUIe/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1RjCTOq0N5-Y5igBTZw0uG7kRVvACE1hG/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1YOnADF6MF8azHY8uvMkFaA6T_dWdtjFv/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1GDaKQ7hueJC7JyV3TubbMUIpV29XGMe2/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1pSpsGK9gj4vfghZ6C4M8ZCz24eqnNYGC/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1-U2EdtHoFzQtLzeRf18zDToxxpA3JCHW/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1tglA2bl63pOkWyJz_iKsVkOwPdv7Z0U9/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1ovG7dYCHn8CJogh4Fghyqd4yoYGn1VRc/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1t8GV8RkIW6-UpRP4RyGpwmyjSWk0a_bB/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/12E701I7pE2T7XcMuu3QelfMOJkky3Zn2/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1mp32BVJaH2-yFYYMRP27fklvu-D4727C/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1EEf1neai8kaPczRlPtl60aCaSv33mIE0/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1nULby3McQtSVEBOE-phOOE7QdU21NZEj/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1W3bKHk2bnajDqoL-6el_7-ZQ1Lro3DBI/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1RtLltfX7y4si-qeZihbC6JZ3r7vFpC9z/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1FYB1txX3ivRnuLa_Fy-KnsVlYyHB_ILi/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1bKGl5_o6pKQGzQMxY08BE5KNARYpcsdC/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1ybiP6ttS7_kdM3W7OhDZmKNP7NdQsUXl/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/12ZrTpQY3hFFt3XdN-DevCKn4jf3drPBr/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1VC66Q9IitwdBcmovsvWYi_MoCVLxJHxl/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1sL75-2T33gGGku6QhuneVfWPnytcq0OD/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1YFHRHiU_35micH2uT1q3cvmPeojfsfQH/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/19i53TZdhg_5LOW8iADoPo8886od0gkLg/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1JCPf9DAwujWxEV7pZOBOStPxbpnuP7Ge/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1mNpqtjaAzPV63GryywjDHGe_bBseUqmX/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1yGEg_b2lxClSJildcBSMFyIUx1Z4Qcxy/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1qe9VmX53drTtr5dqEAVySKnGBkhh7fcI/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/19yY4-cIraUUYUos3u-YFp4R5IcJQ9CJA/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/14_I5LaWuCvVHw91PpjGcIwpzrqH0EATy/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1hiseBtVn55paiZq9f1UfRAuRZucBgxiM/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1_gp8zd95SA7cbkgkt4YNV4FItcRYt6Qv/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1wT2pXWtBkWuIwlU_HlCh6e9Z16Ds7lKX/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1YfDwZBDg_XR8YAEIvmApgJesFdNcyKhi/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1_zzg60jgiV5lTZtqZbVo-THsUGq2YgIc/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1iI04ool-wGAniIzIvCtVO5iwOyxbN8P_/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1SkCeALQ_lX_8PVEp6z8dbX0zokLjBf0Q/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1F-Sez0m5xSrrj7_eOB3he572Sz7ZKLJd/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1sUQb1FS_DEzQJtz6kd1ISsCfmOb-zQTH/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1yL7jk92lkFAjYNny0Z0g1Fev0e5FD5-_/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1F8g0GXt4Pf9SeQVXGokwqwPU_gmLbtld/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/10v15cahQc0jCvHOXsjLFEYGZWGFpk21r/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/12GxFV_g1_0fxMMmjIkkdXPoNDxACawSw/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1bnB6iaur9oL2Bv4_OZ1xJYQilfMcBiv7/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
                    Madhyakalin Bharat
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1ggNXeP359oR8JeUv4WfYh3KCWfDqd4fa/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1rsFoLMVxyIJxM8Bj05rCWDXGbAYl3j5n/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1XkSfEsqavfyshJvz7tz_ZPdvwzMCjeeI/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
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
              <a style={{ margin: "auto" }}
                  href="https://drive.google.com/file/d/1Oc3K-FEMxmFvfR9WG-MAMwe0HvFUdX3z/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                  Download
                </a>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Container>
      <ul>
	        <br />
	        <hr  />
          <li style={{listStyle: "none", fontSize: "20px", marginRight: "15px", fontStyle: "sans-serif" ,marginLeft: "15px"}}>For more details:- kindly contact on mobile number <u style={{textColor: "black"}}>7900007174</u></li>		
	    </ul>        

    </div>
        

  );
};

export default ncert;
