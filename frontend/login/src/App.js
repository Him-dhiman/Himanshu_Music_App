import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/firebase/PrivateRoute"
import { AuthProvider } from "./contexts/AuthContext"
import Signup from "./components/firebase/Signup";
import Login from "./components/firebase/Login";
import ForgotPassword from "./components/firebase/ForgotPassword";
import HomeRoute from "./components/routes/HomeRoute"

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Switch>
      <PrivateRoute exact path="/" exact component={HomeRoute}/>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </Switch>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
