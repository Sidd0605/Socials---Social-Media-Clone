import "./App.css";
import Main from "./components/Main";
import Login from "./components/Login";
import { useState,useEffect } from "react";
import {db,auth} from './firebase';



function App() {
  const [user, setUser]  = useState("");
  const [login, setLogin]=useState(0);
  var s=1;

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        setLogin(1)
        console.log("user has logged in")
      }
      else{
        console.log("not logged in");
        setLogin(0)
      }
    })

  })




  return (
    <>

    {
      (login===1)?<Main username={user.displayName}/>:<Login/>
    }
    

    </>
  );
}

export default App;
