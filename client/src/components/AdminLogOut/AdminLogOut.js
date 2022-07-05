import { React } from "react";
import {LogOutBg,LogOutButtonPlace,LogOutButton  } from "./LogOutElements";
import { useNavigate } from "react-router-dom";

const AdminLogOut = () => {
   const navigate = useNavigate();

   const cerrarSesion = () => {
      localStorage.clear();
      navigate("/");
   }

   return (
      <>
         <LogOutBg>
            <LogOutButtonPlace>
               <LogOutButton onClick={cerrarSesion}>LogOut</LogOutButton>
            </LogOutButtonPlace>
               
         </LogOutBg>
      </> 
   )
};

export default AdminLogOut;