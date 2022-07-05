import React, { Fragment, useState, useEffect } from "react";
import TestimonioUAI from "../components/TestimonioSection/TestimonioUAI";
import TestimonioInternacional from "../components/TestimonioSection/TestimonioInternacional";
import TestimonioAdmin from "../components/TestimonioSection/TestimonioAdmin";
<<<<<<< HEAD
import AdminLogOut from "../components/AdminLogOut/AdminLogOut";
=======
import {Texto} from "../components/AuxSection/AuxElements"
import { Link } from "react-router-dom";
import axios from 'axios';
>>>>>>> 2f05709169504204fdac6a3f29a9cffbe37670cd

const Admin = () => {
  const [auth, setAuth] = useState(false);
  const token = localStorage.getItem("token");

<<<<<<< HEAD
  return (
    <Fragment>
        <AdminLogOut>
        </AdminLogOut>
        <TestimonioUAI showAdmin={true}/>
        <TestimonioInternacional showAdmin={true}/>
        <TestimonioAdmin/>
    </Fragment>

)};
=======

  const getAuth = async () => {
    const getAllApiUrl = 'http://localhost:3001/verify'
    axios
    .get(getAllApiUrl,{ headers: { token: token } })
    .then((response) => {
      if(response.data===true){
        setAuth(true);
      }else{
        setAuth(false);
      }
    })
  }

  useEffect(() => {
    getAuth()
  },)

  if(auth===true){
    return (
      <Fragment>
          <TestimonioUAI showAdmin={true}/>
          <TestimonioInternacional showAdmin={true}/>
          <TestimonioAdmin/>
      </Fragment>
    )
  } else {
    return(
      <Fragment>
          <Texto>Página no disponible, porfavor inicie sesión.</Texto>
          <Link to="/login">
            <Texto> Iniciar Sesión</Texto>
          </Link>
      </Fragment>
    )
  }
};
>>>>>>> 2f05709169504204fdac6a3f29a9cffbe37670cd

export default Admin;
