import React from "react";
import './ErrorPage.scss'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1>
          Error <span className="errorcode">404</span>
        </h1>
        <p className="output">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p className="output">
          Please try to <Link to={'/'}>Home</Link>
        </p>
        <p className="output">Good luck.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
