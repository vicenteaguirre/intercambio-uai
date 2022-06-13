import React, { Fragment } from "react";
import TestimonioUAI from "../components/TestimonioSection/TestimonioUAI";
import TestimonioInternacional from "../components/TestimonioSection/TestimonioInternacional";
import TestimonioAdmin from "../components/TestimonioSection/TestimonioAdmin";

const Admin = () => {
  const showAdmin = true;
  return (
    <Fragment>
        <TestimonioUAI/>
        <TestimonioInternacional/>
        <TestimonioAdmin/>
    </Fragment>
)};

export default Admin;
