import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>404 Not Found</h1>
      <Link className="btn btn-primary" to="/">
        Return Home
      </Link>{" "}
    </div>
  );
};

export default ErrorPage;
