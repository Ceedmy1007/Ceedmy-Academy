import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter , Route, Switch, push } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import "./App.css";
import React from "react";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/register";
import Course from "./pages/Course/Course";
import Succes from "./pages/SuccesStory/Succes";
import About from "./pages/About/About";
import Upsc from "./pages/Course/Upsc";
import Mpsc from "./pages/Course/Mpsc";
import IIT from "./pages/Course/IIT.JEE";
import School from "./pages/Course/CBSE.ICSE.STATE";
import Clat from "./pages/Course/Clat";
import Neet from "./pages/Course/Neet";
import Mpsccontent from "./pages/Content/MPSC/mpsccontent";
import Upsccontent from "./pages/Content/UPSC/upsccontent";
import Clatcontent from "./pages/Content/CLAT/clatcontent";
import Quiz from "./pages/Content/Quizes/Quize";
import amplecontent from "./pages/Course/amplecontent";
import binarycontent from "./pages/Course/binarycontent";
import repeaterscontent from "./pages/Course/repeaterscontent";
import crashcontent from "./pages/Course/crashcontent";
import onlinecontent from "./pages/Course/onlinecontent";
import distancecontent from "./pages/Course/distancecontent";
import zenithiitjeecontent from "./pages/Course/IITJEE2022Course/zenithiitjeecontent";
import supportiitjeecontent from "./pages/Course/IITJEE2022Course/supportiitjeecontent";
import jeecrashiitjeecontent from "./pages/Course/IITJEE2022Course/jeecrashiitjeecontent";
import distanceiitjeecontent from "./pages/Course/IITJEE2022Course/distanceiitjeecontent";
import crashiitjeecontent from "./pages/Course/IITJEE2022Course/crashiitjeecontent";
import cetcrashiitjeecontent from "./pages/Course/IITJEE2022Course/cetcrashiitjeecontent";
//import basicupsccourses from "./pages/Course/UPSC2022Course/basicupsccourses";

// import Reports from "./Components/dashboard/Reports";
// import Support from "./Components/dashboard/Support";
// import Courses from "./Components/dashboard/Courses";

import Navbar from "./Components/Header";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/dashboard/Dashboard";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const DefaultRoutes = () => {
  return (
    <>
    <Navbar />
    <Switch>
     
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/course" component={Course} />
      <Route exact path="/succes" component={Succes} />
      <Route exact path="/about" component={About} />
      <Route exact path="/upsc" component={Upsc} />
      <Route exact path="/mpsc" component={Mpsc} />
      <Route exact path="/iit" component={IIT} />
      <Route exact path="/neet" component={Neet} />
      <Route exact path="/school" component={School} />
      <Route exact path="/clat" component={Clat} />
      <Route exact path="/mpsccontent" component={Mpsccontent} />
      <Route exact path="/upsccontent" component={Upsccontent} />
      <Route exact path="/clatcontent" component={Clatcontent} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/amplecontent" component={amplecontent} />
      <Route exact path="/binarycontent" component={binarycontent} />
      <Route exact path="/repeaterscontent" component={repeaterscontent} />
      <Route exact path="/crashcontent" component={crashcontent} />
      <Route exact path="/distancecontent" component={distancecontent} /> 
      <Route exact path="/onlinecontent" component={onlinecontent} />
      <Route exact path="/zenithiitjeecontent" component={zenithiitjeecontent} />
      <Route exact path="/supportiitjeecontent" component={supportiitjeecontent} />
      <Route exact path="/jeecrashiitjeecontent" component={jeecrashiitjeecontent} />
      <Route exact path="/distanceiitjeecontent" component={distanceiitjeecontent} />
      <Route exact path="/crashiitjeecontent" component={crashiitjeecontent} />
      <Route exact path="/cetcrashiitjeecontent" component={cetcrashiitjeecontent} />
      //<Route exact path="/basicupsccourses" component={basicupsccontent} />  
    
    </Switch>
     <Footer />
     </>
  );
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
           
            <PrivateRoute path="/dashboard/" component={Dashboard} />
           
            <Route path="/" component={DefaultRoutes} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default App;
