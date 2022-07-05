import React, { Fragment } from "react";
import TestimonioUAI from "../components/TestimonioSection/TestimonioUAI";
import TestimonioInternacional from "../components/TestimonioSection/TestimonioInternacional";
import TestimonioAdmin from "../components/TestimonioSection/TestimonioAdmin";
import AdminLogOut from "../components/AdminLogOut/AdminLogOut";

const Admin = () => {

  return (
    <Fragment>
        <AdminLogOut>
        </AdminLogOut>
        <TestimonioUAI showAdmin={true}/>
        <TestimonioInternacional showAdmin={true}/>
        <TestimonioAdmin/>
    </Fragment>

)};

export default Admin;
