import React from "react";
import "./css/Loginc.css"
import { Input } from "@mui/material";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { db, auth } from "../firebase";

export default function () {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  //Sign up function
  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        let userName = email;
        //console.log(userName)
        //setting user profile name
        for (let i = 0; i < userName.length; i++) {
          if (userName.charAt(i) == "@") {
            userName = userName.substring(0, i);
            break;
          }
        }
        console.log(userName)
        return authUser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((error) => alert(error.message));
  };

  //Login function
  const Login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };


  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("user has logged in");
        setUser(authUser);
      } else {
        setUser(null);
        console.log("not logged in");
      }
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <div
      
      className="body"
    >
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      ></link>

      <h1 className="title">Social</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

  
      <h2 className="login_box_title">Login</h2>
      <div className="login_box">
        <form action="">
          <div className="form-group">
            <label for="exampleInputEmail1 text-white">Email address</label>
            <Input
              type="email"
              className="form-control"
              id="user_emaill"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <br />
            <br />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <Input
              type="password"
              className="form-control"
              id="user_passs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <br />
          <center>
            <Button
              id="log_in"
              type="submit"
              className="btn btn-primary"
              onClick={Login}
            >
              Login
            </Button>
            <Button
              id="log_in"
              type="submit"
              className="btn btn-primary"
              onClick={signUp}
            >
              Sign-in
            </Button>
          </center>
          <hr />
          <hr />
        </form>
      </div>
    </div>
  );
}
