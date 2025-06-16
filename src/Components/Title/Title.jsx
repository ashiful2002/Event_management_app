import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | SODEV</title>
    </Helmet>
  );
};

export default Title;
