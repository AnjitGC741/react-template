import React from "react";
import { Navigate } from "react-router-dom";








//Tables

import ReactTable from "../pages/Tables/ReactTables";



//QA Management
import HomePage from "../pages/QAManagement/HomePage";
import ModuleList from "../pages/QAManagement/ModuleList";
import TestCase from "../pages/QAManagement/TestCase";
import UserManagement from "../pages/QAManagement/UserManagement";
import TestResult from "../pages/QAManagement/TestResult";


//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';

//pages
import Starter from '../pages/Pages/Starter/Starter';
import SimplePage from '../pages/Pages/Profile/SimplePage/SimplePage';
import Settings from '../pages/Pages/Profile/Settings/Settings';
import Timeline from '../pages/Pages/Timeline/Timeline';

import SiteMap from '../pages/Pages/SiteMap/SiteMap';
import SearchResults from '../pages/Pages/SearchResults/SearchResults';
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ApiKey from '../pages/APIKey/index'



// User Profile
import UserProfile from "../pages/Authentication/user-profile";
import Test from "../pages/Pages/Profile/SimplePage/Test";




const authProtectedRoutes = [

  { path: "/home", component: <Navigate to="/project" /> },




  //Tables
  { path: "/tables-react", component: <ReactTable /> },


  //QA Management
  { path: "/project", component: <HomePage /> },
  { path: "/project/:id", component:  <ModuleList/> },
  { path: "/project/module/testcase/:id", component: <TestResult /> },
  { path: "/project/module/:id", component: <TestCase /> },
  { path: "/users", component: <UserManagement /> },


  //Pages
  { path: "/pages-starter", component: <Starter /> },
  { path: "/pages-profile", component: <SimplePage /> },
  { path: "/pages-profile-settings", component: <Settings /> },
  { path: "/pages-timeline", component: <Timeline /> },



  { path: "/pages-sitemap", component: <SiteMap /> },
  { path: "/pages-search-results", component: <SearchResults /> },




  //APIkey
  { path: "/apps-api-key", component: <ApiKey /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/project" />,
  },
  { path: "*", component: <Navigate to="/auth-404-cover" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  {path:"/test",component:<Test/>},

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/auth-offline", component: <Offlinepage /> },

];

export { authProtectedRoutes, publicRoutes };