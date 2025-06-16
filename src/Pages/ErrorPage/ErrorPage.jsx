import React from "react";
import { Link } from "react-router";
import Title from "../../Components/Title/Title";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Title title={"404 Error"} /> <h1>404 Not Found</h1>
      <Link className="btn btn-primary" to="/">
        Return Home
      </Link>{" "}
    </div>
  );
};

export default ErrorPage;
